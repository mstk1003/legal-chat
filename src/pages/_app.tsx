import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Amplify } from "aws-amplify";
import awsconfig from "@/src/aws-exports";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

// Amplify.configure(awsconfig);
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

Amplify.configure(awsconfig);
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withAuthenticator(App);
