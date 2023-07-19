export default function Hero() {

  const sliderSetting = {
    dots: true,
    nav: false,
    draggable: true,
    // centerMode: true,
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplaySpeed: 5000,
    pauseOnHover: !1,
    pauseOnFocus: !1,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: !1,
          verticalSwiping: !1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: !1,
          verticalSwiping: !1,
        },
      },
    ],
  };

  return (
    <>
      {/* Header Video */}
      <section className="section m-b-0">
        <video
        controls={false}
          autoPlay={true}
          muted={true}
          loop
          width={"100%"}
          className="m-b-0 p-b-0"
          src={"/media/hero.mp4"}
        >
        </video>
      </section>

      {/* Header Biasa */}
      <section className="section m-b-0">
        {/* <div className="block block-parallax">
        <div className="content">
        <h4 className="subtitle">The premium of</h4>
        <h2 className="title">Jati Prima Furniture</h2>
        <div className="description">Bringing Comfort to Your Place, One Piece at a Time</div>
        <Link className="button button-white" href="/catalogues">SHOP NOW</Link>
        </div>
    </div> */}
      </section>
    </>
  );
}
