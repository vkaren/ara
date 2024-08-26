import dynamic from "next/dynamic";
import AddComment from "@components/AddComment";
import styles from "./styles.module.css";

const Post = dynamic(() => import("@components/Post"), { ssr: false });

const Home = ({ posts }) => {
  return (
    <>
      <AddComment />

      <section className={styles["post-list__container"]}>
        {posts.map(post => (
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
