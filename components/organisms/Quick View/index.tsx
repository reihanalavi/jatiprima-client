import Image from 'next/image'
import React from 'react'

export default function QuickView() {
  return (
    <>
    {/* <!-- Quickview --> */}
    <section className="quickview-popup">
        <div id="quickview-container"> 
        <div className="quickview-container"> 
            <a href="#" className="quickview-close"></a> 
            <div className="quickview-notices-wrapper"></div> 
            <div className="product single-product product-type-simple">
            <div className="product-detail">
                <div className="row"> 
                <div className="img-quickview"> 
                    <div className="product-images-slider">
                    <div id="quickview-slick-carousel"> 
                        <div className="images"> 
                        <div className="scroll-image">
                            <div className="slick-wrap">
                            <div className="slick-sliders image-additional" data-dots="true" data-columns4="1" data-columns3="1" data-columns2="1" data-columns1="1" data-columns="1" data-nav="true">
                                <div className="img-thumbnail slick-slide"> 
                                <a href="/media/product/3.jpg" className="image-scroll" title="">
                                    <Image width={900} height={900} src="/media/product/3.jpg" alt=""/>
                                </a> 
                                </div>
                                <div className="img-thumbnail slick-slide"> 
                                <a href="/media/product/3-2.jpg" className="image-scroll" title="">
                                    <Image width={900} height={900} src="/media/product/3-2.jpg" alt=""/>
                                </a> 
                                </div>
                            </div>
                            </div>
                        </div> 
                        </div> 
                    </div> 
                    </div> 
                </div> 
                <div className="quickview-single-info">
                    <div className="product-content-detail entry-summary">
                    <h1 className="product-title entry-title">Chair Oak Matt Lacquered</h1>
                    <div className="price-single">
                        <div className="price">
                        <del><span>$150.00</span></del>
                        <span>$100.00</span>
                        </div>
                    </div>
                    <div className="product-rating"> 
                        <div className="star-rating" role="img" aria-label="Rated 4.00 out of 5">
                        <span style={{width:'80%'}}>Rated <strong className="rating">4.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                        </div> 
                        <a href="#" className="review-link">(<span className="count">1</span> customer review)</a> 
                    </div>
                    <div className="description"> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…</p> 
                    </div>
                    <form className="cart" method="post" encType="multipart/form-data">
                        <div className="quantity-button">
                        <div className="quantity"> 
                            <button type="button" className="plus">+</button> 
                            <input type="number" className="input-text qty text" step="1" min="1" max="" name="quantity" title="Qty" maxLength={4} placeholder="" inputMode="numeric" autoComplete="off"/> 
                            <button type="button" className="minus">-</button> 
                        </div> 
                        <button type="submit" className="single-add-to-cart-button button alt">Add to cart</button> 
                        </div> 
                        <button className="button quick-buy">Buy It Now</button>
                    </form> 
                    </div> 
                </div> 
                </div> 
            </div>
            </div> 
            <div className="clearfix"></div> 
        </div> 
        </div>
    </section>
    </>
  )
}
