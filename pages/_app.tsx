import "../styles/globals.css";
import type { AppProps } from "next/app";
import { initialize, Provider, Network } from "@decentology/hyperverse";
import { Ethereum } from "@decentology/hyperverse-ethereum";
import * as RandomPick from "@decentology/hyperverse-ethereum-randompick";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Change your Tenant ID here.
const TENANT_ID = "0x62a7aa79a52591Ccc62B71729329A80a666fA50f";

function MyApp({ Component, pageProps }: AppProps) {
  const hyperverse = initialize({
    blockchain: Ethereum,
    network: Network.Testnet,
    modules: [
      {
        bundle: RandomPick,
        tenantId: TENANT_ID,
      },
    ],
  });
  return (
    <Provider initialState={hyperverse}>
      <div className="from-blue-600 via-teal-500 to-purple-500 bg-gradient-to-r">
        <ToastContainer />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
