import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AppLayout, SignLayout } from "@containers/Layouts";
import { RootLayout } from "config/mui";
import "config/i18n";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const shouldUseSignLayout = ["/login", "/register"].includes(router.pathname);

  return (
    <RootLayout>
      {shouldUseSignLayout ? (
        <SignLayout>
          <Component {...pageProps} />
        </SignLayout>
      ) : (
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      )}
    </RootLayout>
  );
};

export default MyApp;
