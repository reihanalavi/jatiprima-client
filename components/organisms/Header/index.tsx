import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Logo from "./Logo";
import MenuItem, { SubMenuType, SubMenuValue } from "./Menu Item";
import cx from "classnames";
import { CartItemsProps, EtalaseTypes } from "@/services/data-types";
import CartItems from "@/components/molecules/Cart Items";
import Link from "next/link";
import { NumericFormat } from "react-number-format";

interface HeaderProps {
  menus: MenusProps[];
}

interface MenusProps {
  name: string;
  link: string;
  hasChildren?: boolean;
  submenus?: SubMenuType[];
  active?: boolean;
}

export default function Header(props: Partial<HeaderProps>) {
  const { menus } = props;

  const [cartActive, setCartActive] = useState(false);
  const [navbarActive, setNavbarActive] = useState(false);

  const [statusHome, setStatusHome] = useState(true);
  const [statusCatalog, setStatusCatalog] = useState(true);
  const [ariaHidden, setAriaHidden] = useState(true);

  const [isWishlists, setIsWishlists] = useState(false)
  const [wishlists, setWishlists] = useState([])
  const [totalWishlists, setTotalWishlists] = useState(0)
  const [wishlistsItem, setWishlistsItem] = useState(0)

  const cartEmptyClass = cx({
    "cart-empty-wrap": true,
    "d-none": isWishlists === true
  })

  const cartClass = cx({
    "cart-list-wrap": true,
    "d-none": isWishlists === false
  })

  const panelClass = cx({
    "mm-panel": true,
    "mm-opened-mm-": statusHome === true && statusCatalog === true,
    "mm-hidden-mm-": statusHome === false || statusCatalog === false,
  });

  const miniCartClass = cx({
    "dropdown mini-cart top-cart": true,
    show: cartActive,
  });

  const dropdownCartClass = cx({
    "dropdown-menu cart-popup": true,
    show: cartActive,
  });

  const navbarClass = cx({
    "site-mobile-navigation mm-wrapper": true,
    active: navbarActive,
  });

  const cartCountClass = cx({
    "cart-count": true,
    "d-none": wishlistsItem == 0
  })

  function showCart(state: boolean) {
    setCartActive(!cartActive);
    const saved = localStorage.getItem("wishlists")
    handleView(saved)
  }

  function countTotal() {
    let total = 0
    wishlists.map((item: CartItemsProps) => (

      total += parseInt(item.item.price) * (item.quantity)
      ))
      
      return total
  }
  
  function removeFromCart(item: never) {
    const index = wishlists.indexOf(item, 0)
    if(index > -1) {
      wishlists.splice(index, 1)
      localStorage.setItem("wishlists", JSON.stringify(wishlists))
    }
    const saved = localStorage.getItem("wishlists")
    handleView(saved)
  }

  const handleView = (async(saved: any) => {
    if(saved?.length!! > 2) {
      setIsWishlists(true)
      setWishlists(JSON.parse(saved!!))
      setWishlistsItem(wishlists.length)
      setTotalWishlists(countTotal())
    } else {
      setWishlistsItem(wishlists.length)
      setIsWishlists(false)
    }
  })

  useEffect(() => {
    const saved = localStorage.getItem("wishlists")
    // handleWishlistsView(saved)
    handleView(saved)
  }, [])

  useEffect(() => {
    setTotalWishlists(countTotal());
  }, [countTotal])

  return (
    <>
      <div id="site-header" className="site-header header-v3 relative">
        <div className="header-mobile">
          {/* Navbar Modal */}
          <div className={navbarClass}>
            <span
              id="remove-megamenu"
              onClick={() => {
                setNavbarActive(!navbarActive);
              }}
              className="remove-megamenu icon-remove"
            >
              Close
            </span>
            {/* Navbar Menu */}
            <nav id="mobile-main-menu" className="mm-menu">
              <div className="mm-panels">
                <div className={panelClass} id="mm-0">
                  <ul className="menu mm-listview">
                    {menus?.map((item) => (
                      <MenuItem
                        ariaHidden={ariaHidden}
                        setAriaHidden={setAriaHidden}
                        statusHome={statusHome}
                        setStatusHome={setStatusHome}
                        statusCatalog={statusCatalog}
                        setStatusCatalog={setStatusCatalog}
                        key={item.name}
                        name={item.name}
                        active={item.active}
                        link={item.link}
                        hasChildren={item.hasChildren}
                        mobile
                      />
                    ))}
                  </ul>
                </div>
                {menus?.map((item) =>
                  item.hasChildren ? (
                    <MenuItem
                      ariaHidden={ariaHidden}
                      setAriaHidden={setAriaHidden}
                      statusHome={statusHome}
                      setStatusHome={setStatusHome}
                      statusCatalog={statusCatalog}
                      setStatusCatalog={setStatusCatalog}
                      key={item.name}
                      name={item.name}
                      link={item.link}
                      active={item.active}
                      mobile
                      mobileHead
                      submenu={item.submenus}
                    />
                  ) : (
                    ""
                  )
                )}
              </div>
            </nav>
          </div>

          <div className="section-padding">
            <div className="section-container">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
                  <div className="navbar-header">
                    {/* Navbar Hamburger */}
                    <button
                      type="button"
                      id="show-megamenu"
                      className="navbar-toggle"
                      onClick={() => {
                        setNavbarActive(!navbarActive);
                      }}
                    ></button>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 header-center">
                  <Logo mobile/>
                </div>

                {/* Shop Button and Modal */}
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
                  <div className="ruper-topcart dropdown">
                    <div className={miniCartClass}>
                      <div
                        className="remove-cart-shadow"
                        onClick={() => {
                          showCart(!cartActive)
                        }}
                      ></div>
                      <a
                        className="dropdown-toggle cart-icon"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={() => {
                          showCart(!cartActive)
                        }}
                      >
                        <div className="icons-cart">
                          <i className="icon-large-paper-bag"></i>
                          <span className={cartCountClass}>{wishlistsItem}</span>
                        </div>
                      </a>
                      <div className={dropdownCartClass}>
                        <div className={cartEmptyClass}>
                          <ul className="cart-list">
                            <li className="empty">
                              <span>No products in the cart.</span>
                              <a className="go-shop" href="shop-grid-left.html">
                                GO TO SHOP
                                <i
                                  aria-hidden="true"
                                  className="arrow_right"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className={cartClass}>
                          <ul className="cart-list ">
                            {(wishlists) ?
                                  wishlists.map((item) => {
                                    return <CartItems cart={item}  onClick={() => removeFromCart(item)}/>

                                  })
                                  : ''}
                          </ul>
                          <div className="total-cart">
                            <div className="title-total">Total: </div>
                            <div className="total-price">
                              <span>
                                <NumericFormat value={totalWishlists} displayType='text' prefix='Rp ' thousandSeparator=',' decimalSeparator='.'/>
                              </span>
                            </div>
                          </div>
                          <div className="buttons">
                            <Link
                              href="/cart"
                              className="button btn view-cart btn-primary"
                            >
                              View cart
                            </Link>
                            <Link
                              href="/checkout"
                              className="button btn checkout btn-default"
                            >
                              Check out
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="header-mobile-fixed">
            {/* <!-- Shop --> */}
            <div className="shop-page">
              <a href="shop-grid-left.html">
                <i className="wpb-icon-shop"></i>
              </a>
            </div>

            {/* <!-- Search --> */}
            {/* <div className="search-box">
              <div className="search-toggle">
                <i className="wpb-icon-magnifying-glass"></i>
              </div>
            </div> */}
          </div>
        </div>

        <div className="header-desktop">
          <div className="header-wrapper">
            <div className="section-padding">
              <div className="section-container large p-l-r">
                <div className="row">
                  <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12 header-left">
                    <Logo />

                    <div className="site-navigation">
                      <nav id="main-navigation">
                        <ul id="menu-main-menu" className="menu">
                          {menus?.map((item) => (
                            <MenuItem
                              key={item.name}
                              name={item.name}
                              link={item.link}
                              hasChildren={item.hasChildren}
                              active={item.active}
                              mobileHead
                              submenu={item.submenus}
                            />
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                    {/* <div className="header-search-form hidden-md hidden-sm hidden-xs">
                      <form
                        role="search"
                        method="get"
                        className="search-from ajax-search"
                        action=""
                      >
                        <div className="search-box">
                          <input
                            type="text"
                            name="s"
                            id="ss"
                            className="input-search s"
                            placeholder="What are you looking for?"
                          />
                          <div className="result-search-products-content">
                            <div className="result-search-products">
                              <ul className="items-search">
                                <li className="item-search">
                                  <a
                                    className="item-image"
                                    href="shop-details.html"
                                  >
                                    <Image
                                      alt=""
                                      className="pull-left"
                                      width={600}
                                      height={600}
                                      src="/media/product/3.jpg"
                                    />
                                  </a>
                                  <div className="item-content">
                                    <a
                                      href="shop-details.html"
                                      title="Chair Oak Matt Lacquered"
                                    >
                                      <span>Chair Oak Matt Lacquered</span>
                                    </a>
                                    <div className="price">$150.00</div>
                                  </div>
                                </li>
                                <li className="item-search">
                                  <a
                                    className="item-image"
                                    href="shop-details.html"
                                  >
                                    <Image
                                      alt=""
                                      className="pull-left"
                                      width={600}
                                      height={600}
                                      src="/media/product/1.jpg"
                                    />
                                  </a>
                                  <div className="item-content">
                                    <a
                                      href="shop-details.html"
                                      title="Zunkel Schwarz"
                                    >
                                      <span>Zunkel Schwarz</span>
                                    </a>
                                    <div className="price">$100.00</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <button
                          id="search-submit"
                          className="btn"
                          type="submit"
                        >
                          <span className="search-icon">
                            <i className="icon-search"></i>
                          </span>
                          <span>Search</span>
                        </button>
                      </form>
                    </div> */}

                    <div className="header-page-link">
                      {/* <!-- Search --> */}
                      {/* <div className="search-box hidden-lg">
                        <div className="search-toggle">
                          <i className="wpb-icon-magnifying-glass"></i>
                        </div>
                      </div> */}

                      {/* <!-- Cart --> */}
                      <div className="ruper-topcart dropdown light">
                        <div className={miniCartClass}>
                          <div
                            className="remove-cart-shadow"
                            onClick={() => {
                              showCart(!cartActive)
                            }}
                          ></div>
                          <a
                            className="dropdown-toggle cart-icon"
                            href="#"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            onClick={() => {
                              showCart(!cartActive)
                            }}
                          >
                            <div className="icons-cart">
                              <i className="icon-large-paper-bag"></i>
                              <span className={cartCountClass}>{wishlistsItem}</span>
                            </div>
                          </a>
                          <div className={dropdownCartClass}>
                            <div className={cartEmptyClass}>
                              <ul className="cart-list">
                                <li className="empty">
                                  <span>No products in the cart.</span>
                                  <a
                                    className="go-shop"
                                    href="shop-grid-left.html"
                                  >
                                    GO TO SHOP
                                    <i
                                      aria-hidden="true"
                                      className="arrow_right"
                                    ></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className={cartClass}>
                              <ul className="cart-list ">
                                {(wishlists) ?
                                wishlists.map((item) => {
                                  return <CartItems cart={item} onClick={() => removeFromCart(item)}/>
                                })
                                 : ''}
                              </ul>
                              <div className="total-cart">
                                <div className="title-total">Total: </div>
                                <div className="total-price">
                                  <span>
                                  <NumericFormat value={totalWishlists} displayType='text' prefix='Rp ' thousandSeparator=',' decimalSeparator='.'/>
                                    </span>
                                </div>
                              </div>
                              <div className="buttons">
                                <Link
                                  href="/cart"
                                  className="button btn view-cart btn-primary"
                                >
                                  View cart
                                </Link>
                                <Link
                                  href="/checkout"
                                  className="button btn checkout btn-default"
                                >
                                  Check out
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}