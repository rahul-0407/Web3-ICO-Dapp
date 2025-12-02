import React from "react";

const Token = () => {
  return (
    <section className="token pt-125">
      <div className="container">
        <div className="row align-items-center mt-none-30">
          <div className="col-lg-5 mt-30">
            <div className="token__content wow fadeInLeft">
              <div className="section-title mb-20">
                <h5 className="sec-title__subtitle">Tokenomics</h5>
                <h2 className="sec-title__title">Token allocation & funds distribution</h2>
              </div>
              <ul className="nav nav-tabs token__tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation"><button className="nav-link active" id="home-tab" data-bs-toggle="tab" type="button" data-bs-target="#home" role="tab" aria-controls="home" aria-selected="true">Funding Allocation</button></li>
                <li className="nav-item" role="presentation"><button className="nav-link" id="profile-tab" data-bs-toggle="tab" type="button" data-bs-target="#profile" role="tab" aria-controls="profile" aria-selected="true">Token Allocation</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
