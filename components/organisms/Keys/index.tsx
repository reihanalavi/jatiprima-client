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
                            <div className="col-4 m-m-b-20">
                              <div className="box">
                                <div className="box-icon">
                                  <span>
                                  <Image alt='jatiprima product' width={25} height={25} src="/chair-solid.svg"></Image>
                                  </span>
                                </div>
                                <div className="box-title-wrap">
                                  <h3 className="box-title">
                                    Free collection from over 1000 locations
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <div className="col-4 m-m-b-20">
                              <div className="box">
                                <div className="box-icon">
                                  <span>
                                  <Image alt='jatiprima payment' width={30} height={30} src="/credit-card-regular.svg"></Image>
                                  </span>
                                </div>
                                <div className="box-title-wrap">
                                  <h3 className="box-title">
                                    Flexible Payment
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="box">
                                <div className="box-icon">
                                  <span>
                                  <Image alt='jatiprima person' width={20} height={20} src="/person-solid.svg"></Image>
                                  </span>
                                </div>
                                <div className="box-title-wrap">
                                  <h3 className="box-title">
                                    Fast Response Seller
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
