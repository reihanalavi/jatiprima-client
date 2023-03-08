import CatalogueItems from "@/components/molecules/CatalogueItems";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import { getCatalogueByCategory } from "@/services/apiservice";
import { EtalaseTypes } from "@/services/data-types";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import cx from "classnames";
import { useRouter } from "next/router";
import ColorItem from "@/components/atoms/ColorItem";
import Slider from "react-slick";
import Arrow from "@/components/atoms/Slider/Arrow";
import Head from "next/head";
import BackToTop from "@/components/molecules/Back To Top";
import { NumericFormat } from "react-number-format";

export default function Catalogues() {
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
      active: true,
    },
    {
      name: "Contact",
      hasChildren: false,
      link: "/contact",
    },
  ];

  const sliderSetting = {
    arrow: true,
    nextArrow: <Arrow right />,
    prevArrow: <Arrow left />,
    dots: true,
    draggable: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
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

  const [catalogues, setCatalogues] = useState([]);
  const [categories, setCategories] = useState([]);
  const [total, setTotal] = useState(0);
  const [categoryActive, setCategoryActive] = useState("");

  const [tab, setTab] = useState("all");

  const [quickView, setQuickView] = useState(false);
  const [qty, setQty] = useState(1);

  const [qvItem, setQvItem] = useState<EtalaseTypes>();

  const [colors, setColors] = useState<any>();
  const [activeColor, setActiveColor] = useState<any>();

  const [wishlists, setWishlists] = useState<any>([]);

  const [addToCart, setAddToCart] = useState(false);

  const addToCartClass = cx({
    "button alt": true,
    "single-add-to-cart-button": addToCart === false,
    "single-added-to-cart-button": addToCart === true,
  });

  const quickViewClass = cx({
    "quickview-popup": true,
    active: quickView,
  });

  const { query, isReady } = useRouter();

  const getCatalogue = useCallback(async (valueParams: string) => {
    const data = await getCatalogueByCategory(valueParams);
    setCatalogues(data.data);
    setTotal(data.total);
    setCategoryActive(data.categoryActive);
    setCategories(data.categories);

  }, []);

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

  const initialRender = useRef(true);

  function openQuickView(item: EtalaseTypes) {
    setQvItem(item);
    setQuickView(true);
    setColors(item.warnas);
    setActiveColor(item.warnas.at(0)?.name);
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

  function resetQuickView() {
    setQuickView(false);
    setQty(1);
    setAddToCart(false);
  }

  useEffect(() => {
    if (isReady) {
      let id = query.id
      if (query.id) {
        onTabClick(id as any);
      } else {
        onTabClick('all')
      }
    }
  }, [isReady]);

  useEffect(() => {
    const saved = localStorage.getItem("wishlists");
    if(saved) {
      if (JSON.parse(saved || '')) {
        const parsedSaved = JSON.parse(saved || '');
        setWishlists([...wishlists, ...parsedSaved]);
      } else {
        localStorage.setItem("wishlists", "[]")
      }
    } else {
      localStorage.setItem("wishlists", "[]")
    }
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    localStorage.setItem("wishlists", JSON.stringify(wishlists));

  }, [wishlists]);

  const onTabClick = (value: string) => {
    let decision = "";
    if (value === tab) {
      decision = "all";
    } else {
      decision = value;
    }
    setTab(decision);
    getCatalogue(decision);
  };

  return (
    <>
    <Head>
        <title>{categoryActive ? categoryActive : 'Katalog'} - Jati Prima Furniture</title>
        <meta name="description" content={'Cari katalog mebel Jepara di Jati Prima Furniture'} />
        <meta name="og:title" content={`${categoryActive ? categoryActive : 'Katalog'} - Jati Prima Furniture`} />
        <meta name="og:image" content="/media/hero_jp.jpeg" />
        <meta name="og:url" content={tab === 'all' ? "https://jatiprimafurniture.com/catalogues" : `https://jatiprimafurniture.com/catalogues?id=${tab}`} />
    </Head>
    <section>  
      <body className="shop">
      <Header menus={menus} />
        <div id="page" className="hfeed page-wrapper">
          <div id="site-main" className="site-main">
            <div id="main-content" className="main-content">
              <div id="primary" className="content-area">
                <div
                  id="title"
                  className="page-title"
                  style={{ backgroundImage: "url(/media/hero_jp.jpeg)" }}
                >
                  <div className="section-container">
                    <div className="content-title-heading">
                      <h1 className="text-title-heading">
                        {categoryActive ? categoryActive : "Browse"}
                      </h1>
                    </div>
                    <div className="breadcrumbs">
                      <Link href="/">Home</Link>
                      <span className="delimiter" />
                      <Link href="/catalogues">Catalogues</Link>
                      <span className="delimiter" />
                      {categoryActive ? categoryActive : "Browse"}
                    </div>
                  </div>
                </div>

                <div id="content" className="site-content" role="main">
                  <div className="section-padding">
                    <div className="section-container p-l-r">
                      <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-12 sidebar left-sidebar md-b-50">
                          {/* <!-- Block Product Categories --> */}
                          <div className="block block-product-cats">
                            <div className="block-title">
                              <h2>Categories</h2>
                            </div>
                            <div className="block-content">
                              <div className="product-cats-list">
                                <ul>
                                  {categories &&
                                    categories.map((item: any) => (
                                      <li className="current">
                                        <a role='button'
                                          onClick={() => onTabClick(item._id)}
                                        >
                                          {item.name}
                                        </a>
                                      </li>
                                    ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-12 col-12">
                          <div className="products-topbar clearfix">
                            <div className="products-topbar-left">
                              <div className="products-count">
                                Showing all {total} results
                              </div>
                            </div>
                          </div>

                          <div className="tab-content">
                            <div
                              className="fade show active"
                              id="layout-grid"
                              role="tabpanel"
                            >
                              <div className="products-list grid">
                                <div className="row">
                                  {catalogues &&
                                    catalogues.map((item: EtalaseTypes) => (
                                      <CatalogueItems
                                        id={item._id}
                                        name={item.name}
                                        foto={item.foto}
                                        price={item.price}
                                        arrival={item.arrival}
                                        onClick={() => openQuickView(item)}
                                      />
                                    ))}
                                </div>
                              </div>
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

        {/* <!-- Quickview --> */}
        <div className={quickViewClass}>
          <div id="quickview-container">
            <div className="quickview-container">
              <a
                type="button"
                className="quickview-close"
                onClick={() => resetQuickView()}
              ></a>
              <div className="quickview-notices-wrapper"></div>
              <div className="product single-product product-type-simple">
                <div className="product-detail">
                  <div className="row">
                    <div className="img-quickview">
                      <div className="product-images-slider">
                        <div id="quickview-slick-carousel">
                          <div className="images">
                            <div className="scroll-image">
                              <div className="slick-wrap">
                                <Slider
                                  {...sliderSetting}
                                  className="slick-sliders image-additional"
                                >
                                  <div className="img-thumbnail slick-slide">
                                    <a
                                      href={`/catalogue/${qvItem?._id}/detail`}
                                      className="image-scroll"
                                      title=""
                                    >
                                      <Image
                                        width={660}
                                        height={660}
                                        src={qvItem?.foto.at(0)?.fotoURL!}
                                        alt={qvItem?.foto.at(0)?.fotoALT!}
                                      />
                                    </a>
                                  </div>
                                  <div className="img-thumbnail slick-slide">
                                    <a
                                      href={`/catalogue/${qvItem?._id}/detail`}
                                      className="image-scroll"
                                      title=""
                                    >
                                      <Image
                                        width={660}
                                        height={660}
                                        src={qvItem?.foto.at(1)?.fotoURL!}
                                        alt={qvItem?.foto.at(1)?.fotoALT!}
                                      />
                                    </a>
                                  </div>
                                </Slider>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="quickview-single-info">
                      <div className="product-content-detail entry-summary">
                        <h1 className="product-title entry-title">
                          {qvItem?.name}
                        </h1>
                        <div className="price-single">
                          <div className="price">
                            {/* <del>
                              <span>Rp {qvItem?.price}</span>
                            </del> */}
                            <span>
                            <NumericFormat value={parseInt(qvItem?.price || '')} displayType='text' prefix='Rp ' thousandSeparator=',' decimalSeparator='.'/>
                              </span>
                          </div>
                        </div>
                        <div className="description">
                          <p>{qvItem?.deskripsi}</p>
                        </div>
                        <div className="variations">
                          <table cellSpacing={0}>
                            <tbody>
                              <tr>
                                <td className="label">Color</td>
                                <td className="attributes">
                                  <ul className="colors">
                                    {qvItem?.warnas.map((item) => (
                                      <ColorItem
                                        onClick={() =>
                                          setActiveColor(item.name)
                                        }
                                        active={activeColor === item.name}
                                        colorCode={item.kode}
                                      />
                                    ))}
                                  </ul>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="quantity-button cart">
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
                              className="input-text qty text"
                              minLength={1}
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
                            onClick={() => addItemToCart(qvItem as any)}
                          >
                            {addToCart ? "Added" : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="clearfix"
                onClick={() => setQuickView(false)}
              ></div>
            </div>
          </div>
        </div>
      <Footer />
      </body>

      <BackToTop/>
    </section>
    </>
  );
}
