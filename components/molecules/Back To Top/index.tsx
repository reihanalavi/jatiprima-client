import React from 'react'

export default function BackToTop() {

  function scrollTop() {
    window.scrollTo(0, 0)
  }
  
  return (
    <>
    {/* <!-- Back Top button --> */}
    <section className="back-top button-show">
        <i className="arrow_carrot-up" onClick={() => scrollTop()}></i>
    </section>
    </>
  )
}
