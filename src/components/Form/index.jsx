const Form = ({
  form,
  inputs = [],
  type,
  fileUploaded,
  submitMsg = {},
  onSubmit,
  styles,
  children,
}) => {
  return (
    <form ref={form} className={styles[`${type}-section__form`]}>
      {inputs.map((input) => {
        return (
          <label
            key={input.props.name}
            htmlFor={input.props.name}
            className={styles["form__field"]}
          >
            <span className={`${styles["field__title"]} clrVryLgtPurple`}>
              {input.title}
            </span>
            <input
              className={`
              ${styles["field__input"]} 
              ${submitMsg.error && styles["error"]} 
              ${input.props.type === "file" && styles["file"]}
              bckgLgtPurple
              `}
              id={input.props.name}
              {...input.props}
            />

            {input.anotherComponent &&
              input.anotherComponent(
                input.props.type === "file" ? fileUploaded : null
              )}
          </label>
        );
      })}

      <button onClick={onSubmit} className={styles["form__submit"]}>
        {type === "edit" ? "Save" : "Continue"}
      </button>

      <span
        className={`${styles["form__msg"]} ${
          submitMsg.error && `${styles["error"]} clrLgtRed`
        } clrLgtGreen`}
      >
        {submitMsg.msg}
      </span>

      {children}
    </form>
  );
};

export default Form;
