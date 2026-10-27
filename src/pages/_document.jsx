import Document, { Html, Head, Main, NextScript } from "next/document";
import {
  DocumentHeadTags,
  documentGetInitialProps,
  createEmotionCache,
} from "@mui/material-nextjs/v14-pagesRouter";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const emotionCache = createEmotionCache({ enableCssLayer: true });
    const initialProps = await documentGetInitialProps(ctx, {
      emotionCache,
    });

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <DocumentHeadTags {...this.props} />
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Ara is a social space for sharing posts, replies and conversations."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
