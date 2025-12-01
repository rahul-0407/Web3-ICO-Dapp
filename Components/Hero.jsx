import React,{useEffect, useState} from "react";
import toast from "react-hot-toast"

const Hero = ({setBuyModel, account, CONNECT_WALLET, setAccount, setLoader, detail, addTokenToMetamask}) => {

  const notifySuccess = (msg) => toast.success(msg,{duration:2000})
  const notifyError = (msg) => toast.error(msg,{duration:2000})

  const connectWallet = async () => {
    setLoader(false);
    const address = await CONNECT_WALLET();
    setAccount(address) 
  };

  const [percentage, setPercentage] =  useState()

  useInsertionEffect(()=> {
    const calculatePercentage = () =>  {
      const tokenSold = detail?.soldTokens ?? 0;
      const tokenTotalSupply = detail?.soldTokens + Number(detail?.tokenBal) * 1 ?? 1;

      const percentageNew = (tokenSold /tokenTotalSupply) *100;

      if(tokenTotalSupply == 0){
        console.log("Token sale balance is zero, cannot calculate percentage")
      } else {
        setPercentage(percentageNew)
      }

      const timer = setTimeout(calculatePercentage,1000);

      return() => clearTimeout(timer) 
    };
  },[detail])

  const ADD_TOKEN_METAMASK = async () => {
    setLoader(true);
    const response = await addTokenToMetamask()
    setLoader(false);
    notifySuccess(response)
  }


  return <section className="hero hero__ico pos-rel">Hero</section>;
};

export default Hero;
