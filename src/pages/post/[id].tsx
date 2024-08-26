import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { AppContext } from "@context/appContext";
// import { ListeningSocketContext } from "@context/listeningSocketContext";
// import api from "@utils/api";
// import getPreviousRoute from "@utils/getPreviousRoute";
import AppLayout from "@containers/AppLayout";
import NavBack from "@components/NavBack";
import Post from "@components/Post";
import Replies from "@components/Replies";

// export async function getServerSideProps({ req, res, query }) {
//   const props = {
//     post: {},
//     previousRoute: getPreviousRoute(req),
//   };

//   const post = await api({
//     method: "GET",
//     route: `post/${query.id}`,
//     ssr: {
//       req,
//       res,
//     },
//   });

//   if (!post.error && post.message !== "Internal server error") {
//     props.post = post;
//   } else {
//     return {
//       notFound: true,
//     };
//   }

//   return { props };
// }

const PostPage = ({ post, previousRoute }) => {
  const router = useRouter();
  // const { socketData } = useContext(ListeningSocketContext);
  // const { postDeleted, replyDeleted } = useContext(AppContext);
  const [replies, setReplies] = useState([]);

  // useEffect(() => onDeletePost(), [postDeleted]);

  // useEffect(() => addNewReply(), [socketData]);

  // useEffect(() => removeReply(), [replyDeleted]);

  // const onDeletePost = () => {
  //   if (post.id === postDeleted) {
  //     if (previousRoute) {
  //       router.back();
  //     } else {
  //       router.push("/home");
  //     }
  //   }
  // };

  // const addNewReply = () => {
  //   const { newReply } = socketData;

  //   if (!!newReply) {
  //     setReplies([...replies, newReply]);
  //   }
  // };

  // const removeReply = () => {
  //   if (!!replyDeleted) {
  //     const replyToDeleteId = replies.findIndex(
  //       (reply) => reply.id === replyDeleted
  //     );
  //     const newReplies = [...replies];

  //     if (replyToDeleteId > -1) newReplies.splice(replyToDeleteId, 1);

  //     setReplies(newReplies);
  //   }
  // };
  return (
    <AppLayout>
      <NavBack prevRoute={previousRoute} />

      {/* <Post
        id={post.id}
        author={post.author}
        content={post.content}
        createdAt={post.createdAt}
        insertedImage={post.inserted_image}
        likes={post.likes}
        replies={replies}
      />
      <Replies replies={replies} /> */}
    </AppLayout>
  );
};

export default PostPage;
