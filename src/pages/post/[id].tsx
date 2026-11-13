import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AppContext } from "@context/appContext";
import { ListeningSocketContext } from "@context/listeningSocketContext";
import api from "@utils/api";
import getPreviousRoute from "@utils/getPreviousRoute";
import AppLayout from "@containers/AppLayout";
import NavBack from "@components/NavBack";
import Post from "@components/Post";
import Replies from "@components/Replies";
import { Box } from "@mui/material";

export async function getServerSideProps({ req, res, query }) {
  const props = {
    post: {},
    previousRoute: getPreviousRoute(req),
  };

  const post = await api({
    method: "GET",
    route: `post/${query.id}`,
    ssr: {
      req,
      res,
    },
  });

  if (!post.error && post.message !== "Internal server error") {
    props.post = post;
  } else {
    return {
      notFound: true,
    };
  }

  return { props };
}

const PostPage = ({ post, previousRoute }) => {
  const router = useRouter();
  const { socketData } = useContext(ListeningSocketContext);
  const { postDeleted, replyDeleted } = useContext(AppContext);
  const [replies, setReplies] = useState(post.replies);

  useEffect(() => {
    if (post.id !== postDeleted) return;

    if (previousRoute) {
      router.back();
    } else {
      router.push("/home");
    }
  }, [post.id, postDeleted, previousRoute, router]);

  useEffect(() => {
    const newReply = socketData.newReply;

    if (newReply) {
      setReplies((currentReplies) => {
        const alreadyAdded = currentReplies.some((reply) => reply.id === newReply.id);

        return alreadyAdded ? currentReplies : [...currentReplies, newReply];
      });
    }
  }, [socketData.newReply]);

  useEffect(() => {
    if (replyDeleted) {
      setReplies((currentReplies) =>
        currentReplies.filter((reply) => reply.id !== replyDeleted)
      );
    }
  }, [replyDeleted]);

  return (
    <AppLayout title="Post | Ara">
      <NavBack prevRoute={previousRoute} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          mt: 2,
        }}
      >
        <Post
          id={post.id}
          author={post.author}
          content={post.content}
          createdAt={post.createdAt}
          insertedImage={post.inserted_image}
          likes={post.likes}
          replies={replies}
        />
        <Replies replies={replies} />
      </Box>
    </AppLayout>
  );
};

export default PostPage;
