import React from "react";

const Header = ({account, setAccount, CONNECT_WALLET,setLoader, setOwnerModel, shortenAddress, detail, currency, ownerModel}) => { 

  const[isMetamaskInstalled, setIsMetamaskInstalled] = useState(false)

  useEffect(()=>{
    if(typeof window.ethereum !== "undefined"){
      setIsMetamaskInstalled(true);

      window.ethereum.on("accountsChanged",handleAccountsChanged)
    }

    return()=> {
      if(typeof window.ethereum !== "undefined"){
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        )
      }
    }
  },[])

  const handleAccountsChanged = (accounts) => {
    setAccount(accounts[0])
  }

  const connectMetamask = async () => {
    if(typeof window.ethereum !== "undefined"){
      try {
        const accounts = await window.ethereum.request({
          method:"eth_requestAccounts"
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Metamask is not installed");
    }
  }

  return <header className="site-header header--transparent ico-header ">
    <div className="header__main-wrap">
      <div className="container mxw_1640">
        <div className="header__main ul_ui_between">
          <div className="header_left ul_ui">
            <div className="header__logo">
              <a href="/" >
              <img src="assets/img/logo/logo.svg" alt="" srcSet="" />
              </a>
            </div>
          </div>
          <div className="main-menu__wrap ul_ui navbar navbar-expand-xl">
            <nav className="main-menu collapse navbar-collapse">
              <ul></ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>;
};

export default Header;
