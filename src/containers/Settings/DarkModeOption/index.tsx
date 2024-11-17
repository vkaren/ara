const DarkModeOption = ({ styles }) => {
  return (
    <li>
      <label
        htmlFor="switch"
        id="hover"
        className={`${styles["settings-option"]} clrWhite hoverBlack`}
      >
        <span className="">Set dark mode</span>

        <div className={""}>
          <input
            className={""}
            id="switch"
            name="mode"
            type="checkbox"
            aria-label="enable or disable dark mode"
          />
          <span className={""}></span>
        </div>
      </label>
    </li>
  );
};

export default DarkModeOption;
