import React from 'react'
import { Link } from 'react-router-dom'
import "./SearchPage.css"

const SearchPage = () => {
  return (
    <div className='searchPage'>
        <form className='search-form'>
            <button className='backButton'>
            <Link to="/">
                <img src="src/assets/searchPage/backArrow.svg" alt="" />
            </Link>
            </button>
           
            <input type="search" id="searchbox" placeholder='Search for Products, Brands and More'/>
        </form>
        <div className='disc-div'>
            <div className="disc-more">Discover More</div>
            <div className='suggestions'>
                <div className='sugg-items'>mobiles</div>
                <div className='sugg-items'>shoes</div>
                <div className='sugg-items'>t shirts</div>
                <div className='sugg-items'>laptops</div>
                <div className='sugg-items'>watches</div>
                <div className='sugg-items'>tv</div>
                <div className='sugg-items'>sarees</div>
                <div className='sugg-items'>headphones</div>
                <div className='sugg-items'>bluetooth</div>
                <div className='sugg-items'>fridge</div>
                <div className='sugg-items'>bedsheet</div>
                <div className='sugg-items'>water bottle</div>
            </div>
        </div>
    </div>
  )
}

export default SearchPage