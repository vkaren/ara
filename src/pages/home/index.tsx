import { useCallback, useContext, useEffect, useState } from "react";
import { ListeningSocketContext } from "@context/listeningSocketContext";
import { AppContext } from "@context/appContext";
import api from "@utils/api";
import AppLayout from "@containers/AppLayout";
import Home from "@containers/Home";
import InfiniteScrollTrigger from "@components/InfiniteScrollTrigger";
import { buildPaginatedRoute, normalizePaginatedResponse } from "@utils/pagination";
import type { Post } from "@app-types/domain";
import type { Pagination } from "@app-types/api";

export async function getServerSideProps({ req, res }) {
  const props: { postsData: Post[]; pagination: Pagination } = {
    postsData: [],
    pagination: { page: 1, limit: 20, total: 0, totalPages: 0 },
  };

  const posts = await api({
    method: "GET",
    route: buildPaginatedRoute("post"),
    ssr: { req, res },
  });

  const normalizedPosts = normalizePaginatedResponse(posts);
  props.postsData = normalizedPosts.data;
  props.pagination = normalizedPosts.pagination;

  return { props };
}

const HomePage = ({ postsData, pagination: initialPagination }) => {
  const { socketData } = useContext(ListeningSocketContext);
  const { postDeleted } = useContext(AppContext);
  const [posts, setPosts] = useState(postsData || []);
  const [pagination, setPagination] = useState(initialPagination || {});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const newPost = socketData.newPost;

    if (newPost) {
      setPosts((currentPosts) => {
        const alreadyAdded = currentPosts.some((post) => post.id === newPost.id);

        return alreadyAdded ? currentPosts : [newPost, ...currentPosts];
      });
    }
  }, [socketData.newPost]);

  useEffect(() => {
    if (postDeleted) {
      setPosts((currentPosts) =>
        currentPosts.filter((post) => post.id !== postDeleted)
      );
    }
  }, [postDeleted]);

  const onLoadMore = useCallback(async () => {
    const nextPage = (pagination.page || 1) + 1;

    if (isLoading || !pagination.totalPages || nextPage > pagination.totalPages) {
      return;
    }

    setIsLoading(true);
    const response = await api({
      method: "GET",
      route: buildPaginatedRoute("post", nextPage),
    });
    const normalizedPosts = normalizePaginatedResponse(response, nextPage);

    if (!response.error) {
      setPosts((currentPosts) => {
        const currentIds = new Set(currentPosts.map((post) => post.id));
        return [
          ...currentPosts,
          ...normalizedPosts.data.filter((post) => !currentIds.has(post.id)),
        ];
      });
      setPagination(normalizedPosts.pagination);
    }
    setIsLoading(false);
  }, [isLoading, pagination]);

  return (
    <AppLayout title="Home | Ara">
      <Home posts={posts} />
      <InfiniteScrollTrigger
        hasMore={pagination.page < pagination.totalPages}
        isLoading={isLoading}
        onLoadMore={onLoadMore}
      />
    </AppLayout>
  );
};

export default HomePage;
