import React from 'react'
import ScrollBanner from './ScrollBanner/ScrollBanner'
import { Carousel } from './ScrollBanner/Carousel'
import { slides } from "./ScrollBanner/carouselImages.json"
import { banners } from "./ScrollBanner/bigBanner.json"
import "./Body.css"
import CategoryBanner from './CategoryBanner/CategoryBanner'
import BigBanner from './ScrollBanner/BigBanner'
import CategoriesMob from './Categories-Mob/CategoriesMob'
import Electronics from './Electronics/Electronics'

function Body() {
  return (
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
        <div className='body'>
          <CategoryBanner/>
          <Carousel data={slides}/>
          <BigBanner bdata={banners}/>
          <CategoriesMob/>
          <Electronics/>
        </div>
      </div>
    
  )
}

export default Body