import Home from "@containers/Home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// TODO
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

// export async function getServerSideProps({ req, res }) {
//   const props = {
//     postsData: [],
//   };

//   const posts = await api({
//     method: "GET",
//     route: "post",
//     ssr: { req, res },
//   });

//   if (Array.isArray(posts)) {
//     props.postsData = posts;
//   }

//   return { props };
// }

const HomePage = () => {
  // const { socketData } = useContext(ListeningSocketContext);
  // const { postDeleted } = useContext(AppContext);
  // const [posts, setPosts] = useState(postsData || []);

  // useEffect(() => addNewPost(), [socketData]);

  // useEffect(() => removePost(), [postDeleted]);

  // const addNewPost = () => {
  //   const newPost = socketData.newPost;

  //   if (!!newPost) {
  //     const isPostAlreadyAdded = posts.find((post) => post.id === newPost.id);

  //     if (!isPostAlreadyAdded) setPosts([newPost, ...posts]);
  //   }
  // };

  // const removePost = () => {
  //   if (!!postDeleted) {
  //     const postToDeleteId = posts.findIndex((post) => post.id === postDeleted);
  //     const newPosts = [...posts];

  //     if (postToDeleteId > -1) newPosts.splice(postToDeleteId, 1);

  //     setPosts(newPosts);
  //   }
  // };

  return <Home />;
};

export default HomePage;
