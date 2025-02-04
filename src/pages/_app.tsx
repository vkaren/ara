import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AppLayout, SignLayout } from "@containers/Layouts";
import { RootLayout } from "config/mui";
import useI18n from "config/i18n";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const shouldUseSignLayout = ["/login", "/register"].includes(router.pathname);
  const isInitialized = useI18n();

  if (!isInitialized) return null;

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
