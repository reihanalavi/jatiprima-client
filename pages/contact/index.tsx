import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import Header from '@/components/organisms/Header'
import Link from 'next/link';
import Footer from '@/components/organisms/Footer';
import BackToTop from '@/components/molecules/Back To Top';
import Head from 'next/head';
import cx from 'classnames'
import { createMessage } from '@/services/apiservice';

export default function Contact() {
    const menus = [
		{
		  name: "Home",
		  hasChildren: false,
		  link: "/",
		},
		{
		  name: "Catalogues",
		  hasChildren: false,
		  link: "/catalogues",
		},
		{
		  name: "Contact",
		  hasChildren: false,
		  link: "/contact",
		  active: true
		},
	  ];

	const [sent, setSent] = useState(false);

	const successClass = cx({
	  "form-login-register": true,
	  active: sent,
	});
	
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	function handlePayload() {

  
	  const payload = {
		name,
		email,
		msg: message
	  };
  
	  postMessage(payload as any);
	}

	const postMessage = useCallback(async (payloads: string) => {
		const data = await createMessage(payloads);
		if (data.data) {
		  setSent(true);
		}
	  }, []);
	
  return (
    <>
	<Head>
        <title>Contact - Jati Prima Furniture</title>
        <meta name="description" content={'Hubungi Jati Prima Furniture'} />
        <meta name="og:title" content='Contact - Jati Prima Furniture' />
        <meta name="og:image" content="/media/hero_jp.jpeg" />
        <meta name="og:url" content="https://jatiprimafurniture.com/contact" />
    </Head>
    <body className="page">
		<div id="page" className="hfeed page-wrapper">
            
            <Header menus={menus}/>

			<div id="site-main" className="site-main">
				<div id="main-content" className="main-content">
					<div id="primary" className="content-area">
						<div id="title" className="page-title" style={{ backgroundImage: "url(/media/hero_jp.jpeg)" }}>
							<div className="section-container">
								<div className="content-title-heading">
									<h1 className="text-title-heading">
										Contact Us
									</h1>
								</div>
								<div className="breadcrumbs">
									<Link href="/">Home</Link><span className="delimiter"></span>Contact Us
								</div>
							</div>
						</div>

						<div id="content" className="site-content" role="main">
							<div className="page-contact">
								<section className="section section-padding">
									<div className="section-container small">
										<div className="block block-contact-map">
											<div className="block-widget-wrap">
												<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2242738793448!2d110.65049049999999!3d-6.619037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e711f1c13c80b21%3A0x463264b13cd9c50!2sJati%20Prima%20Furniture!5e0!3m2!1sen!2sid!4v1678109041466!5m2!1sen!2sid" aria-label="Jati Prima Furniture, Jepara, Indonesia"></iframe>
											</div>
										</div>
									</div>
								</section>	

								<section className="section section-padding m-b-70">
									<div className="section-container">
										{/* <!-- Block Contact Info --> */}
										<div className="block block-contact-info">
											<div className="block-widget-wrap">
												<div className="info-icon">
													<svg xmlns="http://www.w3.org/2000/svg" className="svg-icon2 plant" x="0" y="0" viewBox="0 0 512 512" ><g><path xmlns="http://www.w3.org/2000/svg" d="m320.174 28.058a8.291 8.291 0 0 0 -7.563-4.906h-113.222a8.293 8.293 0 0 0 -7.564 4.907l-66.425 148.875a8.283 8.283 0 0 0 7.564 11.655h77.336v67.765a20.094 20.094 0 1 0 12 0v-67.765h27.7v288.259h-48.441a6 6 0 0 0 0 12h108.882a6 6 0 0 0 0-12h-48.441v-288.259h117.04a8.284 8.284 0 0 0 7.564-11.657zm-103.874 255.567a8.094 8.094 0 1 1 8.094-8.093 8.1 8.1 0 0 1 -8.094 8.093zm-77.61-107.036 63.11-141.437h108.4l63.11 141.437z" fill="" data-original="" ></path></g></svg>
												</div>
												<div className="info-title">
													<h2>Need Help?</h2>
												</div>
												<div className="info-items">
													<div className="row">
														<div className="col-md-4 sm-m-b-30">
															<div className="info-item">
																<div className="item-tilte">
																	<h2>Phone</h2>
																</div>
																<div className="item-content">
																<Link href={'tel:6282134938383'}>+62 8213-4938-383</Link>
																</div>
															</div>
														</div>
														<div className="col-md-4 sm-m-b-30">
															<div className="info-item">
																<div className="item-tilte">
																	<h2>Customer Service</h2>
																</div>
																<div className="item-content">
																	<p>Monday to Saturday</p>
																	<p>8:00am – 4:00pm Jepara, Indonesia (GMT +7)</p>
																	<p>Sunday closed</p>
																</div>
															</div>
														</div>
														<div className="col-md-4">
															<div className="info-item">
																<div className="item-tilte">
																	<h2>Email</h2>
																</div>
																<div className="item-content small-width">
																<Link href={'mailto:jatiprimafurniture@gmail.com'}>jatiprimafurniture@gmail.com</Link>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>

								<section className="section section-padding background-10 contact-background m-b-0">
									<div className="section-container small">
										{/* <!-- Block Contact Form --> */}
										<div className="block block-contact-form">
											<div className="block-widget-wrap">
												<div className="block-title">
													<h2>Send Us Your Questions!</h2>
													<div className="sub-title">We’ll get back to you within two days.</div>
												</div>
												<div className="block-content">
													<div>
													<div className="contact-us-form">
															<div className="row">
																<div className="col-sm-12 col-md-6">
															        <label className="required">Name</label><br/>
															        <span className="form-control-wrap">
															        	<input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} size={40} className="form-control" aria-required="true"/>
															        </span>
															    </div>
																<div className="col-sm-12 col-md-6">
															        <label className="required">Email</label><br/>
															        <span className="form-control-wrap">
														        		<input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} size={40} className="form-control" aria-required="true"/>
														        	</span>
															    </div>
															</div>
															<div className="row">
																<div className="col-sm-12">
																	<label className="required">Message</label><br/>
																	<span className="form-control-wrap">
																		<textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} cols={40} rows={10} className="form-control" aria-required="true"></textarea>
																	</span>
																</div>
															</div>
															<div className="form-button">
												      			<a onClick={() => handlePayload()} type="submit" className="button">Submit</a><span/>
															</div>
														</div>
													</div>
													<form action="" method="post" className="contact-form" noValidate>	
													</form>
												</div>
											</div>
										</div>
									</div>
								</section>

							</div>
						</div>
                        {/* <!-- #content --> */}
					</div>
                    {/* <!-- #primary --> */}
				</div>
                {/* <!-- #main-content --> */}
			</div>

			<div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
          <div className="header-page-link">
            {/* <!-- Login --> */}
            <div className="login-header">
              <div className={successClass}>
                <div className="box-form-login">
                  <div className="box-content">
                    <div
                      className="form-login active"
                      style={{ padding: "20px" }}
                    >
                      <h2>Success</h2>
                      <p className="status"></p>
                      <div className="content">
                        <p>
                          Your message has been sent and we will soon respond.
                        </p>
                      </div>
                      <Link
                        className="button alt single-place-order"
                        href="/"
                      >
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

			<Footer/>
		</div>
		<BackToTop/>
	</body>
    </>
  )
}
