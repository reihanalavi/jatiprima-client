import BackToTop from "@/components/molecules/Back To Top";
import CartPageItems from "@/components/molecules/CartPageItems";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import { CartItemsProps } from "@/services/data-types";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import cx from 'classnames'
import { getCountryCities } from "@/services/apiservice";

export default function Cart() {
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

  const [isWishlists, setIsWishlists] = useState(false);
  const [wishlists, setWishlists] = useState([]);
  const [totalWishlists, setTotalWishlists] = useState(0);
  const [wishlistsItem, setWishlistsItem] = useState(0);

  const cartClass = cx({
    "shop-cart" : true,
    "d-none": wishlists.length === 0
  })

  const emptyClass = cx({
    "shop-cart-empty" : true,
    "d-none": wishlists.length > 0
  })

  function countTotal() {
    let total = 0;
    wishlists.map(
      (item: CartItemsProps) =>
        (total += parseInt(item?.item?.price!) * item?.quantity!)
    );

    return total;
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
    // handleWishlistsView(saved)
    handleView(saved);
  }, []);

  useEffect(() => {
    setTotalWishlists(countTotal());
  }, [countTotal])

  return (
    <>
      <section>
        <Header menus={menus} />
        <body className="shop">
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
                        <h1 className="text-title-heading">Shopping Cart</h1>
                      </div>
                      <div className="breadcrumbs">
                        <Link href="/">Home</Link>
                        <span className="delimiter"></span>
                        <Link href="/catalogues">Catalogues</Link>
                        <span className="delimiter"></span>Cart
                      </div>
                    </div>
                  </div>

                  <div id="content" className="site-content" role="main">
                    <div className="section-padding">
                      <div className="section-container p-l-r">
                        <div className={cartClass}>
                          <div className="row">
                            <div className="col-xl-8 col-lg-12 col-md-12 col-12">
                              <div className="table-responsive">
                                <table
                                  className="cart-items table"
                                  cellSpacing={0}
                                >
                                  <thead>
                                    <tr>
                                      <th className="product-thumbnail">
                                        Product
                                      </th>
                                      <th className="product-price">Price</th>
                                      <th className="product-quantity">
                                        Quantity
                                      </th>
                                      <th className="product-subtotal">
                                        Subtotal
                                      </th>
                                      <th className="product-remove">&nbsp;</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {wishlists &&
                                      wishlists.map((item, i) => (
                                        <CartPageItems cart={item} pos={i} />
                                      ))}
                                    <tr>
                                      <td colSpan={6} className="actions">
                                        <div className="bottom-cart">
                                          <h2>
                                            <Link href="/catalogues">
                                              Continue Shopping
                                            </Link>
                                          </h2>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-12 col-md-12 col-12">
                              <div className="cart-totals">
                                <h2>Cart totals</h2>
                                <div>
                                  <div className="cart-subtotal">
                                    <div className="title">Subtotal</div>
                                    <div>
                                      <span>
                                        <NumericFormat
                                          value={totalWishlists || 0}
                                          displayType="text"
                                          prefix="Rp "
                                          thousandSeparator=","
                                          decimalSeparator="."
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="proceed-to-checkout">
                                  <Link
                                    href="/checkout"
                                    className="checkout-button button"
                                  >
                                    Proceed to checkout
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={emptyClass}>
                          <div className="notices-wrapper">
                            <p className="cart-empty">
                              Your cart is currently empty.
                            </p>
                          </div>
                          <div className="return-to-shop">
                            <Link className="button" href="/catalogues">
                              Return to shop
                            </Link>
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
        </body>
        <Footer />
      </section>
      <BackToTop />
    </>
  );
}
