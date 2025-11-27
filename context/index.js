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


    const TOKEN_ICO = async ()=> {
        try {

            const address = await CHECK_WALLET_CONNECTED();
            if(address){
                setLoader(true);
                setAccount(address);
                const contract = await TOKEN_ICO_CONTRACT();

                const tokenDetails = await contract.getTokenDetails();
                const contractOwner = await contract.owner();
                const soldToken = await contract.soldTokens();

                const ethBal = await GET_BALANCE();

                const token = {
                    tokenBal: ethers.utils.formatEther(tokenDetails.balance.toString()),
                    name: tokenDetails.name,
                    symbol:  tokenDetails.symbol,
                    supply: ethers.utils.formatEther(tokenDetails.supply.toString()),
                    tokenPrice: ethers.utils.formatEther(tokenDetails.tokenSalePrice.toString()),
                    tokenAddr: tokenDetails.tokenAddr,
                    maticBal: ethBal,
                    address: address.toLowerCase(),
                    owner: contractOwner.toLowerCase(),
                    soldTokens: soldToken.toNumber(),
                }
                setLoader(false);
                return token;
            }
             
        } catch (error) {
            console.log(error)
        }
    }
    const BUY_ICO = async (amount)=> {
        try {
            setLoader(true);
            const address = await CHECK_WALLET_CONNECTED();
            if(address){
                
                const contract = await TOKEN_ICO_CONTRACT();
                const tokenDetails = await contract.getTokenDetails();

                const availableToken = ethers.utils.formatEther(tokenDetails.balance.toString());

                if(availableToken > 1) {
                    const price = ethers.utils.formatEther(
                        tokenDetails.tokenPrice.toString()
                    );
                    const payAmount = ethers.utils.parseUnits(price.toString(), "ether");
                    const transaction = await contract.buyToken(Number(amount), {
                        value:payAmount.toString(),
                        gasLimit: ethers.utils.hexlify(8000000)
                    })

                    await transaction.wait();
                    setLoader(false);
                    notifySuccess("Transaction Completed Succeessfully");
                    window.location.reload();
                }

                
                
                return token;
            }
             
        } catch (error) {
            console.log(error);
            notifyError("error try agai later");
            setLoader(false);
        }
    }
    const TOKEN_WITHDRAW = async ()=> {
        try {

            setLoader(true);
            const address = await CHECK_WALLET_CONNECTED();
            if(address){
                const contract = await TOKEN_ICO_CONTRACT();
                const tokenDetails = await contract.getTokenDetails();

                const availableToken = ethers.utils.formatEther(tokenDetails.balance.toString());
                if(availableToken > 1) {
                    const transaction = await contract.withdrawAllTokens()

                    await transaction.wait();
                    setLoader(false);
                    notifySuccess("Transaction Completed Succeessfully");
                    window.location.reload();
                }
            }
             
        } catch (error) {
            console.log(error)
        }
    }
    const UPDATE_TOKEN = async ()=> {
        try {
             
        } catch (error) {
            console.log(error)
        }
    }
    const UPDATE_TOKEN_PRICE = async ()=> {
        try {
             
        } catch (error) {
            console.log(error)
        }
    }
    const DONATE = async ()=> {
        try {
             
        } catch (error) {
            console.log(error)
        }
    }
    const TRANSFER_ETHER = async ()=> {
        try {
             
        } catch (error) {
            console.log(error)
        }
    }
    const TRANSFER_TOKEN = async ()=> {
        try {
             
        } catch (error) {
            console.log(error)
        }
    }


}