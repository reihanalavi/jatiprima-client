import CatalogueItems from "@/components/molecules/CatalogueItems";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
import Slider from "react-slick";
import Arrow from "@/components/atoms/Slider/Arrow";
import ColorItem from "@/components/atoms/ColorItem";
import { EtalaseTypes } from "@/services/data-types";
import Link from "next/link";
import { NumericFormat } from "react-number-format";
import CatalogueSliderItems from "@/components/molecules/CatalogueSliderItems";

interface EtalaseProps {
  item: EtalaseTypes[];
  mobile?: boolean;
  scrolling?: boolean;
}

export default function Etalase(props: EtalaseProps) {
  const { item, mobile, scrolling } = props;

  const [quickView, setQuickView] = useState(false);
  const [qty, setQty] = useState(1);

  const [qvItem, setQvItem] = useState<EtalaseTypes>();

  const [colors, setColors] = useState<any>();
  const [activeColor, setActiveColor] = useState<any>();

  const [wishlists, setWishlists] = useState<any>([]);

  const [addToCart, setAddToCart] = useState(false);

  const etalaseClass = cx({
    "d-sm-block d-md-block": true,
    "d-lg-none": scrolling === true,
    "d-sm-none": scrolling === true,
    "d-md-none": scrolling === true,
  });

  const addToCartClass = cx({
    "button alt": true,
    "single-add-to-cart-button": addToCart === false,
    "single-added-to-cart-button": addToCart === true,
  });

  const quickViewClass = cx({
    "quickview-popup": true,
    active: quickView,
  });

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

  function handleStock(code: Number) {
    if ((code as number) > 0) {
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

  const sliderSetting2 = {
    arrow: true,
    nextArrow: <Arrow right />,
    prevArrow: <Arrow left />,
    dots: false,
    draggable: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          slidesToShow: 3,
          slidesToScroll: 3,
          vertical: !1,
          verticalSwiping: !1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
      <section className="section section-padding">
        {mobile ? (
          <div className={etalaseClass}>
            {/* <!-- Block Products --> */}
            <div className="block block-products">
              <div className="block-widget-wrap">
                <ul className="nav nav-tabs layout-2" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#catalogues"
                      role="tab"
                    >
                      Catalogues
                    </a>
                  </li>
                </ul>
                <div className="tab-content slick-wrap">
                  <Slider {...sliderSetting2} className="slick-sliders">
                    {item.map((item: EtalaseTypes) => (
                      <CatalogueSliderItems
                        id={item._id}
                        name={item.name}
                        foto={item.foto}
                        price={item.price}
                        arrival={item.arrival}
                        onClick={() => openQuickView(item)}
                      />
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="section-container d-none d-xl-block d-lg-block">
            {/* <!-- Block Products --> */}
            <div className="block block-products">
              <div className="block-widget-wrap">
                <ul className="nav nav-tabs layout-2" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#catalogues"
                      role="tab"
                    >
                      Catalogues
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="catalogues"
                    role="tabpanel"
                  >
                    <div className="products-list grid">
                      <div className="row">
                        {item.map((item: EtalaseTypes) => (
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
        )}

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
                                    <Link
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
                                    </Link>
                                  </div>
                                  <div className="img-thumbnail slick-slide">
                                    <Link
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
                                    </Link>
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
                            <span>
                              <NumericFormat
                                value={parseInt(qvItem?.price || "")}
                                displayType="text"
                                prefix="$"
                                thousandSeparator=","
                                decimalSeparator="."
                              />
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
                            onClick={() => addItemToCart(qvItem!)}
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
      </section>
    </>
  );
}
