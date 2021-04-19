import { ChakraProvider } from "@chakra-ui/react";

import { AppProps } from "next/app";
import "@fontsource/nunito-sans";

import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
