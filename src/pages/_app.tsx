import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { RootLayout } from "mui";
import { AppLayout, SignLayout } from "@containers/Layouts";

export default function MyApp({ Component, pageProps }: AppProps) {
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
