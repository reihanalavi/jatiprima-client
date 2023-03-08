import React from 'react'
import Image from 'next/image'

export default function Keys() {
  return (
    <>
    <section className="section background-8 m-b-0 p-t-20 p-b-20">
                    <div className="section-container">
                      {/* <!-- Block Feature --> */}
                      <div className="block block-feature layout-4">
                        <div className="block-widget-wrap">
                          <div className="row">
                            <div className="col-md-4 sm-m-b-20">
                              <div className="box">
                                <div className="box-icon">
                                  <span>
                                  <Image alt='' width={30} height={30} src="/boxicon.svg"></Image>
                                  </span>
                                </div>
                                <div className="box-title-wrap">
                                  <h3 className="box-title">
                                    Free collection from over 1000 locations
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 sm-m-b-20">
                              <div className="box">
                                <div className="box-icon">
                                  <span>
                                  <Image alt='' width={30} height={30} src="/boxicon.svg"></Image>
                                  </span>
                                </div>
                                <div className="box-title-wrap">
                                  <h3 className="box-title">
                                    Flexible Payment
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 sm-m-b-20">
                              <div className="box">
                                <div className="box-icon">
                                  <span>
                                  <Image alt='' width={30} height={30} src="/boxicon.svg"></Image>
                                  </span>
                                </div>
                                <div className="box-title-wrap">
                                  <h3 className="box-title">
                                    14 Day Returns
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
    </>
  )
}
