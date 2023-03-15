import TestimonialItem from "@/components/molecules/Testimonial Item";
import React from "react";
import Slider from "react-slick";
import { TestimoniTypes } from "@/services/data-types";

interface testimoniProps {
  item: TestimoniTypes[];
}

export default function Testimoni(props: testimoniProps) {
  const { item } = props;

  const sliderSetting = {
    arrows: true,
    dots: false,
    draggable: true,
    infinite: true,
    autoplay: false,
    slidesToScroll: 1,
    slidesToShow: 3,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <section className="section section-padding background-10 p-t-70 p-b-70 m-b-70">
        <div className="section-container">
          {/* <!-- Block Testimonial --> */}
          <div className="block block-testimonial layout-2">
            <div className="block-widget-wrap">
              <div className="block-title" style={{textAlign: "center", marginBottom: 80}}>
                <h2>What Our Customers Say</h2>
              </div>
              <div className="block-content">
                <div className="testimonial-wrap slick-wrap">
                  <Slider {...sliderSetting}>
                    {item.map((item: TestimoniTypes) => (
                      <TestimonialItem
                        star={item.star}
                        title={item.title}
                        deskripsi={item.deskripsi}
                        fotoURL={item.fotoURL}
                        fotoALT={item.fotoALT}
                        personName={item.personName}
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
