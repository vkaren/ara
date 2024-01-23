import styles from "./styles.module.css";

const SubmitButton = ({ isAReply, onSubmit }) => {
  return (
    <button onClick={onSubmit} className={styles["adc_send-btn"]}>
      {isAReply ? "REPLY" : "POST"}
    </button>
  );
};

export default SubmitButton;
