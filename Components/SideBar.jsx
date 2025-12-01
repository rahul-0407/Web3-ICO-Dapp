import React from "react";

const SideBar = () => {
  return (
    <aside className="slide-bar">
      <div className="close-mobile-menu">
        <a href="/" className="tx-close"></a>
      </div>

      <nav className="side-mobile-menu">
        <a href="/" className="header__logo mb-30">
          <img src="assets/img/logo/logo.svg" alt="" />
        </a>
        <div className="header-mobile-search">
          <form action="#" role="search">
            <input type="text" placeholder="Search Keyword" />
            <button type="submit">
              <i className="ti-search" />
            </button>
          </form>
        </div>

        <ul id="mobile-menu-active">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a className="scrollspy-btn" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="scrollspy-btn" href="#roadmap">
              Roadmap
            </a>
          </li>
          <li>
            <a className="scrollspy-btn" href="#team">
              Team
            </a>
          </li>
          <li>
            <a  href="#!">
              Blog
            </a>
          </li>
          <li>
            <a  href="#!">
              Get In touch
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
