import React from "react";

const TokenInfo = ({detail,currency}) => {
  return <section className="token-info pos-rel pt-200 pb-150">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 offset-xl-4">
          <div className="token-info__title sec-title mb-95 text-center text-xl-start">
            <h5 className="sec-title__subtitle">
              ICO coindox Token
            </h5>
            <h2 className="sec-title__title"></h2>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default TokenInfo;
