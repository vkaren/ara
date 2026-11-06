import { useContext, useEffect, useState } from "react";
import { ListeningSocketContext } from "@context/listeningSocketContext";
import { AppContext } from "@context/appContext";
import api from "@utils/api";
import AppLayout from "@containers/AppLayout";
import Home from "@containers/Home";

export async function getServerSideProps({ req, res }) {
  const props = {
    postsData: [],
  };

  const posts = await api({
    method: "GET",
    route: "post",
    ssr: { req, res },
  });

  if (Array.isArray(posts)) {
    props.postsData = posts;
  }

  return { props };
}

const HomePage = ({ postsData }) => {
  const { socketData } = useContext(ListeningSocketContext);
  const { postDeleted } = useContext(AppContext);
  const [posts, setPosts] = useState(postsData || []);

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

  return (
    <AppLayout title="Home | Ara">
      <Home posts={posts} />
    </AppLayout>
  );
};

export default HomePage;
