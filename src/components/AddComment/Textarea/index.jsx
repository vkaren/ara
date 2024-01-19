import styles from "./styles.module.css";

const Textarea = ({ isAReply }) => {
  return (
    <textarea
      className={styles["adc_textarea"]}
      name="content"
      placeholder={isAReply ? "Reply" : "What's happenning?"}
      maxLength={250}
    />
  );
};

export default Textarea;
