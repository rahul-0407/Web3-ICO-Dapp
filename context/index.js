import React, { useState } from "react";
import { ethers } from "ethers";
import toast from "react-hot-toast";

import {
  CHECK_WALLET_CONNECTED,
  CONNECT_WALLET,
  GET_BALANCE,
  CHECK_ACCOUNT_BALANCE,
  TOKEN_ICO_CONTRACT,
  ERC20,
  ERC20_CONTRACT,
  TOKEN_ADDRESS,
  addTokenToMetamask,
} from "./constants";

export const TOKEN_ICO_CONTEXT = React.createContext();

export const TOKEN_ICO_Provider = ({children}) => {
    const DAPP_NAME = "TOKEN ICO DAPP";
    const currency = "ETH";
    const network = "Sepolia";

    const [loader, setLoader] = useState(false)
    const [account, setAccount] = useState()
    const [count, setCount] = useState(0);

    const notifySuccess = (msg) => toast.success(msg, {duration:2000}) 
    const notifyError = (msg) => toast.error(msg, {duration:2000}) 
}