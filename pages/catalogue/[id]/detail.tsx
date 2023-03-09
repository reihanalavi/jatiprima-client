import ColorItem from "@/components/atoms/ColorItem";
import Arrow from "@/components/atoms/Slider/Arrow";
import CatalogueItems from "@/components/molecules/CatalogueItems";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import {
  getCatalogueByCategory,
  getCatalogueDetail,
} from "@/services/apiservice";
import { EtalaseTypes, FotoCatalogueTypes } from "@/services/data-types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { NumericFormat } from "react-number-format";
import Slider from "react-slick";
import cx from "classnames";
import Head from "next/head";
import BackToTop from "@/components/molecules/Back To Top";

export interface CatalogueDetailProps {
  catalogue: any,
  colors: any,
  urlOG: any
}

export default function CatalogueDetail({ catalogue, colors, urlOG }: CatalogueDetailProps) {
  const sliderSetting3 = {
    arrow: true,
    nextArrow: <Arrow right />,
    prevArrow: <Arrow left />,
    dots: false,
    draggable: true,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    cssEase: "linear",
    autoplaySpeed: 5000,
    pauseOnHover: !1,
    pauseOnFocus: !1,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          vertical: !1,
          verticalSwiping: !1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          vertical: !1,
          verticalSwiping: !1,
        },
      },
    ],
  };

  const sliderSetting2 = {
    arrow: true,
    nextArrow: <Arrow right />,
    prevArrow: <Arrow left />,
    dots: false,
    // asNavFor: ".image-thumbnail",
    draggable: true,
    centerMode: true,
    fade: true,
    focusOnSelect: true,
    infinite: true,
    autoplay: false,
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

  const sliderSetting = {
    arrow: true,
    nextArrow: <Arrow right />,
    prevArrow: <Arrow left />,
    dots: false,
    // asNavFor: '.image-additional',
    draggable: true,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    cssEase: "linear",
    autoplaySpeed: 5000,
    pauseOnHover: !1,
    pauseOnFocus: !1,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          vertical: !1,
          verticalSwiping: !1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          vertical: !1,
          verticalSwiping: !1,
        },
      },
    ],
  };

  const menus = [
    {
      name: "Home",
      hasChildren: false,
      link: "/",
      active: true,
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
    },
  ];

  const [activeColor, setActiveColor] = useState();

  const [qty, setQty] = useState(1);

  const [addToCart, setAddToCart] = useState(false);

  const [wishlists, setWishlists] = useState<any>([]);

  const [slickClick, setSlickClick] = useState(false);
  const [slickIndex, setSlickIndex] = useState(0);

  const slider2 = useRef(null);

  function syncSlick(i: number) {
    setSlickClick(true);
    setSlickIndex(i);
  }

  useEffect(() => {
    if (slickClick) {
      (slider2.current as any).slickGoTo(slickIndex, false);
      setSlickClick(false);
    }
  });

  const addToCartClass = cx({
    "button alt": true,
    "single-add-to-cart-button": addToCart === false,
    "single-added-to-cart-button": addToCart === true,
  });

  function handleStock(code: Number) {
    if (code > 0) {
      //increment
      setQty(qty + 1);
    } else {
      //decrement
      if (qty > 1) {
        setQty(qty - 1);
      }
    }
  }

  function addItemToCart(item: EtalaseTypes) {
    if (!addToCart) {
      const itemModified = {
        item,
        warna: activeColor,
        quantity: qty,
      };
      setWishlists((current: any) => [itemModified, ...current]);
      setAddToCart(true);
    }
  }

  const initialRender = useRef(true);

  useEffect(() => {
    const saved = localStorage.getItem("wishlists");
    if (saved) {
      if (JSON.parse(saved || ([] as never))) {
        const parsedSaved = JSON.parse(saved || ([] as never));
        setWishlists([...wishlists, ...parsedSaved]);
      } else {
        localStorage.setItem("wishlists", "[]");
      }
    } else {
      localStorage.setItem("wishlists", "[]");
    }
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    localStorage.setItem("wishlists", JSON.stringify(wishlists));
  }, [wishlists]);

  useEffect(() => {
    if(colors) {
      setActiveColor(colors.at(0).name)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{catalogue?.name} - Jati Prima Furniture</title>
        <meta name="description" content={catalogue?.metaDeskripsi} />
        <meta
          name="og:title"
          content={`${catalogue?.name} - Jati Prima Furniture`}
        />
        <meta name="og:image" content={`https://www.jatiprimafurniture.com/_next/image?url=https%3A%2F%2Fjatiprima-server.s3.ap-southeast-1.amazonaws.com%2Ffoto%2F${urlOG}&w=1920&q=75`} />
        <meta name="og:url" content={`https://jatiprimafurniture.com/catalogue/${catalogue?._id}/detail`} />
        <meta name="og:description" content={catalogue?.metaDeskripsi} />
      </Head>

      <section>
        <Header menus={menus} />
        <div id="page" className="hfeed page-wrapper">
          <div id="site-main" className="site-main">
            <div id="main-content" className="main-content">
              <div id="primary" className="content-area">
                <div
                  id="title"
                  className="page-title"
                  style={{
                    backgroundImage: `url(${catalogue?.foto?.at(0)?.fotoURL})`,
                  }}
                >
                  <div className="section-container">
                    <div className="content-title-heading">
                      <h1 className="text-title-heading">{catalogue?.name}</h1>
                    </div>
                    <div className="breadcrumbs">
                      <Link href="/">Home</Link>
                      <span className="delimiter"></span>
                      <Link href="/catalogues">Catalogues</Link>
                      <span className="delimiter"></span>
                      {catalogue?.name}
                    </div>
                  </div>
                </div>

                <div id="content" className="site-content" role="main">
                  <div
                    className="shop-details zoom"
                    data-product_layout_thumb="scroll"
                    data-zoom_scroll="true"
                    data-zoom_contain_lens="true"
                    data-zoomtype="inner"
                    data-lenssize="200"
                    data-lensshape="square"
                    data-lensborder=""
                    data-bordersize="2"
                    data-bordercolour="#f9b61e"
                    data-popup="false"
                  >
                    <div className="product-top-info">
                      <div className="section-padding">
                        <div className="section-container p-l-r">
                          <div className="row">
                            <div className="product-images col-lg-7 col-md-12 col-12">
                              <div className="row">
                                <div className="col-md-2">
                                  <div
                                    className="content-thumbnail-scroll"
                                    style={{ height: "150px" }}
                                  >
                                    {catalogue?.foto && (
                                      <Slider
                                        {...sliderSetting}
                                        className="image-thumbnail slick-carousel slick-vertical"
                                      >
                                        {catalogue?.foto &&
                                          catalogue?.foto.map(
                                            (
                                              item: FotoCatalogueTypes,
                                              i: number
                                            ) => (
                                              <div
                                                className="img-item slick-slide"
                                                key={i}
                                                onClick={(e) => {
                                                  syncSlick(i);
                                                }}
                                              >
                                                <span className="img-thumbnail-scroll">
                                                  <Image
                                                    width={600}
                                                    height={600}
                                                    src={item.fotoURL}
                                                    alt={item.fotoALT}
                                                  />
                                                </span>
                                              </div>
                                            )
                                          )}
                                      </Slider>
                                    )}
                                  </div>
                                </div>
                                <div className="col-md-10">
                                  <div className="scroll-image main-image">
                                    {catalogue?.foto && (
                                      <Slider
                                        ref={slider2}
                                        {...sliderSetting2}
                                        className="image-additional slick-carousel"
                                      >
                                        {catalogue?.foto &&
                                          catalogue?.foto.map(
                                            (item: FotoCatalogueTypes) => (
                                              <div
                                                className="img-item slick-slide"
                                                key={item.fotoName}
                                              >
                                                <Image
                                                  width={900}
                                                  height={900}
                                                  src={item.fotoURL}
                                                  alt={item.fotoALT}
                                                  title={item.fotoName}
                                                />
                                              </div>
                                            )
                                          )}
                                      </Slider>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="product-info col-lg-5 col-md-12 col-12 ">
                              <h1 className="title">{catalogue?.name}</h1>
                              <span className="price">
                                <span>
                                  <NumericFormat
                                    value={parseInt(catalogue?.price!)}
                                    displayType="text"
                                    prefix="Rp "
                                    thousandSeparator=","
                                    decimalSeparator="."
                                  />
                                </span>
                              </span>
                              <div className="description">
                                <p>{catalogue?.deskripsi}</p>
                              </div>
                              <div className="variations">
                                <table cellSpacing={0}>
                                  <tbody>
                                    <tr>
                                      <td className="label">Color</td>
                                      <td className="attributes">
                                        <ul className="colors">
                                          {catalogue?.warnas &&
                                            catalogue?.warnas.map(
                                              (item: any) => (
                                                <ColorItem
                                                  onClick={() =>
                                                    setActiveColor(item.name)
                                                  }
                                                  active={
                                                    activeColor === item.name
                                                  }
                                                  colorCode={item.kode}
                                                />
                                              )
                                            )}
                                        </ul>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="buttons">
                                <div className="add-to-cart-wrap">
                                  <div className="quantity">
                                    <button
                                      type="button"
                                      className="plus"
                                      onClick={() => handleStock(1)}
                                    >
                                      +
                                    </button>
                                    <input
                                      type="number"
                                      className="qty"
                                      step="1"
                                      min="0"
                                      max=""
                                      name="quantity"
                                      value={qty}
                                      title="Qty"
                                      size={4}
                                      placeholder=""
                                      inputMode="numeric"
                                      autoComplete="off"
                                    />
                                    <button
                                      type="button"
                                      className="minus"
                                      onClick={() => handleStock(-1)}
                                    >
                                      -
                                    </button>
                                  </div>
                                  <button
                                    className={addToCartClass}
                                    onClick={() => addItemToCart(catalogue)}
                                  >
                                    {addToCart ? "Added" : "Add to Cart"}
                                  </button>
                                </div>
                              </div>
                              <div className="product-meta">
                                <span className="sku-wrapper d-block">
                                  Materials:
                                  {catalogue?.materials &&
                                    catalogue?.materials.map(
                                      (item: any, i: number, row: any) => (
                                        <a rel="tag">
                                          {item.name}
                                          {i + 1 === row.length ? "" : ","}
                                        </a>
                                      )
                                    )}
                                </span>
                                <span className="posted-in d-block">
                                  Category:
                                  <Link
                                    href={`/catalogues?id=${catalogue?.categories?._id}`}
                                    rel="tag"
                                  >
                                    {catalogue?.categories?.name}
                                  </Link>
                                </span>
                                <span className="tagged-as d-block">
                                  Tags:
                                  {catalogue?.tag &&
                                    catalogue?.tag.map(
                                      (item: any, i: number, row: any) => (
                                        <a rel="tag">
                                          {item}
                                          {i + 1 === row.length ? "" : ","}
                                        </a>
                                      )
                                    )}
                                </span>
                              </div>
                              {/* <div className="social-share">
                              <a
                                href="#"
                                title="Facebook"
                                className="share-facebook"
                                target="_blank"
                              >
                                <i className="fa fa-facebook"></i>Facebook
                              </a>
                              <a
                                href="#"
                                title="Twitter"
                                className="share-twitter"
                              >
                                <i className="fa fa-twitter"></i>Twitter
                              </a>
                              <a
                                href="#"
                                title="Pinterest"
                                className="share-pinterest"
                              >
                                <i className="fa fa-pinterest"></i>Pinterest
                              </a>
                            </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- #content --> */}
              </div>
              {/* <!-- #primary --> */}
            </div>
            {/* <!-- #main-content --> */}
          </div>
        </div>
        <Footer />
        <BackToTop />
      </section>
    </>
  );
}

export async function getStaticPaths(params: any) {
  const data = await getCatalogueByCategory("all");
  const paths = data.data.map((item: any) => ({
    params: {
      id: item._id,
    },
  }));

  console.log("PATHS : ", paths);
  return {
    paths,
    fallback: false,
  };
}

interface getStaticProps {
  params: {
    id: string;
  };
}

export async function getStaticProps({ params }: getStaticProps) {
  const { id } = params;
  const data = await getCatalogueDetail(id);
  console.log("DATA SERVER SIDE : ", data);
  return {
    props: {
      catalogue: data.data,
      colors: data.data.warnas,
      urlOG: (data.data.foto?.at(0)?.fotoName).replace(/:/g, '%3A').replace(/\//g, '%2F').replace(/ /g, '%2520').replace(/\(/g, '%2528').replace(/\)/g, '%2529')
    },
  };
}
