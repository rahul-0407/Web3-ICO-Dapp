import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialGithub,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import {FaPlus} from "react-icons/fa6"

const Team = () => {
  return <section id="team" className="team pos-rel">
    <div className="container">
      <div className="sec-title text-center mb-70">
        <h5 className="sec-title__subtitle"> Our Team</h5>
        <h2 className="sec-title__title">Meet our skilled team</h2>
      </div>
      <div className="team__wrap ul_li">
        <div className="team__item">
          <div className="avatar">
            <img src="assets/img/team/img_01.png" alt="" />
          </div>
          <div className="team__info text-center mb-20">
            <h3>Michael Johnson</h3>
            <span>Developer</span>
          </div>

          <div className="team__social ul_li_center">
            <ul className="team__social-link link-left ul_li">
              <li><a href="#"><TiSocialFacebook/></a></li>
              <li><a href="#"><TiSocialInstagram/></a></li>
              <li><a href="#"><TiSocialLinkedin/></a></li>
              <li><a href="#"><TiSocialTwitter/></a></li>
              <li><a href="#"><TiSocialGithub/></a></li>
            </ul>
          </div>

        </div>
        <div className="team__item">
          <div className="avatar">
            <img src="assets/img/team/img_02.png" alt="" />
          </div>
          <div className="team__info text-center mb-20">
            <h3>Michael Johnson</h3>
            <span>Developer</span>
          </div>

          <div className="team__social ul_li_center">
            <ul className="team__social-link link-left ul_li">
              <li><a href="#"><TiSocialFacebook/></a></li>
              <li><a href="#"><TiSocialInstagram/></a></li>
              <li><a href="#"><TiSocialLinkedin/></a></li>
              <li><a href="#"><TiSocialTwitter/></a></li>
              <li><a href="#"><TiSocialGithub/></a></li>
            </ul>
          </div>

        </div>
        <div className="team__item">
          <div className="avatar">
            <img src="assets/img/team/img_03.png" alt="" />
          </div>
          <div className="team__info text-center mb-20">
            <h3>Michael Johnson</h3>
            <span>Developer</span>
          </div>

          <div className="team__social ul_li_center">
            <ul className="team__social-link link-left ul_li">
              <li><a href="#"><TiSocialFacebook/></a></li>
              <li><a href="#"><TiSocialInstagram/></a></li>
              <li><a href="#"><TiSocialLinkedin/></a></li>
              <li><a href="#"><TiSocialTwitter/></a></li>
              <li><a href="#"><TiSocialGithub/></a></li>
            </ul>
          </div>

        </div>
        <div className="team__item">
          <div className="avatar">
            <img src="assets/img/team/img_04.png" alt="" />
          </div>
          <div className="team__info text-center mb-20">
            <h3>Michael Johnson</h3>
            <span>Developer</span>
          </div>

          <div className="team__social ul_li_center">
            <ul className="team__social-link link-left ul_li">
              <li><a href="#"><TiSocialFacebook/></a></li>
              <li><a href="#"><TiSocialInstagram/></a></li>
              <li><a href="#"><TiSocialLinkedin/></a></li>
              <li><a href="#"><TiSocialTwitter/></a></li>
              <li><a href="#"><TiSocialGithub/></a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
    <div className="team__shape">
      <div className="shape shape-1">
        <img src="assets/img/shape/s_shape1.png" alt="" />
      </div>
      <div className="shape shape-2">
        <img src="assets/img/shape/s_shape2.png" alt="" />
      </div>
    </div>
  </section>;
};

export default Team;
