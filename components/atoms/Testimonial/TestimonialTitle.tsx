import React from 'react'

interface TestimonialTitleProps {
  title: String
}

export default function TestimonialTitle(props: TestimonialTitleProps) {
  const {title} = props

  return (
    <>
    <h2 className="testimonial-title">{title}</h2>
    </>
  )
}
