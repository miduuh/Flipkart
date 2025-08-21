import React from "react";
import "./Menu.css";

function Menu({ isVisible, handleClick }) {
  return (
    <div
      className="menuBar"
      style={isVisible ? { visibility: "visible" } : { visibility: "hidden" }}
      onClick={handleClick}
    >
      <div className="mmm" style={{opacity:1}} ></div>
      <div className="main">
        <div className="menu-head">
          <table className="table">
            <tbody>
              <tr>
                <td className="login-signup">
                  <img
                    className="login-prof"
                    src="/src/assets/menu/prof.svg"
                    alt=""
                  />
                  <div className="log-sign">Login & Signup</div>
                </td>
                <td width="40px">
                  <img
                    className="f-logo"
                    src="src/assets/menu/logo_lite.png"
                    alt=""
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="menu-body">
          <div className="zone">
            <div className="sp-zone">
              <div className="menu-imgs">
                <img className="menu-img" src="src/assets/menu/superCoin.webp" alt="" />
              </div>
              <span className="menu-txt">SuperCoin Zone</span>
            </div>
          </div>
          <div className="zone">
            <div className="sp-zone">
              <div className="menu-imgs">
                <img className="menu-img" src="src/assets/menu/flipkart-plus.webp" alt="" />
              </div>
              <span className="menu-txt">Flipkart Plus Zone</span>
            </div>
          </div>
          <div className="menu-line"></div>
          <div className="zone">
            <div className="sp-zone">
              <div className="menu-imgs">
                <img className="menu-img" src="src/assets/menu/all-categories.webp" alt="" />
              </div>
              <span className="menu-txt">All Categories</span>
            </div>
          </div>
          <div className="zone">
            <div className="sp-zone">
              <div className="menu-imgs">
                <img className="menu-img" src="src/assets/menu/More-on-Flipkart.webp" alt="" />
              </div>
              <span className="menu-txt">More on Flipkart</span>
            </div>
          </div>
          <div className="menu-line"></div>
          <div className="zone">
            <div className="sp-zone">
              <div className="menu-imgs">
                <img className="menu-img" src="src/assets/menu/language.webp" alt="" />
              </div>
              <span className="menu-txt">Choose Language</span>
            </div>
          </div>
          <div className="menu-line"></div>
          <div className="zone">
            <div className="sp-zone">
              <div className="menu-imgs">
                <img className="menu-img" src="src/assets/menu/offerZone.png" alt="" />
              </div>
              <span className="menu-txt">Offer Zone</span>
            </div>
          </div>
          <div className="zone">
            <div className="sp-zone">
              <div className="menu-imgs">
                <img className="menu-img" src="src/assets/menu/sellOnFlipkart.webp" alt="" />
              </div>
              <span className="menu-txt">Sell on Flipkart</span>
            </div>
          </div>
          <div className="menu-line"></div>
          <div className="zone">
            <div className="sp-zone">
              <div className="menu-imgs">
                <img className="menu-img" src="src/assets/menu/myOrders.png" alt="" />
              </div>
              <span className="menu-txt">My Orders</span>
            </div>
          </div>
          <div className="zone">
            <div className="sp-zone">
              <div className="menu-imgs">
                <img className="menu-img" src="src/assets/menu/coupons.png" alt="" />
              </div>
              <span className="menu-txt">Coupons</span>
            </div>
          </div>
          <div className="zone">
            <div className="sp-zone">
              <div className="menu-imgs">
                <img className="menu-img" src="src/assets/menu/yCart.png" alt="" />
              </div>
              <span className="menu-txt">My Cart</span>
            </div>
          </div>
          <div className="zone">
            <div className="sp-zone">
              <div className="menu-imgs">
                <img className="menu-img" src="src/assets/menu/myWishlist.png" alt="" />
              </div>
              <span className="menu-txt">My Wishlist</span>
            </div>
          </div>
          <div className="zone">
            <div className="sp-zone">
              <div className="menu-imgs">
                <img className="menu-img" src="src/assets/menu/myAccount.png" alt="" />
              </div>
              <span className="menu-txt">My Account</span>
            </div>
          </div>
          <div className="zone">
            <div className="sp-zone">
              <div className="menu-imgs">
                <img className="menu-img" src="src/assets/menu/myNotifications.png" alt="" />
              </div>
              <span className="menu-txt">My Notifications</span>
            </div>
          </div>
          <div className="menu-line"></div>
          <div className="zone">
              <span>Notification Preferences</span>
          </div>
          <div className="zone">
              <span>Help Centre</span>
          </div>
          <div className="zone">
              <span>Legal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
