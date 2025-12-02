import React,{useState, useEffect} from "react";

const TransferToken = () => {

  const [token, setToken] = useState({
    _sendTo:"",
    _amount:"",
    _tokenAddress:"",
  })

  const [transferToken, setTransferToken] = useState()

  return <div>TransferToken</div>;
};

export default TransferToken;
