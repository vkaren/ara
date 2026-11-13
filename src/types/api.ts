export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: Pagination;
}

export interface ApiError {
  error: true;
  status: number;
  message: string;
}

export type ApiResponse<T> = T | PaginatedResponse<T> | ApiError;

export interface ApiRequest {
  method: string;
  route: string;
  type?: "application/json" | "multipart/form-data";
  body?: BodyInit | Record<string, unknown> | null;
  headers?: Record<string, string>;
  signal?: AbortSignal;
  ssr?: Record<string, unknown>;
  token?: string;
}

export type ApiResult<
  T extends Record<string, unknown> | unknown[] = Record<string, unknown> | unknown[],
> = T | ApiError;
