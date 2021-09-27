import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <script id="theme" src="theme.js" />
          <link
            rel="icon"
            href={`/${process.env.NEXT_PUBLIC_REPO_NAME}/favicon.ico`}
          />
          <meta
            name="description"
            content="Emergence hosts a series of articles exploring interesting algorithms, phenomena, and topics from various fields."
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
