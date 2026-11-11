const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 20;
const MAX_LIMIT = 100;

const normalizePagination = (
  pagination = {},
  fallbackPage = DEFAULT_PAGE,
  fallbackLimit = DEFAULT_LIMIT
) => ({
  page: Number(pagination.page) || fallbackPage,
  limit: Math.min(Number(pagination.limit) || fallbackLimit, MAX_LIMIT),
  total: Number(pagination.total) || 0,
  totalPages: Number(pagination.totalPages) || 0,
});

const normalizePaginatedResponse = (
  response,
  fallbackPage = DEFAULT_PAGE,
  fallbackLimit = DEFAULT_LIMIT
) => {
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

const buildPaginatedRoute = (
  route,
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  params = {}
) => {
  const searchParams = new URLSearchParams({
    ...params,
    page: String(page),
    limit: String(Math.min(limit, MAX_LIMIT)),
  });

  return `${route}${route.includes("?") ? "&" : "?"}${searchParams.toString()}`;
};

const getAllPages = async (request, { limit = MAX_LIMIT } = {}) => {
  const allData = [];
  let page = DEFAULT_PAGE;
  let response;

  do {
    response = normalizePaginatedResponse(await request(page, limit), page, limit);
    allData.push(...response.data);
    page += 1;
  } while (response.pagination.totalPages && page <= response.pagination.totalPages);

  return allData;
};

export {
  DEFAULT_LIMIT,
  MAX_LIMIT,
  buildPaginatedRoute,
  getAllPages,
  normalizePaginatedResponse,
};
