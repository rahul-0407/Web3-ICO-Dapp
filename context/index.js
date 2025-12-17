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

export const TOKEN_ICO_Provider = ({ children }) => {
  const DAPP_NAME = "TOKEN ICO DAPP";
  const currency = "ETH";
  const network = "Sepolia";

  const [loader, setLoader] = useState(false);
  const [account, setAccount] = useState();
  const [count, setCount] = useState(0);

  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });

  const TOKEN_ICO = async () => {
    try {
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
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
          symbol: tokenDetails.symbol,
          supply: ethers.utils.formatEther(tokenDetails.supply.toString()),
          tokenPrice: ethers.utils.formatEther(
            tokenDetails.tokenPrice.toString()
          ),
          tokenAddr: tokenDetails.tokenAddr,
          maticBal: ethBal,
          address: address.toLowerCase(),
          owner: contractOwner.toLowerCase(),
          soldTokens: soldToken.toNumber(),
        };
        setLoader(false);
        return token;
      }
    } catch (error) {
      console.log(error);
      notifyError("error try agai later");
      setLoader(false);
    }
  };
  const BUY_TOKEN = async (amount) => {
  try {
    setLoader(true);
    const address = await CHECK_WALLET_CONNECTED();
    if (!address) return;

    const contract = await TOKEN_ICO_CONTRACT();
    const tokenDetails = await contract.getTokenDetails();

    const priceWei = tokenDetails.tokenPrice; // already wei
    const payAmount = priceWei.mul(amount);

    const tx = await contract.buyToken(Number(amount), {
      value: payAmount, // ✅ real ETH, not dust
    });

    await tx.wait();
    setLoader(false);
    notifySuccess("Transaction Completed Successfully");
    window.location.reload();
  } catch (error) {
    console.log(error);
    notifyError("error try again later");
    setLoader(false);
  }
};


  const TOKEN_WITHDRAW = async () => {
    try {
      setLoader(true);
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();
        const tokenDetails = await contract.getTokenDetails();

        const availableToken = ethers.utils.formatEther(
          tokenDetails.balance.toString()
        );
        if (availableToken > 1) {
          const transaction = await contract.withdrawAllTokens();

          await transaction.wait();
          setLoader(false);
          notifySuccess("Transaction Completed Succeessfully");
          window.location.reload();
        }
      }
    } catch (error) {
      console.log(error);
      notifyError("error try agai later");
      setLoader(false);
    }
  };
  const UPDATE_TOKEN = async (_address) => {
    try {
      setLoader(true);
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();

        const transaction = await contract.updateToken(_address);

        await transaction.wait();
        setLoader(false);
        notifySuccess("Transaction Completed Succeessfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      notifyError("error try agai later");
      setLoader(false);
    }
  };
  const UPDATE_TOKEN_PRICE = async (price) => {
    try {
      setLoader(true);
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();
        const payAmount = ethers.utils.parseUnits(price.toString(), "ether");

        const transaction = await contract.updateTokenSalePrice(payAmount);

        await transaction.wait();
        setLoader(false);
        notifySuccess("Transaction Completed Succeessfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      notifyError("error try agai later");
      setLoader(false);
    }
  };
  const DONATE = async (AMOUNT) => {
  try {
    setLoader(true);
    const address = await CHECK_WALLET_CONNECTED();
    if (!address) return;

    const contract = await TOKEN_ICO_CONTRACT();
    const payAmount = ethers.utils.parseEther(AMOUNT.toString());

    const tx = await contract.transferToOwner(payAmount, {
      value: payAmount, // ✅ real ETH
    });

    await tx.wait();
    setLoader(false);
    notifySuccess("Donation successful");
    window.location.reload();
  } catch (error) {
    console.log(error);
    notifyError("error try again later");
    setLoader(false);
  }
};

  const TRANSFER_ETHER = async ({ _receiver, _amount }) => {
  try {
    setLoader(true);
    const address = await CHECK_WALLET_CONNECTED();
    if (!address) return;

    const contract = await TOKEN_ICO_CONTRACT();
    const payAmount = ethers.utils.parseEther(_amount.toString());

    const tx = await contract.transferEther(_receiver, payAmount, {
      value: payAmount, // ✅ exact ETH
    });

    await tx.wait();
    setLoader(false);
    notifySuccess("Transfer successful");
    window.location.reload();
  } catch (error) {
    console.log(error);
    notifyError("error try again later");
    setLoader(false);
  }
};

  const TRANSFER_TOKEN = async ({ _tokenAddress, _sendTo, _amount }) => {
  try {
    setLoader(true);
    const address = await CHECK_WALLET_CONNECTED();
    if (!address) return;

    const contract = await ERC20_CONTRACT(_tokenAddress);

    const tx = await contract.transfer(
      _sendTo,
      ethers.utils.parseEther(_amount.toString())
    );

    await tx.wait();
    setLoader(false);
    notifySuccess("Token transferred");
    window.location.reload();
  } catch (error) {
    console.log(error);
    notifyError("error try again later");
    setLoader(false);
  }
};


  return (
    <TOKEN_ICO_CONTEXT.Provider
      value={{
        TOKEN_ICO,
        BUY_TOKEN,
        TOKEN_WITHDRAW,
        UPDATE_TOKEN,
        UPDATE_TOKEN_PRICE,
        DONATE,
        TRANSFER_ETHER,
        TRANSFER_TOKEN,
        CONNECT_WALLET,
        ERC20,
        CHECK_ACCOUNT_BALANCE,
        setAccount,
        setLoader,
        addTokenToMetamask,
        TOKEN_ADDRESS,
        loader,
        account,
        currency,
      }}
    >
      {children}
    </TOKEN_ICO_CONTEXT.Provider>
  );
};
