import React from 'react'

export default function Subscribe() {
  return (
    <>
    <section className="section section-padding top-border p-t-50">
        <div className="section-container">
            {/* <!-- Block Newsletter --> */}
            <div className="block block-newsletter layout-2">
            <div className="block-widget-wrap">
                <div className="row">
                <div className="col-md-6">
                    <div className="newsletter-title-wrap">
                    <h2 className="newsletter-title">Subscribe to get $50 off* your order</h2>
                    <div className="newsletter-text">Sign up for the latest trends, products, and inspiration.</div>
                    </div>
                </div>
                <div className="col-md-6">
                    <form action="" method="post" className="newsletter-form">
                    <input type="email" name="your-email" maxLength={40} placeholder="Email address"/>
                    <span className="btn-submit">
                        <input type="submit" />
                    </span>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </>
  )
}
