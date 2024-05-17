import {lazy, useMemo} from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Main from "./pages/Main";
// import Airdrop from './pages/Airdrop'

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
  
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import {SnackbarProvider} from 'notistack'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
const Main=lazy(()=>import("./pages/Main/index"))
const Airdrop=lazy(()=>import("./pages/Airdrop/index"))

const App=()=> {
  const theme=createTheme({
    palette:{
      mode:"dark"
    }
  })

  const network = WalletAdapterNetwork.Devnet;
  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
 
  const wallets = useMemo(
    () => [
      // if desired, manually define specific/custom wallets here (normally not required)
      // otherwise, the wallet-adapter will auto detect the wallets a user's browser has available
    ],
    [network],
  );
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {/* <ThemeProvider theme={theme}> */}
          {/* <CssBaseline/> */}
          <SnackbarProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Airdrop />} />
              <Route path="referral/:referral" element={<Airdrop />} />
              {/* <Route path="/airdrop" element={<Airdrop/>} /> */}
              {/* <Route path="*" element={<Airdrop />} /> */}
            </Routes>
          </BrowserRouter>
          </SnackbarProvider>
          {/* </ThemeProvider> */}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
