import Image from 'next/image'
import React from 'react'

export default function Wishlist() {
  return (
    <>
    {/* <!-- Wishlist --> */}
    <section className="wishlist-popup">
        <div className="wishlist-popup-inner">
                <div className="wishlist-popup-content">
                    <div className="wishlist-popup-content-top">
                        <span className="wishlist-name">Wishlist</span>
            <span className="wishlist-count-wrapper"><span className="wishlist-count">2</span></span>                                
            <span className="wishlist-popup-close"></span>
                    </div>
                    <div className="wishlist-popup-content-mid">
            <table className="wishlist-items">                        
                <tbody>
                <tr className="wishlist-item">
                    <td className="wishlist-item-remove"><span></span></td>
                    <td className="wishlist-item-image">
                                        <a href="shop-details.html">
                        <Image width={600} height={600} src="/media/product/3.jpg" alt=""/>                                        
                    </a>
                                </td>
                                <td className="wishlist-item-info">
                    <div className="wishlist-item-name">
                        <a href="shop-details.html">Chair Oak Matt Lacquered</a>
                    </div>
                    <div className="wishlist-item-price">
                        <span>$150.00</span>
                    </div>
                    <div className="wishlist-item-time">June 4, 2022</div>                                
                    </td>
                                <td className="wishlist-item-actions">
                                    <div className="wishlist-item-stock">
                        In stock 
                    </div>
                                    <div className="wishlist-item-add">
                        <div data-title="Add to cart">
                        <a rel="nofollow" href="#" className="button">Add to cart</a>
                        </div>
                    </div>
                                    </td>
                </tr>
                <tr className="wishlist-item">
                    <td className="wishlist-item-remove"><span></span></td>
                    <td className="wishlist-item-image">
                                        <a href="shop-details.html">
                        <Image width={600} height={600} src="/media/product/4.jpg" alt=""/>                                        
                    </a>
                                </td>
                                <td className="wishlist-item-info">
                    <div className="wishlist-item-name">
                        <a href="shop-details.html">Pillar Dining Table Round</a>
                    </div>
                    <div className="wishlist-item-price">
                        <del aria-hidden="true"><span>$150.00</span></del> 
                        <ins><span>$100.00</span></ins>
                    </div>
                    <div className="wishlist-item-time">June 4, 2022</div>                                
                    </td>
                                <td className="wishlist-item-actions">
                                    <div className="wishlist-item-stock">
                        In stock 
                    </div>
                                    <div className="wishlist-item-add">
                        <div data-title="Add to cart">
                        <a rel="nofollow" href="#" className="button">Add to cart</a>
                        </div>
                    </div>
                                    </td>
                </tr>
                </tbody>
            </table>
            </div>
                    <div className="wishlist-popup-content-bot">
                        <div className="wishlist-popup-content-bot-inner">
                            <a className="wishlist-page" href="shop-wishlist.html">
                Open wishlist page                                    
                </a>
                            <span className="wishlist-continue" data-url="">
                                Continue shopping                                        
                            </span>
                        </div>
                        <div className="wishlist-notice wishlist-notice-show">Added to the wishlist!</div>
                    </div>
                </div>
            </div>
    </section>
    </>
  )
}
