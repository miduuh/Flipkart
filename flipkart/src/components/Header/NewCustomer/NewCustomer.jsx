import React from 'react'
import "./NewCustomer.css"

const NewCustomer = ({isHover}) => {
  return (
    <div style={isHover ? {visibility: "visible"} : {visibility: "hidden"}}>
            <ul className='newCus-ul'>
                <a href="" className='newCus-top'>
                    <span>New customer?</span>
                    <span className='newCus-sign'>Sign up</span>
                </a>
                <a href="" className='newCus-items'>
                    <li className='newCus-li'>
                        <div className='profile'>
                            <img style={{height:"18px", width:"18px"}} src="src/assets/newCustomer/profile.svg" alt="" />                           
                        </div>
                        My Profile
                    </li>
                    <li className='newCus-li'>
                        <div className='profile'>
                            <img style={{height:"18px", width:"18px"}} src="src/assets/newCustomer/fkplus.svg" alt="" />                           
                        </div>
                        Flipkart Plus Zone
                    </li>
                    <li className='newCus-li'>
                        <div className='profile'>
                            <img style={{height:"18px", width:"18px"}} src="src/assets/newCustomer/orders.svg" alt="" />                           
                        </div>
                        Orders
                    </li>
                    <li className='newCus-li'>
                        <div className='profile'>
                            <img style={{height:"18px", width:"18px"}} src="src/assets/newCustomer/wishlist.svg" alt="" />                           
                        </div>
                        Wishlist
                    </li>
                    <li className='newCus-li'>
                        <div className='profile'>
                            <img style={{height:"18px", width:"18px"}} src="src/assets/newCustomer/rewards.svg" alt="" />                           
                        </div>
                        Rewards
                    </li>
                    <li className='newCus-li'>
                        <div className='profile'>
                            <img style={{height:"18px", width:"18px"}} src="src/assets/newCustomer/giftCard.svg" alt="" />                           
                        </div>
                        Gift Cards
                    </li>
                </a>
            </ul>
    </div>
  )
}

export default NewCustomer