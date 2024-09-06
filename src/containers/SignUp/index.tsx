import { AuthForm } from "@components/Forms";

// TODO: Create controller
const SignUp = () => {
  // const router = useRouter();
  // // const { saveLoginResponse } = useContext(UserContext);
  // const [signUpMsg, setSignUpMsg] = useState({ error: false, msg: "" });
  // const form = createRef();

  // const onSubmit = async e => {
  //   e.preventDefault();

  //   setSignUpMsg({ error: false, msg: "" });

  //   const formData = new FormData(form.current);

  //   const nickname = formData.get("nickname");
  //   const username = formData.get("username").toLowerCase();
  //   const password = formData.get("password");

  //   formData.set("username", username);

  //   const canCreateAccount = validateForm({
  //     nickname,
  //     username,
  //     password,
  //   });

  //   if (canCreateAccount) {
  //     await createAccount(formData, { username, password });
  //   }
  // };

  // const validateForm = ({ nickname, username, password }) => {
  //   const allowedCharacters = /^([a-z0-9_])+$/i;
  //   const isPasswordRightLength = password.length >= 5;
  //   const nicknameHaveSpaces = nickname.includes(" ");

  //   if (
  //     nickname &&
  //     !nicknameHaveSpaces &&
  //     allowedCharacters.test(username) &&
  //     allowedCharacters.test(password) &&
  //     isPasswordRightLength
  //   ) {
  //     setSignUpMsg({ error: false, msg: "" });
  //     return true;
  //   } else if (!nickname) {
  //     setSignUpMsg({ error: true, msg: "Nickname required." });
  //   } else if (!username) {
  //     setSignUpMsg({ error: true, msg: "Username required." });
  //   } else if (!password) {
  //     setSignUpMsg({ error: true, msg: "Password required." });
  //   } else if (!isPasswordRightLength) {
  //     setSignUpMsg({
  //       error: true,
  //       msg: "Password must be at least 5 characters long.",
  //     });
  //   } else if (nicknameHaveSpaces) {
  //     setSignUpMsg({ error: true, msg: "Nickname cannot contain spaces." });
  //   } else {
  //     setSignUpMsg({
  //       error: true,
  //       msg: "Username and password can only contain underscores and alphanumeric characters.",
  //     });
  //   }
  //   return false;
  // };

  // const createAccount = async (formData, loginData) => {
  //   try {
  //     const response = await api({
  //       method: "POST",
  //       type: "multipart/form-data",
  //       body: formData,
  //       route: "user",
  //     });

  //     if (response.error || response.message === "Internal server error") {
  //       setSignUpMsg({ error: true, msg: response.message });
  //     } else {
  //       setSignUpMsg({
  //         error: false,
  //         msg: "",
  //       });

  //       redirectToAppHome(loginData);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const redirectToAppHome = async data => {
  //   const response = await api({
  //     method: "POST",
  //     type: "application/json",
  //     body: data,
  //     route: "auth/login",
  //   });

  //   if (response.error || response.message === "Internal server error") {
  //     setSignUpMsg({ error: true, msg: response.message });
  //   } else {
  //     setSignUpMsg({ error: false, msg: "" });

  //     saveLoginResponse(response);

  //     router.push("/home");
  //   }
  // };

  return <AuthForm titleKey={"views.register.title"} showLink={true} />;
};

export default SignUp;
