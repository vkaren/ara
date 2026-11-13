import SignLayout from "@containers/SignLayout";
import ResetPassword from "@containers/ResetPassword";

const ResetPasswordPage = () => (
  <SignLayout>
    <ResetPassword />
  </SignLayout>
);

ResetPasswordPage.publicPage = true;

export default ResetPasswordPage;
