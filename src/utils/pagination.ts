const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 20;
const MAX_LIMIT = 100;
import type { PaginatedResponse, Pagination } from "@app-types/api";

export type { PaginatedResponse, Pagination } from "@app-types/api";

const normalizePagination = (
  pagination: Partial<Pagination> = {},
  fallbackPage = DEFAULT_PAGE,
  fallbackLimit = DEFAULT_LIMIT
): Pagination => ({
  page: Number(pagination.page) || fallbackPage,
  limit: Math.min(Number(pagination.limit) || fallbackLimit, MAX_LIMIT),
  total: Number(pagination.total) || 0,
  totalPages: Number(pagination.totalPages) || 0,
});

export const normalizePaginatedResponse = <T>(
  response: T[] | Partial<PaginatedResponse<T>> | null | undefined,
  fallbackPage = DEFAULT_PAGE,
  fallbackLimit = DEFAULT_LIMIT
): PaginatedResponse<T> => {
  if (Array.isArray(response)) {
    return {
      data: response,
      pagination: normalizePagination(
        {
          page: fallbackPage,
          limit: fallbackLimit,
          total: response.length,
          totalPages: 1,
        },
        fallbackPage,
        fallbackLimit
      ),
    };
  }

  return {
    data: Array.isArray(response?.data) ? response.data : [],
    pagination: normalizePagination(response?.pagination, fallbackPage, fallbackLimit),
  };
};

export const buildPaginatedRoute = (
  route: string,
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  params: Record<string, string> = {}
): string => {
  const searchParams = new URLSearchParams({
    ...params,
    page: String(page),
    limit: String(Math.min(limit, MAX_LIMIT)),
  });

  return `${route}${route.includes("?") ? "&" : "?"}${searchParams.toString()}`;
};

export const getAllPages = async <T>(
  request: (page: number, limit: number) => Promise<T[] | PaginatedResponse<T>>,
  { limit = MAX_LIMIT }: { limit?: number } = {}
): Promise<T[]> => {
  const allData: T[] = [];
  let page = DEFAULT_PAGE;
  let response: PaginatedResponse<T>;

  do {
    response = normalizePaginatedResponse(await request(page, limit), page, limit);
    allData.push(...response.data);
    page += 1;
  } while (response.pagination.totalPages && page <= response.pagination.totalPages);

  return allData;
};

export { DEFAULT_LIMIT, MAX_LIMIT };
