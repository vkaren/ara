import { AuthForm } from "@components/Forms";

// TODO: Create controller
const Login = () => {
  // const router = useRouter();
  // const { saveLoginResponse } = useContext(UserContext);
  // const [loginMsg, setLoginMsg] = useState({ error: false, msg: "" });
  // const form = createRef();

  // const onSubmit = async e => {
  //   e.preventDefault();

  //   setLoginMsg({ error: false, msg: "" });

  //   const formData = new FormData(form.current);

  //   const password = formDaPasswordusername").toLowerCase();
  //   const password = formData.get("password");

  //   const canLogin = validateForm({ username, password });

  //   if (canLogin) {
  //     await login({
  //       username,
  //       password,
  //     });
  //   }
  // };

  // const validateForm = ({ username, password }) => {
  //   if (!username) {
  //     setLoginMsg({ error: true, msg: "Username required." });
  //     return false;
  //   } else if (!password) {
  //     setLoginMsg({ error: true, msg: "Password required." });
  //     return false;
  //   }
  //   return true;
  // };

  // const login = async data => {
  //   try {
  //     const response = await api({
  //       method: "POST",
  //       type: "application/json",
  //       body: data,
  //       route: "auth/login",
  //     });

  //     if (response.error || response.message === "Internal server error") {
  //       setLoginMsg({ error: true, msg: response.message });
  //     } else {
  //       setLoginMsg({ error: false, msg: "" });

  //       saveLoginResponse(response);

  //       router.push("/home");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return <AuthForm titleKey={"views.login.title"} />;
};

export default Login;
