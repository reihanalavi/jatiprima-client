import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <>
    <section className="section section-padding background-6 p-t-70 p-b-80 m-b-70">
        <div className="section-container">
          {/* <!-- Block Product Categories --> */}
          <div className="block block-product-cats slider round-border">
            <div className="block-widget-wrap">
              <div className="block-title" style={{textAlign: "center", marginBottom: 50}}>
                <h2>About Us</h2>
              </div>
              <div className="block-content text-center">
                <Image className='d-inline justify-content-center mb-4 pt-0' src={'/media/hero_jp.jpeg'} alt={'asd'} width={300} height={50}/>
                <p className='text-dark'>We are oaisudma os asdfiuh asdf . asdiofu hasdof hausdf aosduf hasdf . asdoifu aspdoifu asdf .psai.d fuaspodi fas.pdoif u.asdopif .ua. paois.udf aposiduf. aospdifu asopdif. asdf .asdf poaisdu.f aspofi as.dpf iasu.df poaisud.f paosiduf. aspodif.u</p>
                <p className='text-dark'>We are oaisudma os asdfiuh asdf . asdiofu hasdof hausdf aosduf hasdf . asdoifu aspdoifu asdf .psai.d fuaspodi fas.pdoif u.asdopif .ua. paois.udf aposiduf. aospdifu asopdif. asdf .asdf poaisdu.f aspofi as.dpf iasu.df poaisud.f paosiduf. aspodif.u</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
