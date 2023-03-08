import React from "react";
import Image from "next/image";

interface TestimonialImageProps {
  image: string,
  keterangan: string
}
export default function TestimonialImage(props: TestimonialImageProps) {
  const {image, keterangan} = props
  
  const API_IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <>
      <div className="thumbnail">
        <Image width={62} height={62} src={image} alt={keterangan} />
      </div>
    </>
  );
}
