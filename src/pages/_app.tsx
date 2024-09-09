import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { RootLayout } from "config/mui";
import { AppLayout, SignLayout } from "@containers/Layouts";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../../next-i18next.config";

function MyApp({ Component, pageProps }: AppProps) {
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
}

export default appWithTranslation(MyApp, nextI18NextConfig);
