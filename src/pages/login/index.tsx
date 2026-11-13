import SignLayout from "@containers/SignLayout";
import Login from "@containers/Login";

const LoginPage = () => {
  return (
    <SignLayout>
      <Login />
    </SignLayout>
  );
};

LoginPage.publicPage = true;

export default LoginPage;
