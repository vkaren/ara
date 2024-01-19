import AddComment from "@components/AddComment";
import Post from "@components/Post";
import styles from "./styles.module.css";

const postTest = {
  id: 1,
  author: { nickname: "karen", username: "karen" },
  createdAt: "1 min",
  content: "Hola",
};

const Home = ({ postList = [postTest] }) => {
  return (
    <>
      <AddComment />

      <section className={styles["post-list__container"]}>
        {postList.map((post) => (
          <Post
            key={`post-${post.id}`}
            id={post.id}
            author={post.author}
            createdAt={post.createdAt}
            content={post.content}
            insertedImage={post.inserted_image}
            likes={post.likes}
            replies={post.replies}
          />
        ))}
      </section>
    </>
  );
};

export default Home;
