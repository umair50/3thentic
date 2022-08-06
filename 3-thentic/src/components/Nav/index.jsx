import React, { Fragment } from "react";
import Logo from "../../assets/Logo.png";
import web3 from "../../ethereum/web3";
import { useToasts } from "react-toast-notifications";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Nav = ({ address, setAddress }) => {
  const { addToast } = useToasts();
  const Connect = async (e) => {
    try {
      e.preventDefault();

      const accounts = await web3.eth.requestAccounts();
      if (address) {
        setAddress(null);
      } else {
        setAddress(accounts[0]);
      }
    } catch (error) {
      addToast(error.message, {
        appearance: "error",
        autoDismiss: true,
        autoDismissTimeout: 5000,
      });
    }
  };
  return (
    <div className="nav-container">
      <Link to={"/"}>
        <div className="nav-logo-container">
          <img src={Logo} alt="" className="nav-logo-img" />
          <div className="nav-logo-text">LOGO</div>
        </div>
      </Link>

      <div className="nav-connect-container">
        <Link to={"/faq"}>
          <div className="nav-connect-item">Faq</div>
        </Link>
        <Link to={"/payment"}>
          <div className="nav-connect-item">Payment</div>
        </Link>
        <Link to={"/login"}>
          <div className="nav-connect-item">Login</div>
        </Link>
        <button className="nav-connect-btn" onClick={Connect}>
          {address ? (
            <Fragment>
              <span className="navbar-address-text">
                {address &&
                  address.slice(0, 4) +
                    "...." +
                    address.slice(address.length - 4, address.length)}
              </span>
              <FontAwesomeIcon icon={faPowerOff} />
            </Fragment>
          ) : (
            <div>Connect Wallet</div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Nav;
