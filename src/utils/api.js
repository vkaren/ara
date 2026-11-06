import config from "@config";
import { getItem } from "@utils/cookies";

const api = async ({
  method,
  type,
  body,
  route,
  headers = {},
  ssr = {},
  token = getItem("token", ssr),
}) => {
  try {
    if (!config.api) {
      throw new Error("NEXT_PUBLIC_API_URL is not configured.");
    }

    const requestOptions = {
      method,
      credentials: "include",
      headers: { ...headers },
    };

    if (token) {
      requestOptions.headers.Authorization = `Bearer ${token}`;
    }

    if (type === "application/json") {
      requestOptions.headers = {
        ...requestOptions.headers,
        "Content-Type": "application/json",
      };

      requestOptions.body = JSON.stringify(body);
    } else if (type === "multipart/form-data") {
      requestOptions.body = body;
    }

    const response = await fetch(
      `${config.api.replace(/\/$/, "")}/${route.replace(/^\//, "")}`,
      requestOptions
    );
    const responseText = await response.text();
    let data = {};

    if (responseText) {
      try {
        data = JSON.parse(responseText);
      } catch {
        data = { message: responseText };
      }
    }

    if (!response.ok) {
      return {
        ...(typeof data === "object" && !Array.isArray(data) ? data : {}),
        error: true,
        status: response.status,
        message: data.message || `Request failed with status ${response.status}.`,
      };
    }

    return data;
  } catch (err) {
    return {
      error: true,
      status: 0,
      message: err instanceof Error ? err.message : "Unable to complete the API request.",
    };
  }
};

export default api;
