import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      <section className="section section-padding background-6 p-t-70 p-b-80 m-b-70">
        <div className="section-container">
          {/* <!-- Block Product Categories --> */}
          <div className="block block-product-cats slider round-border">
            <div className="block-widget-wrap">
              <div
                className="block-title"
                style={{ textAlign: "center", marginBottom: 50 }}
              >
                <h2>About Us</h2>
              </div>
              <div className="block-content">
                <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 text-center">
                  <Image
                    className="d-inline justify-content-center mb-4 pt-0 rounded"
                    src={"/media/aboutus.jpeg"}
                    alt={"asd"}
                    width={800}
                    height={50}
                  />
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 text-sm-center text-md-start text-lg-start text-xl-start">
                  <p className=" text-dark">
                    Welcome to Jati Prima, a leading furniture manufacturer
                    located in the heart of Central Java, Indonesia. Founded by
                    Inamullah, our company has been established for 10 years,
                    providing high-quality indoor and outdoor furniture with an
                    elegant style.
                  </p>
                  <p className=" text-dark">
                    At Jati Prima, we specialize in creating furniture that is
                    not only functional but also aesthetically pleasing. We
                    believe that your furniture should not only serve a purpose
                    but also enhance the beauty of your space. That's why we
                    work with the finest materials and the most skilled
                    craftsmen to create pieces that are truly exceptional.
                  </p>
                  <p className=" text-dark">
                    We take great pride in our attention to detail and our
                    commitment to quality. From the moment you place your order
                    to the moment it arrives at your doorstep, we ensure that
                    every step of the process is handled with care and
                    precision. We are passionate about what we do, and it shows
                    in every piece of furniture we create.
                  </p>
                  <p className=" text-dark">
                    At Jati Prima, we are not just furniture makers. We are
                    craftsmen, artists, and designers who are dedicated to
                    bringing your vision to life. Whether you're looking for
                    indoor or outdoor furniture, we have a wide range of
                    products that will suit your needs. From classic designs to
                    contemporary styles, we have something for everyone.
                  </p>
                  <p className=" text-dark">
                    Thank you for considering Jati Prima for your furniture
                    needs. We look forward to serving you and helping you create
                    the space of your dreams.
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
