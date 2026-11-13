import SignLayout from "@containers/SignLayout";
import ForgotPassword from "@containers/ForgotPassword";

const ForgotPasswordPage = () => (
  <SignLayout>
    <ForgotPassword />
  </SignLayout>
);

ForgotPasswordPage.publicPage = true;

export default ForgotPasswordPage;
