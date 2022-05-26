import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Rinkeby;

//Moralis
const APP_ID = "bZtfqtoCFfTVJYqyigsAcXZ3kyYo4P08mAtjmH9b";
const SERVER_URL = "https://7vdeu3klidts.usemoralis.com:2053/server";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <Component {...pageProps} />
      </MoralisProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
