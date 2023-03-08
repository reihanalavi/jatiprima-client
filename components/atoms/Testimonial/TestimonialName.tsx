import React from "react";

interface TestimonialNameProps {
  personName: String
}
export default function TestimonialName(props: TestimonialNameProps) {
  const {personName} = props
  return (
    <>
      <div className="testimonial-info">
        <h2 className="testimonial-customer-name">{personName}</h2>
      </div>
    </>
  );
}
