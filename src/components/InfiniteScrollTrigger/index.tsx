import { useEffect, useRef } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

const InfiniteScrollTrigger = ({ hasMore, isLoading, onLoadMore }) => {
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!hasMore || isLoading || !triggerRef.current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onLoadMore();
      },
      { rootMargin: "240px" }
    );

    observer.observe(triggerRef.current);

    return () => observer.disconnect();
  }, [hasMore, isLoading, onLoadMore]);

  if (!hasMore && !isLoading) return null;

  return (
    <Stack ref={triggerRef} sx={{ minHeight: 24, py: 2, alignItems: "center" }}>
      {isLoading && <CircularProgress size={24} aria-label="Loading more" />}
    </Stack>
  );
};

export default InfiniteScrollTrigger;
