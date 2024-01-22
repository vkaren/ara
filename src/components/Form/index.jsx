const Form = ({
  form,
  inputs = [],
  type,
  submitMsg = {},
  onSubmit,
  styles,
}) => {
  return (
    <form ref={form} className={styles[`${type}-section__form`]}>
      {inputs.map((input) => {
        return (
          <label htmlFor={input.props.name} className={styles["form__field"]}>
            <span className={styles["field__title"]}>{input.title}</span>
            <input
              className={`${styles["field__input"]} ${
                input.props.type === "file" && styles["file"]
              }`}
              id={input.props.name}
              {...input.props}
            />

            {input.anotherComponent && input.anotherComponent(null)}
          </label>
        );
      })}

      <button onClick={onSubmit} className={styles["form__submit"]}>
        Save
      </button>

      <span
        className={`${styles["form__msg"]} ${
          submitMsg.error && styles["error"]
        }`}
      >
        {submitMsg.msg}
      </span>
    </form>
  );
};

export default Form;
