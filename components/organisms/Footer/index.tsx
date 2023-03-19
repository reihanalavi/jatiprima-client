import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer id="site-footer" className="site-footer small-space">
      <div className="footer">
        <div className="section-padding">
          <div className="section-container">
            <div className="block-widget-wrap">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3 col-md-6 w-auto mx-4">
                  <div className="block block-menu">
                    <Image
                      width={50}
                      height={15}
                      src="/media/jp_logo.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 w-auto mx-4">
                  <div className="block block-menu">
                    <h2 className="block-title">Contact Us</h2>
                    <div className="block-content">
                      <ul>
                        <li>
                          <Link href={''}>Jl. Kedung - Jepara, Tegalsambi, Kec. Tahunan</Link>
                        </li>
                        <li>
                          <Link href={''}>Kabupaten Jepara, Jawa Tengah 59427</Link>
                        </li>
                        <li>
                          <br />
                        </li>
                        <li>
                          <Link href={''}>+62 8213-4938-383</Link>
                        </li>
                        <li>
                          <Link href={''}>jatiprimafurniture@gmail.com</Link>
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
                <div className="col-lg-3 col-md-6 w-auto mx-4">
                  <div className="block block-menu">
                    <h2 className="block-title">Connect</h2>
                    <div className="block-content">
                      <ul>
                        <li>
                          <Link href="https://instagram.com/jatiprima.furniture">
                            Instagram
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.facebook.com/jatiprima.furniture?mibextid=ZbWKwL">
                            Facebook
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 text-center">
                  <div className="block block-image">
                    {/* <Image
                      width={500}
                      height={15}
                      src="/media/jp_tagline.png"
                      alt=""
                    /> */}
                    <h2 className="mt-4">Jati Prima Furniture</h2>
                    <p>Bringing Comfort to Your Place, One Piece at a Time</p>
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
                    <p className="copyright">
                      Copyright © 2023 by Jati Prima Furniture Jepara. All Right Reserved
                    </p>
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
  );
}
