import React, { useState, useEffect } from "react";

const TransferToken = ({
  setTransferModel,
  TRANSFER_TOKEN,
  ERC20,
  setLoader,
}) => {
  const [token, setToken] = useState({
    _sendTo: "",
    _amount: "",
    _tokenAddress: "",
  });

  const [tokenDetails, setTokenDetails] = useState(null);

  // Load ERC20 details when token address changes
  useEffect(() => {
  if (!token._tokenAddress) return;

  console.log("Token address entered:", token._tokenAddress);

  const loadToken = async () => {
    try {
      setLoader(true);
      console.log("Calling ERC20...");

      const erc20 = await ERC20(token._tokenAddress);

      console.log("ERC20 response:", erc20);

      if (!erc20) {
        console.log("ERC20 returned null/undefined");
        setTokenDetails(null);
        return;
      }

      setTokenDetails(erc20);
    } catch (error) {
      console.error("Error loading token:", error);
      setTokenDetails(null);
    } finally {
      setLoader(false);
    }
  };

  loadToken();
}, [token._tokenAddress]);


  return (
    <section className="new-margin ico-contact pos-rel">
      <div className="container">
        <div className="ico-contact__wrap">
          <h2 className="title">
            Transfer Token{" "}
            <strong onClick={() => setTransferModel(false)}>X</strong>
          </h2>

          <div className="row">

            {/* TOKEN ADDRESS */}
            <div className="col-lg-12">
              <input
                type="text"
                placeholder="_tokenAddress"
                value={token._tokenAddress}
                onChange={(e) =>
                  setToken({ ...token, _tokenAddress: e.target.value })
                }
              />
            </div>

            {/* TOKEN DETAILS */}
            {tokenDetails && (
              <div className="col-lg-12 mt-2">
                <div className="token-info">
                  <p>
                    <strong>Name:</strong> {tokenDetails.name}
                  </p>
                  <p>
                    <strong>Balance:</strong>{" "}
                    {tokenDetails.balance} {tokenDetails.symbol}
                  </p>
                </div>
              </div>
            )}

            {/* SEND TO */}
            <div className="col-lg-12">
              <input
                type="text"
                placeholder="_sendTo"
                value={token._sendTo}
                onChange={(e) =>
                  setToken({ ...token, _sendTo: e.target.value })
                }
              />
            </div>

            {/* AMOUNT */}
            <div className="col-lg-12">
              <input
                type="text"
                placeholder="_amount"
                value={token._amount}
                onChange={(e) =>
                  setToken({ ...token, _amount: e.target.value })
                }
              />
            </div>

            {/* TRANSFER BUTTON */}
            <div className="ico-contract__btn text-center mt-10">
              <button
                onClick={() => TRANSFER_TOKEN(token)}
                className="thm-btn"
              >
                Transfer Token
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* SHAPES (UNCHANGED) */}
      <div className="ico-contact__shape">
        <div className="shape shape--1">
          <img src="assets/img/shape/c_shape1.png" alt="" />
        </div>
        <div className="shape shape--2">
          <img src="assets/img/shape/c_shape2.png" alt="" />
        </div>
        <div className="shape shape--3">
          <img src="assets/img/shape/c_shape3.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default TransferToken;
