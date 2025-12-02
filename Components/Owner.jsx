import React from "react";
import {FaPlus} from "react-icons/fa6"

const Owner = ({setOwnerModel, currency, detail, account, setTransferModel, setTransferCurrency, setOpenDonate, TOKEN_WITHDRAW, setOpenUpdateAddress, setOpenUpdatePrice}) => {
  return <section className="team pos-rel">
    <div className="container">
      <div className="new-owner team__wrap ul_li">
        <div className="team__item">
          <div className="avatar">
            <img src="assets/img/shape/c_shape1.png" alt="" />
          </div>
          <div className="team__info text-center mb-20">
            <h3>TOKEN TRANSFER</h3>
            <span>Any ERC 20</span>
          </div>
          <div className="team__social"></div>
        </div>
      </div>
    </div>
  </section>;
};

export default Owner;
