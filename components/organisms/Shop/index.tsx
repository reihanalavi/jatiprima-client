import Image from "next/image";
import React from "react";

export default function Shop() {
  return (
    <>
      <section className="section section-padding m-b-70">
        <div className="section-container">
          <div className="block block-banners banners-effect">
            <div className="block-widget-wrap">
              <div className="row">
                <div className="col-md-6">
                  <div className="block-widget-banner layout-13 m-b-15">
                    <div className="bg-banner">
                      <div className="banner-wrapper banners">
                        <div className="banner-image">
                          <a href="shop-grid-left.html">
                            <Image
                              width={691}
                              height={400}
                              src="/media/banner/banner-23.jpg"
                              alt="Banner Image"
                            />
                          </a>
                        </div>
                        <div className="banner-wrapper-infor">
                          <div className="info">
                            <div className="content">
                              <a
                                className="link-title"
                                href="shop-grid-left.html"
                              >
                                <h3 className="title-banner">
                                  For your personal <br />
                                  collection{" "}
                                </h3>
                              </a>
                              <div className="banner-image-description">
                                Sed lectus. Aliquam lorem ante, dapibus in,
                                viverra quis
                              </div>
                              <a
                                className="button button-outline white"
                                href="shop-grid-left.html"
                              >
                                SHOP NOW
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="block-widget-banner layout-13">
                    <div className="bg-banner">
                      <div className="banner-wrapper banners">
                        <div className="banner-image">
                          <a href="shop-grid-left.html">
                            <Image
                              width={691}
                              height={400}
                              src="/media/banner/banner-24.jpg"
                              alt="Banner Image"
                            />
                          </a>
                        </div>
                        <div className="banner-wrapper-infor">
                          <div className="info">
                            <div className="content">
                              <a
                                className="link-title"
                                href="shop-grid-left.html"
                              >
                                <h3 className="title-banner">
                                  Furniture for
                                  <br /> the whole family
                                </h3>
                              </a>
                              <div className="banner-image-description">
                                Sed lectus. Aliquam lorem ante, dapibus in,
                                viverra quis
                              </div>
                              <a
                                className="button button-outline white"
                                href="shop-grid-left.html"
                              >
                                SHOP NOW
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
