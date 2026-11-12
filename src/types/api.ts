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
