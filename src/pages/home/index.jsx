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

  useEffect(() => addNewPost(), [socketData]);

  useEffect(() => removePost(), [postDeleted]);

  const addNewPost = () => {
    const newPost = socketData.newPost;

    if (!!newPost) {
      setPosts([newPost, ...posts]);
    }
  };

  const removePost = () => {
    if (!!postDeleted) {
      const postToDeleteId = posts.findIndex((post) => post.id === postDeleted);
      const newPosts = [...posts];

      if (postToDeleteId > -1) newPosts.splice(postToDeleteId, 1);

      setPosts(newPosts);
    }
  };

  return (
    <AppLayout>
      <Home posts={posts} />
    </AppLayout>
  );
};

export default HomePage;
