import TestimonialComment from "@/components/atoms/Testimonial/TestimonialComment";
import TestimonialImage from "@/components/atoms/Testimonial/TestimonialImage";
import TestimonialName from "@/components/atoms/Testimonial/TestimonialName";
import TestimonialStar from "@/components/atoms/Testimonial/TestimonialStar";
import TestimonialTitle from "@/components/atoms/Testimonial/TestimonialTitle";
import { TestimonialItemProps } from "@/services/data-types";
import React from "react";

export default function TestimonialItem(props: TestimonialItemProps) {
    const {star, title, deskripsi, fotoURL, fotoALT, personName} = props

  return (
    <>
      <div className="testimonial-content section background-0 mx-2">
        <div className="item">
          <div className="testimonial-item">
            <TestimonialStar star={star} />
            <TestimonialTitle title={title} />
            <TestimonialComment text={deskripsi} />
          </div>
          <div className="testimonial-image image-position-top">
            <TestimonialImage image={fotoURL} keterangan={fotoALT} />
            <TestimonialName personName={personName} />
          </div>
        </div>
      </div>
    </>
  );
}
