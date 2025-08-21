import React from 'react'
import "./CategoryBanner.css";

const CategoryBanner = () => {
  return (
    <div className='categoryBanner'>
        <div className='categories'>
            <div className='category'>
                <div className='minutes'>
                    <img className='minutes-img' src="src/assets/CategoryBanner/minutes.png" alt="" />
                </div>
                <span className='minutes-txt'>Minutes</span>
            </div>
            <div className='category'>
                <div className='minutes'>
                    <img className='minutes-img' src="src/assets/CategoryBanner/mob&tab.webp" alt="" />
                </div>
                <span className='minutes-txt'>Mobiles & Tablets</span>
            </div>
            <div className='category'>
                <div className='minutes'>
                    <img className='minutes-img' src="src/assets/CategoryBanner/fashion.png" alt="" />
                </div>
                <span className='minutes-txt'>
                  <span>Fashion</span>
                  <span className="arw-dwn"></span>
                </span>
                
            </div>
            <div className='category'>
                <div className='minutes'>
                    <img className='minutes-img' src="src/assets/CategoryBanner/electronics.png" alt="" />
                </div>
                <span className='minutes-txt'>
                  <span>Electronics</span>
                  <span className="arw-dwn"></span>
                </span>
            </div>
            <div className='category'>
                <div className='minutes'>
                    <img className='minutes-img' src="src/assets/CategoryBanner/home&furniture.png" alt="" />
                </div>
                <span className='minutes-txt'>
                  <span>Home & Furniture</span>
                  <span className="arw-dwn"></span>
                </span>
            </div>
            <div className='category'>
                <div className='minutes'>
                    <img className='minutes-img' src="src/assets/CategoryBanner/tv&appliances.jpg" alt="" />
                </div>
                <span className='minutes-txt'>TVs & Appliances</span>
            </div>
            <div className='category'>
                <div className='minutes'>
                    <img className='minutes-img' src="src/assets/CategoryBanner/flight.png" alt="" />
                </div>
                <span className='minutes-txt'>Flight Bookings</span>
            </div>
            <div className='category'>
                <div className='minutes'>
                    <img className='minutes-img' src="src/assets/CategoryBanner/beauty,food.png" alt="" />
                </div>
                <span className='minutes-txt'>
                  <span>Beauty, Food..</span>
                  <span className="arw-dwn"></span>
                </span>
            </div>
            <div className='category'>
                <div className='minutes'>
                    <img className='minutes-img' src="src/assets/CategoryBanner/grocery.png" alt="" />
                </div>
                <span className='minutes-txt'>Grocery</span>
            </div>
        </div>
    </div>
  )
}

export default CategoryBanner