import config from "@config";
import { getItem } from "@utils/cookies";
import type { ApiRequest, ApiResult } from "@app-types/api";

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const api = async <
  T extends Record<string, unknown> | unknown[] = Record<string, unknown> | unknown[],
>({
  method,
  type,
  body,
  route,
  headers = {},
  signal,
  ssr = {},
  token = getItem("token", ssr),
}: ApiRequest): Promise<ApiResult<T>> => {
  try {
    if (!config.api) {
      throw new Error("NEXT_PUBLIC_API_URL is not configured.");
    }

    const requestHeaders: Record<string, string> = { ...headers };

    if (token) {
      requestHeaders.Authorization = `Bearer ${token}`;
    }

    const requestOptions: RequestInit = {
      method,
      credentials: "include",
      headers: requestHeaders,
      signal,
    };

    if (type === "application/json") {
      requestHeaders["Content-Type"] = "application/json";
      requestOptions.body = JSON.stringify(body);
    } else if (type === "multipart/form-data" && body instanceof FormData) {
      requestOptions.body = body;
    }

    const response = await fetch(
      `${config.api.replace(/\/$/, "")}/${route.replace(/^\//, "")}`,
      requestOptions
    );
    const responseText = await response.text();
    let data: unknown = {};

    if (responseText) {
      try {
        data = JSON.parse(responseText);
      } catch {
        data = { message: responseText };
      }
    }

    if (!response.ok) {
      return {
        ...(isRecord(data) ? data : {}),
        error: true,
        status: response.status,
        message:
          (isRecord(data) && typeof data.message === "string" && data.message) ||
          `Request failed with status ${response.status}.`,
      };
    }

    return data as ApiResult<T>;
  } catch (error) {
    return {
      error: true,
      status: 0,
      message:
        error instanceof Error ? error.message : "Unable to complete the API request.",
    };
  }
};

export default api;
