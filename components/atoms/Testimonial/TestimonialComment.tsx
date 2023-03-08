import React from 'react'

interface TestimonialCommentProps {
  text: String
}
export default function TestimonialComment(props: TestimonialCommentProps) {
  const {text} = props
  return (
    <>
    <div className="testimonial-excerpt">
        {`" ${text} "`}
    </div>
    </>
  )
}
