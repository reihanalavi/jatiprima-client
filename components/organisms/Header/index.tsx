import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import Logo from "./Logo";
import MenuItem, { SubMenuType } from "./Menu Item";
import cx from "classnames";
import { CartItemsProps } from "@/services/data-types";
import CartItems from "@/components/molecules/Cart Items";
import Link from "next/link";
import { NumericFormat } from "react-number-format";
import debouce from "lodash.debounce";
import { getCatalogueByCategory } from "@/services/apiservice";
import SearchHeaderItems from "@/components/molecules/SearchHeaderItems";
import SearchSidebarItems from "@/components/molecules/SearchSidebarItems";
import Image from "next/image";

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

  const [isWishlists, setIsWishlists] = useState(false);
  const [wishlists, setWishlists] = useState([]);
  const [totalWishlists, setTotalWishlists] = useState(0);
  const [wishlistsItem, setWishlistsItem] = useState(0);

  const [searchMobile, setSearchMobile] = useState(false);
  const [search, setSearch] = useState("");

  const [searchedCatalogue, setSearchedCatalogue] = useState([]);

  const resultSearchProductsClass = cx({
    "result-search-products": true,
    "d-block": search,
  });

  const resultSearchBoxClass = cx({
    "result-search-products-content": true,
    "d-block": search,
  });

  const searchOverlayClass = cx({
    "search-overlay": true,
    "search-visible": searchMobile,
  });

  const cartEmptyClass = cx({
    "cart-empty-wrap": true,
    "d-none": isWishlists === true,
  });

  const cartClass = cx({
    "cart-list-wrap": true,
    "d-none": isWishlists === false,
  });

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
    "d-none": wishlistsItem == 0,
  });

  const handleChange = useCallback(async (event: any) => {
    setSearch(event.target.value);

    if (event.target.value !== "") {
      const data = await getCatalogueByCategory("search", event.target.value);
      if (data.data) {
        setSearchedCatalogue([]);
        setSearchedCatalogue(data.data);
      }
    } else {
      setSearchedCatalogue([]);
    }
  }, []);

  const deboncedResults = useMemo(() => {
    return debouce(handleChange, 300);
  }, []);

  useEffect(() => {
    deboncedResults.cancel();
  });
  
  function showCart(state: boolean) {
    setCartActive(!cartActive);
    const saved = localStorage.getItem("wishlists");
    if (saved) {
      handleView(saved);
    } else {
      localStorage.setItem("wishlists", "[]");
    }
  }

  function countTotal() {
    let total = 0;
    wishlists.map(
      (item: CartItemsProps) =>
        (total += parseInt(item.item.price) * item.quantity)
    );

    return total;
  }

  function removeFromCart(item: never) {
    const index = wishlists.indexOf(item, 0);
    if (index > -1) {
      wishlists.splice(index, 1);
      localStorage.setItem("wishlists", JSON.stringify(wishlists));
    }
    const saved = localStorage.getItem("wishlists");
    if (saved) {
      handleView(saved);
    } else {
      localStorage.setItem("wishlists", "[]");
    }
  }

  const handleView = async (saved: any) => {
    if (saved?.length!! > 2) {
      setIsWishlists(true);
      setWishlists(JSON.parse(saved!!));
      setWishlistsItem(wishlists.length);
      setTotalWishlists(countTotal());
    } else {
      setWishlistsItem(wishlists.length);
      setIsWishlists(false);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("wishlists");
    if (saved) {
      handleView(saved);
    } else {
      localStorage.setItem("wishlists", "[]");
    }
    // handleWishlistsView(saved)
  }, []);

  useEffect(() => {
    setTotalWishlists(countTotal());
  }, [countTotal]);

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
                  <Logo mobile />
                </div>

                {/* Shop Button and Modal */}
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
                  <div className="ruper-topcart dropdown">
                    <div className={miniCartClass}>
                      <div
                        className="remove-cart-shadow"
                        onClick={() => {
                          showCart(!cartActive);
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
                          showCart(!cartActive);
                        }}
                      >
                        <div className="icons-cart">
                          {/* <i className="icon-large-paper-bag"></i> */}
                          <span>
                                  <Image alt='cart-vector' width={30} height={30} src="/cart.svg"></Image>
                                  </span>
                          <span className={cartCountClass}>
                            {wishlistsItem}
                          </span>
                        </div>
                      </a>
                      <div className={dropdownCartClass}>
                        <div className={cartEmptyClass}>
                          <ul className="cart-list">
                            <li className="empty">
                              <span>No products in the cart.</span>
                              <Link className="go-shop" href="/catalogues">
                                GO TO SHOP
                                <i
                                  aria-hidden="true"
                                  className="arrow_right"
                                ></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className={cartClass}>
                          <ul className="cart-list ">
                            {wishlists
                              ? wishlists.map((item) => {
                                  return (
                                    <CartItems
                                      cart={item}
                                      onClick={() => removeFromCart(item)}
                                    />
                                  );
                                })
                              : ""}
                          </ul>
                          <div className="total-cart">
                            <div className="title-total">Total: </div>
                            <div className="total-price">
                              <span>
                                <NumericFormat
                                  value={totalWishlists}
                                  displayType="text"
                                  prefix="Rp "
                                  thousandSeparator=","
                                  decimalSeparator="."
                                />
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
              <Link href="/catalogues">
                <i className="wpb-icon-shop"></i>
              </Link>
            </div>

            {/* <!-- Search --> */}
            <div className="search-box" onClick={() => setSearchMobile(true)}>
              <div className="search-toggle">
                <i className="wpb-icon-magnifying-glass"></i>
              </div>
            </div>
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
                    <div className="header-search-form hidden-md hidden-sm hidden-xs">
                      <form
                        role="search"
                        method="get"
                        className="search-from ajax-search"
                        action="/catalogues"
                      >
                        <div className="search-box visible">
                          <input
                            type="text"
                            name="search"
                            id="search"
                            onChange={deboncedResults}
                            className="input-search s"
                            placeholder="What are you looking for?"
                          />
                          <div className={resultSearchBoxClass}>
                            <div className={resultSearchProductsClass}>
                              <ul className="items-search">
                                {search && searchedCatalogue.length == 0 && (
                                  <p>
                                    Not found what you want? Search{" "}
                                    <Link href={"/catalogues"}>here.</Link>
                                  </p>
                                )}
                                {searchedCatalogue &&
                                  searchedCatalogue.map((item: any) => (
                                    <SearchHeaderItems item={item} />
                                  ))}
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
                    </div>

                    <div className="header-page-link">
                      {/* <!-- Search --> */}
                      <div className="search-box hidden-lg" onClick={() => setSearchMobile(true)}>
                        <div className="search-toggle">
                          <i className="wpb-icon-magnifying-glass"></i>
                        </div>
                      </div>

                      {/* <!-- Cart --> */}
                      <div className="ruper-topcart dropdown light">
                        <div className={miniCartClass}>
                          <div
                            className="remove-cart-shadow"
                            onClick={() => {
                              showCart(!cartActive);
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
                              showCart(!cartActive);
                            }}
                          >
                            <div className="icons-cart">
                              {/* <i className="icon-large-paper-bag"></i> */}
                              <span>
                                  <Image alt='cart-vector' width={30} height={30} src="/cart.svg"></Image>
                                  </span>
                              <span className={cartCountClass}>
                                {wishlistsItem}
                              </span>
                            </div>
                          </a>
                          <div className={dropdownCartClass}>
                            <div className={cartEmptyClass}>
                              <ul className="cart-list">
                                <li className="empty">
                                  <span>No products in the cart.</span>
                                  <Link
                                    className="go-shop"
                                    href="/catalogues"
                                  >
                                    GO TO SHOP
                                    <i
                                      aria-hidden="true"
                                      className="arrow_right"
                                    ></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className={cartClass}>
                              <ul className="cart-list ">
                                {wishlists
                                  ? wishlists.map((item) => {
                                      return (
                                        <CartItems
                                          cart={item}
                                          onClick={() => removeFromCart(item)}
                                        />
                                      );
                                    })
                                  : ""}
                              </ul>
                              <div className="total-cart">
                                <div className="title-total">Total: </div>
                                <div className="total-price">
                                  <span>
                                    <NumericFormat
                                      value={totalWishlists}
                                      displayType="text"
                                      prefix="Rp "
                                      thousandSeparator=","
                                      decimalSeparator="."
                                    />
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

      {/* <!-- Search --> */}
      <div className={searchOverlayClass}>
        <div
          className="close-search"
          onClick={() => setSearchMobile(false)}
        ></div>
        <div className="wrapper-search">
          <form role="search" method="get" className="search-from" action="/catalogues">
            <div className="search-box">
              <button id="searchsubmit" className="btn" type="submit">
                <i className="icon-search"></i>
              </button>
              <input
                id="myInput"
                type="text"
                autoComplete="off"
                defaultValue=""
                onChange={deboncedResults}
                name="search"
                placeholder="Search..."
              />
              <div className="content-menu_search">
                {search && searchedCatalogue.length == 0 && (
                  <span>
                    Not found what you want? Search{" "}
                    <Link href={"/catalogues"}><b>here.</b></Link>
                  </span>
                )}
                {searchedCatalogue &&
                  searchedCatalogue.map((item: any) => (
                    <SearchSidebarItems item={item} />
                  ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
