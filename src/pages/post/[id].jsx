import { useContext, useEffect, useState } from "react";
import { AppContext } from "@context/appContext";
import { ListeningSocketContext } from "@context/listeningSocketContext";
import api from "@utils/api";
import AppLayout from "@containers/AppLayout";
import NavBack from "@components/NavBack";
import Post from "@components/Post";
import Replies from "@components/Replies";

export async function getServerSideProps({ req, res, query }) {
  const props = {
    post: {},
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

const PostPage = ({ post }) => {
  const { socketData } = useContext(ListeningSocketContext);
  const { replyDeleted } = useContext(AppContext);
  const [replies, setReplies] = useState(post.replies);

  useEffect(() => addNewReply(), [socketData]);

  useEffect(() => removeReply(), [replyDeleted]);

  const addNewReply = () => {
    const { newReply } = socketData;

    if (newReply) {
      setReplies([...replies, newReply]);
    }
  };

  const removeReply = () => {
    if (replyDeleted) {
      const replyToDeleteId = replies.findIndex(
        (reply) => reply.id === replyDeleted
      );
      const newReplies = [...replies];
      newReplies.splice(replyToDeleteId, 1);

      setReplies(newReplies);
    }
  };
  return (
    <AppLayout>
      <NavBack />

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
    </AppLayout>
  );
};

export default PostPage;
