import React from "react";

interface TestimonialStarProps {
  star: number
}

export default function TestimonialStar(props: TestimonialStarProps) {
  const {star} = props

  return (
    <div className="testimonial-icon">
      <div className="rating">
        <span className={`star star-${star}`} />
      </div>
      <span className="icon-quote" />
    </div>
  );
}
