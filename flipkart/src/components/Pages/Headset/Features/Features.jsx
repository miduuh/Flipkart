import React from 'react'
import "./Features.css";

const Features = () => {
  return (
    <div className='feauture'>
        <div className='features'>
            <div className='offer-cell' style={{paddingRight:"0"}}>
                <div className='off-img'>
                    <img style={{width:"32px"}} src="src/assets/headset/off.png" alt="" />
                </div>
                <div>
                    <span className='offer-txt'>50% or more</span>
                </div>
            </div>
            <div className='offer-cell'>
                <div className='off-img'>
                    <img style={{width:"32px"}} src="src/assets/headset/feature.png" alt="" />
                </div>
                <div>
                    <span className='offer-txt'>Bluetooth</span>
                </div>
            </div>
            <div className='offer-cell'>
                <div className='off-img'>
                    <img style={{width:"32px"}} src="src/assets/headset/feature.png" alt="" />
                </div>
                <div>
                    <span className='offer-txt'>Fast Charging</span>
                </div>
            </div>
            <div className='offer-cell'>
                <div className='off-img'>
                    <img style={{width:"32px"}} src="src/assets/headset/feature.png" alt="" />
                </div>
                <div>
                    <span className='offer-txt'>Noise Cancellation</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features