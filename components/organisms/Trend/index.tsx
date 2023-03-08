import React from "react";
import Image from "next/image";
import Arrow from "@/components/atoms/Slider/Arrow";
import Slider from "react-slick";

export default function Trend() {
  const sliderSetting = {
    arrow: true,
    nextArrow: <Arrow right />,
    prevArrow: <Arrow left />,
    dots: false,
    draggable: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    cssEase: "linear",
    autoplaySpeed: 5000,
    pauseOnHover: !1,
    pauseOnFocus: !1,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          vertical: !1,
          verticalSwiping: !1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          vertical: !1,
          verticalSwiping: !1,
        },
      },
    ],
  };
  return (
    <>
      <section className="section background-9 section-padding p-t-80 p-b-70 m-b-70">
        <div className="section-container">
          {/* <!-- Block Product Categories --> */}
          <div className="block block-product-cats slider layout-5">
            <div className="block-widget-wrap">
              <div className="row">
                <div className="col-md-3 sm-m-b-50">
                  <div className="product-cats-intro-wrap">
                    <div className="product-cats-intro">
                      <h2 className="title">
                        Shop <br />
                        by trend
                      </h2>
                      <div className="description">
                        Style any outdoor area with some careful study and sound
                        decisions.
                      </div>
                      <div className="link">
                        <a href="shop-grid-left.html">All Categories</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="product-cats-list slick-wrap">
                    <Slider {...sliderSetting} className="slick-sliders content-category">
                      <div className="item item-product-cat slick-slide">
                        <div className="item-product-cat-content">
                          <a href="shop-grid-left.html">
                            <div className="item-image">
                              <Image
                                width={330}
                                height={400}
                                src="/media/product/cat-23.jpg"
                                alt="bed-bath"
                              />
                            </div>
                          </a>
                          <div className="product-cat-content-info">
                            <h2 className="item-title">
                              <a href="shop-grid-left.html">Accessories</a>
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="item item-product-cat slick-slide">
                        <div className="item-product-cat-content">
                          <a href="shop-grid-left.html">
                            <div className="item-image">
                              <Image
                                width={330}
                                height={400}
                                src="/media/product/cat-24.jpg"
                                alt="furniture"
                              />
                            </div>
                          </a>
                          <div className="product-cat-content-info">
                            <h2 className="item-title">
                              <a href="shop-grid-left.html">Industrial</a>
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="item item-product-cat slick-slide">
                        <div className="item-product-cat-content">
                          <a href="shop-grid-left.html">
                            <div className="item-image">
                              <Image
                                width={330}
                                height={400}
                                src="/media/product/cat-25.jpg"
                                alt="home-decor"
                              />
                            </div>
                          </a>
                          <div className="product-cat-content-info">
                            <h2 className="item-title">
                              <a href="shop-grid-left.html">Modern</a>
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="item item-product-cat slick-slide">
                        <div className="item-product-cat-content">
                          <a href="shop-grid-left.html">
                            <div className="item-image">
                              <Image
                                width={330}
                                height={400}
                                src="/media/product/cat-26.jpg"
                                alt="lighting"
                              />
                            </div>
                          </a>
                          <div className="product-cat-content-info">
                            <h2 className="item-title">
                              <a href="shop-grid-left.html">Scandinavian</a>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Slider>
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
