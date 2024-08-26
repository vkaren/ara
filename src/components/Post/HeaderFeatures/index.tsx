import { useContext, useState } from "react";
// import { AppContext } from "@context/appContext";
import DeleteModal from "@components/DeleteModal";
import IconComponent from "@components/Icon";
import Features from "../Features";
// import api from "@utils/api";
import styles from "./styles.module.css";

const HeaderFeatures = ({ id, authorId, isAReply }) => {
  // const { savePostDeleted, saveReplyDeleted } = useContext(AppContext);
  const [showFeatures, setShowFeatures] = useState(false);
  const [isDeletingPost, setIsDeletingPost] = useState(false);

  const onClickFeaturesIcon = e => {
    e.stopPropagation();
    // setShowFeatures(!showFeatures);
  };

  const toggleDeleteModal = e => {
    if (e) e.stopPropagation();

    // setIsDeletingPost(!isDeletingPost);
  };

  const onDeletePost = async e => {
    e.stopPropagation();

    // const request = {
    //   method: "DELETE",
    //   type: "application/json",
    //   body: {
    //     author_id: authorId,
    //   },
    // };

    // if (!!isAReply) {
    //   request.route = "reply";
    //   request.body.reply_id = id;
    // } else {
    //   request.route = "post";
    //   request.body.post_id = id;
    // }

    // const isDeleted = await api(request);

    // if (isDeleted) {
    //   isAReply ? saveReplyDeleted(isDeleted.replyDeleted) : savePostDeleted(isDeleted.postDeleted);

    //   toggleDeleteModal();
    // }
  };

  return (
    <>
      <div onClick={onClickFeaturesIcon} className={styles["header__features"]} role="button">
        <IconComponent name="features" className={styles["features_icon"]} />

        {showFeatures && <Features onClickDeleteBtn={toggleDeleteModal} />}
      </div>

      {isDeletingPost && (
        <DeleteModal type="post" onDelete={onDeletePost} onCancelDelete={toggleDeleteModal} />
      )}
    </>
  );
};

export default HeaderFeatures;
