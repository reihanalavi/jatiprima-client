import Arrow from "@/components/atoms/Slider/Arrow";
import CollectionItems from "@/components/molecules/CollectionItems";
import { CollectionItemsProps, CollectionTypes } from "@/services/data-types";
import Image from "next/image";
import React, { useEffect } from "react";
import Slider from "react-slick";

interface collectionProps {
  item: CollectionTypes[];
}

export default function Collection(props: collectionProps) {
  const { item } = props;

  const API_IMG = process.env.NEXT_PUBLIC_IMG;

  const sliderSetting = {
    arrow: true,
    nextArrow: <Arrow right />,
    prevArrow: <Arrow left />,
    dots: false,
    draggable: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    cssEase: "linear",
    autoplaySpeed: 5000,
    pauseOnHover: !1,
    pauseOnFocus: !1,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
      <section className="section section-padding background-6 p-t-70 p-b-80 m-b-70">
        <div className="section-container">
          {/* <!-- Block Product Categories --> */}
          <div className="block block-product-cats slider round-border">
            <div className="block-widget-wrap">
              <div className="block-title" style={{textAlign: "center", marginBottom: 80}}>
                <h2>Our Collection</h2>
              </div>
              <div className="block-content">
                <div className="product-cats-list slick-wrap">
                  {/* <i className="slick-arrow fa fa-angle-right"></i> */}
                  <Slider
                    {...sliderSetting}
                    className="slick-sliders content-category"
                  >
                    {item.map((item: CollectionItemsProps) => (
                      <CollectionItems
                        _id={item._id}
                        fotoURL={item.fotoURL}
                        fotoALT={item.fotoALT}
                        name={item.name}
                      />
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
