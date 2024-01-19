import styles from "./styles.module.css";

const SubmitButton = ({ isAReply }) => {
  const onClickSendBtn = (e) => {
    // onSendPostOrReply({ e, isAReply });
  };

  return (
    <button onClick={onClickSendBtn} className={styles["adc_send-btn"]}>
      {isAReply ? "REPLY" : "POST"}
    </button>
  );
};

export default SubmitButton;
