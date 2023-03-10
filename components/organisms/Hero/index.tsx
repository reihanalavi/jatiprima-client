import React from 'react'
import Link from 'next/link'

export default function Hero() {
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
