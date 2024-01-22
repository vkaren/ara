import AppLayout from "@containers/AppLayout";
import NavBack from "@components/NavBack";
import Post from "@components/Post";
import Replies from "@components/Replies";

const postTest = {
  id: 1,
  author: { nickname: "karen", username: "karen" },
  createdAt: "1 min",
  content: "Hola",
  replies: [
    {
      id: 2,
      author: { nickname: "mango", username: "mango" },
      createdAt: "1 min",
      content: "Hello",
      replying_to_post: 1,
      replying_to_user: "karen",
    },
  ],
};

const PostPage = () => {
  return (
    <AppLayout>
      <NavBack />

      <Post
        id={postTest.id}
        author={postTest.author}
        content={postTest.content}
        createdAt={postTest.createdAt}
        insertedImage={postTest.inserted_image}
        likes={postTest.likes}
        replies={postTest.replies}
        // onDeletePost={onDeletePost}
      />
      <Replies
        replies={postTest.replies}
        // onDeleteReply={onDeleteReply}
      />
    </AppLayout>
  );
};

export default PostPage;
