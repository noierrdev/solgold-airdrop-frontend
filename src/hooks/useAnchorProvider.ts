import { AnchorProvider } from "@coral-xyz/anchor";
import { AnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";

export const useAnchorProvider=function(){
    const {connection}=useConnection();
    const wallet=useWallet();
    var provider=new AnchorProvider(connection,wallet as AnchorWallet,{commitment:"confirmed"});
    return provider;
}