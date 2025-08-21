import React, { useEffect, useRef, useState } from 'react'
import "./Electronics.css"
import Travel from './Travel/Travel'
import { Link } from 'react-router-dom'

const Electronics = () => {
    const row = useRef(null)

    const [isAtStart, setIsAtStart] = useState(true)
    const [isAtEnd, setIsAtEnd] = useState(false)

    const hideButton = () => {
        if (row.current) {
            const { scrollLeft, scrollWidth, clientWidth } = row.current
            setIsAtStart(scrollLeft ===0)
            setIsAtEnd(scrollLeft + clientWidth >=scrollWidth)
        }
    }
    useEffect(() => {
        hideButton();
    }, [])

    const SlideToRight = () => {
        if(row.current){
            row.current.scrollTo ({
                left:  row.current.scrollWidth,
                behavior: "smooth"
            });
        }
    }

    const SlideToLeft = () => {
        if(row.current){
            row.current.scrollTo({
                left: 0,
                behavior: "smooth"
            })
        }
    }

  return (
    <div className='electronics'>
        <div className='electr'>
            <div>
                <div className="electr-head">Best of Electronics</div>
            </div>
            <div>
                <div ref={row} className='items' onScroll={hideButton}> 
                    <Link to={"/headset"}>
                        <div className='item1'>
                            <div style={{width: "152px", height:"152px"}}>
                                <img className='item-img'  src="src/assets/electronics/nord-buds.jpeg" alt="" />
                            </div>
                            <div className='desc-txt'>
                                <div className="description">Best Truewireless Headphones</div>
                                <div className='offer'>Grab Now</div>
                            </div>
                        </div>
                    </Link>
                    <div className='item1'>
                        <div style={{width: "152px", height:"152px"}}>
                            <img className='item-img'  src="src/assets/electronics/watch.jpeg" alt="" />
                        </div>
                        <div className='desc-txt'>
                            <div className="description">Fastrack Smartwatches</div>
                            <div className='offer'>From ₹1,399</div>
                        </div>
                    </div>
                    <div className='item1'>
                        <div style={{width: "152px", height:"152px"}}>
                            <img className='item-img'  src="src/assets/electronics/sony.jpeg" alt="" />
                        </div>
                        <div className='desc-txt'>
                            <div className="description">Best Selling Mobile Speakers</div>
                            <div className='offer'>From ₹499*</div>
                        </div>
                    </div>
                    <div className='item1'>
                        <div style={{width: "152px", height:"152px"}}>
                            <img className='item-img'  src="src/assets/electronics/projector.jpeg" alt="" />
                        </div>
                        <div className='desc-txt'>
                            <div className="description">Projector</div>
                            <div className='offer'>From ₹6990</div>
                        </div>
                    </div>
                    <div className='item1'>
                        <div style={{width: "152px", height:"152px"}}>
                            <img className='item-img'  src="src/assets/electronics/printer.jpeg" alt="" />
                        </div>
                        <div className='desc-txt'>
                            <div className="description">Printers</div>
                            <div className='offer'>From ₹2336</div>
                        </div>
                    </div>
                    <div className='item1'>
                        <div style={{width: "152px", height:"152px"}}>
                            <img className='item-img'  src="src/assets/electronics/monitor.jpeg" alt="" />
                        </div>
                        <div className='desc-txt'>
                            <div className="description">ViewSonic Monitors</div>
                            <div className='offer'>From ₹8000</div>
                        </div>
                    </div>
                    <div className='item1'>
                        <div style={{width: "152px", height:"152px"}}>
                            <img className='item-img'  src="src/assets/electronics/mini-printer.jpeg" alt="" />
                        </div>
                        <div className='desc-txt'>
                            <div className="description">Top Mirrorless Cameras</div>
                            <div className='offer'>Shop Now!</div>
                        </div>
                    </div>
                    <div className='item1'>
                        <div style={{width: "152px", height:"152px"}}>
                            <img className='item-img'  src="src/assets/electronics/monitoor.jpeg" alt="" />
                        </div>
                        <div className='desc-txt'>
                            <div className="description">Monitor</div>
                            <div className='offer'>From ₹8279</div>
                        </div>
                    </div>
                </div>
                {(!isAtEnd &&
                <button className="arrowright" onClick={SlideToRight} >
                    <span className="arrow right-arw"></span>
                </button>
            )}
                {( !isAtStart &&
                <button className="arrowleft" onClick={SlideToLeft}>
                    <span className="arrow"></span>
                </button>
            )}
            </div>
        </div>
        <Travel/>
    </div>
  )
}

export default Electronics