import React, { useState } from "react";
import "./header.css";
import Address from "./Address";
import Menu from "../Body/ScrollBanner/MenuBar/Menu";
import NewCustomer from "./NewCustomer/NewCustomer";

function Header() {
  const [isVisible, setIsVisible] = useState(false)
  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  const [isHover, setIsHover] = useState(false)
  const handleHover = () => {
    setIsHover(!isHover)
  }
  const handleLeave = () => {
    setIsHover(isHover)
  }

  console.log(isHover);
  
  // console.log(isVisible);
    return (
      <>
        <div className="head">
          <header className="header">
            <div className="header-logo">
              <button className="menu" onClick={handleClick}>
                <img className="mmenu" src="src/assets/menu.svg" alt="Menu" />
              </button>

              <a className="fkheaderlogo" href="#">
                <img
                  className="fkrt-logo-mbl"
                  src="src/assets/fkheaderlogo_mobile.svg"
                  alt=""
                />
                <img
                  className="fkrt-logo"
                  src="src/assets/fkheaderlogo.svg"
                  alt=""
                />
              </a>
              <form className="searchbar" action="/search">
                <div className="srchbar">
                  <button className="srch-btn">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{background: "transparent"}}
                    >
                      <title>Search Icon</title>
                      <path
                        d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                        stroke="#717478"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M16 16L21 21"
                        stroke="#717478"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div className="srch">
                    <input
                      className="srch-txt"
                      type="text"
                      placeholder="Search for Products, Brands and More"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="header-icons">
              <button className="install" >
                <img
                  className="mmenu"
                  src="src/assets/install.svg"
                  alt="Get App"
                />
              </button>
              

              <div className="padd-inl" onMouseOver={handleHover} onMouseOut={handleLeave}>
                <div className="login-main login-hover">
                  <a className="login" href="">
                    <img
                      className="store login2"
                      src="src/assets/profile.svg"
                      alt="Login"
                    />
                    <div className="login-txt">Login</div>
                  </a>
                  <img
                    className="drpdwn-arw"
                    src="src/assets/dropdown-arrow.svg"
                    alt="dropdown_arrow"
                  />
                </div>
              </div>
              <NewCustomer isHover={isHover}/>

              <div className="padd-inl">
                <a className="cart" href="">
                  <img
                    className="store"
                    src="src/assets/header_cart.svg"
                    alt="Cart"
                  />
                </a>
                <a href="" className="cart-txt">
                  Cart
                </a>
              </div>

              <div className="padd-inl">
                <a className="store-lnk" href="">
                  <img
                    className="store"
                    src="src/assets/Store.svg"
                    alt="Store"
                  />
                </a>
                <a href="" className="cart-txt">
                  Become a Seller
                </a>
              </div>

              <div className="padd-inl">
                <div className="login-main">
                  <a className="store-lnk" href="">
                    <img
                      className="mmenu"
                      src="src/assets/3verticalDots.svg"
                      alt="More"
                    />
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>

        <Address/>  
        <Menu isVisible={isVisible} handleClick={handleClick}/>
        
      </>
    );
}

export default Header;
