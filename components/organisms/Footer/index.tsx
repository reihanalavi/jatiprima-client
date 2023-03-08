import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer id="site-footer" className="site-footer small-space">
        <div className="footer">
            <div className="section-padding">
            <div className="section-container">
                <div className="block-widget-wrap">
                <div className="row" style={{justifyContent: 'center'}}>
                    <div className="col-lg-3 col-md-6">
                    <div className="block block-menu">
                        <h2 className="block-title">Contact Us</h2>
                        <div className="block-content">
                        <ul>
                            <li>
                            <a>Jl. Kedung - Jepara, Tegalsambi, Kec. Tahunan</a>
                            </li>
                            <li>
                            <a>Kabupaten Jepara, Jawa Tengah 59427</a>
                            </li>
                            <li><br /></li>
                            <li>
                            <a>0821 3493 8383</a>
                            </li>
                            <li>
                            <a>jatiprimafurniture@gmail.com</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6">
                    <div className="block block-menu">
                        <h2 className="block-title">Services</h2>
                        <div className="block-content">
                        <ul>
                            <li>
                            <a href="page-about.html">Sale</a>
                            </li>
                            <li>
                            <a href="page-about.html">Quick Ship</a>
                            </li>
                            <li>
                            <a href="page-about.html">New Designs</a>
                            </li>
                            <li>
                            <a href="page-about.html">Accidental Fabric Protection</a>
                            </li>
                            <li>
                            <a href="page-about.html">Furniture Care</a>
                            </li>
                            <li>
                            <a href="page-about.html">Gift Cards</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div> */}
                    {/* <div className="col-lg-3 col-md-6">
                    <div className="block block-menu">
                        <h2 className="block-title">Help</h2>
                        <div className="block-content">
                        <ul>
                            <li>
                            <a href="page-faq.html">Contact & FAQ</a>
                            </li>
                            <li>
                            <a href="page-faq.html">Track Your Order</a>
                            </li>
                            <li>
                            <a href="page-faq.html">Returns & Refunds</a>
                            </li>
                            <li>
                            <a href="page-faq.html">Shipping & Delivery</a>
                            </li>
                            <li>
                            <a href="page-faq.html">Lead Times</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div> */}
                    <div className="col-lg-3 col-md-6">
                    <div className="block block-menu">
                        <h2 className="block-title">Connect</h2>
                        <div className="block-content">
                        <ul>
                            <li>
                            <Link href="https://instagram.com/jatiprima.furniture">Instagram</Link>
                            </li>
                            <li>
                            <Link href="https://www.facebook.com/jatiprima.furniture?mibextid=ZbWKwL">Facebook</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-12 col-md-12 text-center">
                    <div className="block block-image">
                        <Image width={500} height={15} src="/media/jp_tagline.png" alt=""/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="section-padding">
            <div className="section-container">
                <div className="block-widget-wrap">
                <div className="row">
                    <div className="col-md-6">
                    <div className="footer-left">
                        <p className="copyright">Copyright © 2022. All Right Reserved</p>
                    </div>
                    </div>
                    <div className="col-md-6">
                    {/* <div className="footer-right">
                        <div className="block block-menu">
                        <div className="block-content">
                            <ul>
                            <li>
                                <a href="page-about.html">Privacy</a>
                            </li>
                            <li>
                                <a href="page-about.html">Terms</a>
                            </li>
                            <li>
                                <a href="page-about.html">Promo T&Cs Apply (view here)</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div> */}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </footer>
  )
}
