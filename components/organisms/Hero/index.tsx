import React from 'react'
import Link from 'next/link'
import Arrow from '@/components/atoms/Slider/Arrow'
import Image from 'next/image';
export default function Hero() {
  const sliderSetting = {
    arrow: true,
    nextArrow: <Arrow right />,
    prevArrow: <Arrow left />,
    dots: true,
    nav: false,
    draggable: true,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplaySpeed: 5000,
    pauseOnHover: !1,
    pauseOnFocus: !1,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: !1,
          verticalSwiping: !1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: !1,
          verticalSwiping: !1,
        },
      },
    ],
  };

  return (
    <>
    <section className="section m-b-0">
  
    {/* <!-- Block Parallax --> */}
    <div className="block block-parallax">
        <div className="content">
        <h4 className="subtitle">The premium of</h4>
        <h2 className="title">Jati Prima Furniture</h2>
        <div className="description">Only made for you</div>
        <Link className="button button-white" href="/catalogues">SHOP NOW</Link>
        </div>
    </div>
    </section>
    </>
  )
}
