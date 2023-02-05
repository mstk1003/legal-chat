import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Amplify } from "aws-amplify";
import awsconfig from "@/src/aws-exports";

Amplify.configure(awsconfig);
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
