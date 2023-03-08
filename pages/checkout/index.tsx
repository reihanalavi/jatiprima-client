import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import BackToTop from "@/components/molecules/Back To Top";
import Link from "next/link";
import { CartItemsProps, CountryTypes } from "@/services/data-types";
import CheckoutItems from "@/components/molecules/Checkout Items";
import cx from "classnames";
import { NumericFormat } from "react-number-format";
import { createCheckout, getCountryCities } from "@/services/apiservice";


interface ok { 
  [states: string]: any
}
export default function Checkout(props: ok) {
  const {states} = props
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

  const [country, setCountries] = useState<CountryTypes[]>([]);
  const [province, setProvinces] = useState([]);
  const [isWishlists, setIsWishlists] = useState(false);
  const [wishlists, setWishlists] = useState([]);
  const [totalWishlists, setTotalWishlists] = useState(0);
  const [wishlistsItem, setWishlistsItem] = useState(0);

  //customer checkout payload
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [countryKey, setCountryKey] = useState(0);
  const [cityKey, setCityKey] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [provinceKey, setProvinceKey] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [notes, setNotes] = useState("");

  const [checkouted, setCheckouted] = useState(false);

  const successClass = cx({
    "form-login-register": true,
    active: checkouted,
  });

  function clearLocalStorage() {
    localStorage.setItem("wishlists", "[]")
  }
  function handlePayload() {
    let c = provinceKey
    var items: [] = [];
    let wishlistItem;

    wishlists.map(
      (item: any) => (
        (wishlistItem = {
          catalogue: item.item._id,
          warna: item.warna,
          quantity: item.quantity,
        }),
        items?.push(wishlistItem as never)
      )
    );

    const payload = {
      customerData: {
        firstName,
        lastName,
        companyName,
        email,
      },
      address: {
        country: c,
        address1,
        address2,
        city: cityKey,
        province: provinceKey,
        postalCode,
      },
      notes,
      cart: items,
    };

    postCheckout(payload as any);
  }

  function countTotal() {
    let total = 0;
    wishlists.map(
      (item: CartItemsProps) =>
        (total += parseInt(item?.item?.price!) * item?.quantity!)
    );

    return total;
  }

  function setKey(x: number) {
    setCountryKey(x);

    setProvinces(country?.at(x)?.states as never);
  }

  const postCheckout = useCallback(async (payloads: string) => {
    const data = await createCheckout(payloads);
    if (data.data) {
      setCheckouted(true);
    }
  }, []);

  const getCountry = useCallback(async () => {
    const data = await getCountryCities();
    setCountries(data.data);
  }, []);

  useEffect(() => {
    getCountry();
  }, []);

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
    if(saved) {
      handleView(saved)
    } else {
      localStorage.setItem("wishlists", "[]")
    }
  }, []);

  useEffect(() => {
    setTotalWishlists(countTotal());
  }, [countTotal]);

  return (
    <>
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
                      <h1 className="text-title-heading">Checkout</h1>
                    </div>
                    <div className="breadcrumbs">
                      <Link href="/">Home</Link>
                      <span className="delimiter"></span>
                      <Link href="/catalogues">Catalogues</Link>
                      <span className="delimiter"></span>Checkout
                    </div>
                  </div>
                </div>

                <div id="content" className="site-content" role="main">
                  <div className="section-padding">
                    <div className="section-container p-l-r">
                      <div className="shop-checkout">
                        <form
                          name="checkout"
                          method="post"
                          className="checkout"
                          action=""
                          autoComplete="off"
                        >
                          <div className="row">
                            <div className="col-xl-8 col-lg-7 col-md-12 col-12">
                              <div className="customer-details">
                                <div className="billing-fields">
                                  <h3>Billing details</h3>
                                  <div className="billing-fields-wrapper">
                                    <p className="form-row form-row-first validate-required">
                                      <label>
                                        First name{" "}
                                        <span
                                          className="required"
                                          title="required"
                                        >
                                          *
                                        </span>
                                      </label>
                                      <span className="input-wrapper">
                                        <input
                                          type="text"
                                          className="input-text"
                                          name="firstName"
                                          value={firstName}
                                          onChange={(event) =>
                                            setFirstName(event.target.value)
                                          }
                                        />
                                      </span>
                                    </p>
                                    <p className="form-row form-row-last validate-required">
                                      <label>
                                        Last name{" "}
                                        <span
                                          className="required"
                                          title="required"
                                        >
                                          *
                                        </span>
                                      </label>
                                      <span className="input-wrapper">
                                        <input
                                          type="text"
                                          className="input-text"
                                          name="lastName"
                                          value={lastName}
                                          onChange={(event) =>
                                            setLastName(event.target.value)
                                          }
                                        />
                                      </span>
                                    </p>
                                    <p className="form-row form-row-wide">
                                      <label>
                                        Company name{" "}
                                        <span className="optional">
                                          (optional)
                                        </span>
                                      </label>
                                      <span className="input-wrapper">
                                        <input
                                          type="text"
                                          className="input-text"
                                          name="companyName"
                                          value={companyName}
                                          onChange={(event) =>
                                            setCompanyName(event.target.value)
                                          }
                                        />
                                      </span>
                                    </p>
                                    <p className="form-row form-row-wide validate-required">
                                      <label>
                                        Country / Region{" "}
                                        <span
                                          className="required"
                                          title="required"
                                        >
                                          *
                                        </span>
                                      </label>
                                      <span className="input-wrapper">
                                        <select
                                          name="billing_country"
                                          className="country-select custom-select"
                                          value={countryKey}
                                          onChange={(event) =>
                                            setKey(parseInt(event.target.value))
                                          }
                                        >
                                          <option selected disabled value="">
                                            Select a country / region…
                                          </option>
                                          {country &&
                                            country.map((item, i) => (
                                              <option key={i} value={i}>
                                                {item.name}
                                              </option>
                                            ))}
                                        </select>
                                      </span>
                                    </p>
                                    <p className="form-row address-field validate-required form-row-wide">
                                      <label>
                                        Street address{" "}
                                        <span
                                          className="required"
                                          title="required"
                                        >
                                          *
                                        </span>
                                      </label>
                                      <span className="input-wrapper">
                                        <input
                                          type="text"
                                          className="input-text"
                                          name="address1"
                                          placeholder="House number and street name"
                                          value={address1}
                                          onChange={(event) =>
                                            setAddress1(event.target.value)
                                          }
                                        />
                                      </span>
                                    </p>
                                    <p className="form-row address-field form-row-wide">
                                      <label>
                                        Apartment, suite, unit, etc.&nbsp;
                                        <span className="optional">
                                          (optional)
                                        </span>
                                      </label>
                                      <span className="input-wrapper">
                                        <input
                                          type="text"
                                          className="input-text"
                                          name="address2"
                                          placeholder="Apartment, suite, unit, etc. (optional)"
                                          value={address2}
                                          onChange={(event) =>
                                            setAddress2(event.target.value)
                                          }
                                        />
                                      </span>
                                    </p>
                                    <p className="form-row address-field validate-required form-row-wide">
                                      <label className="">
                                        Town / City{" "}
                                        <span
                                          className="required"
                                          title="required"
                                        >
                                          *
                                        </span>
                                      </label>
                                      <span className="input-wrapper">
                                        <input
                                          type="text"
                                          className="input-text"
                                          name="city"
                                          value={cityKey}
                                          onChange={(event) =>
                                            setCityKey(event.target.value)
                                          }
                                        />
                                      </span>
                                    </p>
                                    <p className="form-row address-field validate-required validate-state form-row-wide">
                                      <label>
                                        State / County{" "}
                                        <span
                                          className="required"
                                          title="required"
                                        >
                                          *
                                        </span>
                                      </label>
                                      <span className="input-wrapper">
                                        <select
                                          name="billing_state"
                                          className="state-select custom-select"
                                          value={provinceKey}
                                          onChange={(event) =>
                                            setProvinceKey(event.target.value)
                                          }
                                        >
                                          <option selected disabled value="">
                                            Select a state / county…
                                          </option>
                                          {province &&
                                            province.map((item: any, i) => (
                                              <option
                                                key={i}
                                                value={`${item.name}`}
                                              >
                                                {item.name}
                                              </option>
                                            ))}
                                        </select>
                                      </span>
                                    </p>
                                    <p className="form-row address-field validate-required validate-postcode form-row-wide">
                                      <label>
                                        Postcode / ZIP{" "}
                                        <span
                                          className="required"
                                          title="required"
                                        >
                                          *
                                        </span>
                                      </label>
                                      <span className="input-wrapper">
                                        <input
                                          type="text"
                                          className="input-text"
                                          name="postalCode"
                                          value={postalCode}
                                          onChange={(event) =>
                                            setPostalCode(event.target.value)
                                          }
                                        />
                                      </span>
                                    </p>
                                    <p className="form-row form-row-wide validate-required validate-email">
                                      <label>
                                        Email address{" "}
                                        <span
                                          className="required"
                                          title="required"
                                        >
                                          *
                                        </span>
                                      </label>
                                      <span className="input-wrapper">
                                        <input
                                          type="email"
                                          className="input-text"
                                          name="email"
                                          value={email}
                                          onChange={(event) =>
                                            setEmail(event.target.value)
                                          }
                                          autoComplete="off"
                                        />
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="additional-fields">
                                <p className="form-row notes">
                                  <label>
                                    Order notes{" "}
                                    <span className="optional">(optional)</span>
                                  </label>
                                  <span className="input-wrapper">
                                    <textarea
                                      name="notes"
                                      className="input-text"
                                      value={notes}
                                      onChange={(event) =>
                                        setNotes(event.target.value)
                                      }
                                      placeholder="Notes about your order, e.g. special notes for delivery."
                                      rows={2}
                                      cols={5}
                                    ></textarea>
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-12 col-12">
                              <div className="checkout-review-order">
                                <div className="checkout-review-order-table">
                                  <div className="review-order-title">
                                    Product
                                  </div>
                                  <div className="cart-items">
                                    {wishlists &&
                                      wishlists.map((item, i) => (
                                        <CheckoutItems cart={item} pos={i} />
                                      ))}
                                  </div>
                                  <div className="cart-subtotal">
                                    <h2>Subtotal</h2>
                                    <div className="subtotal-price">
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
                                  {/* <div className="shipping-totals shipping">
                                    <h2>Shipping</h2>
                                    <div data-title="Shipping">
                                      <ul className="shipping-methods custom-radio">
                                        <li>
                                          <input
                                            type="radio"
                                            name="shipping_method"
                                            data-index="0"
                                            value="free_shipping"
                                            className="shipping_method"
                                            checked
                                          />
                                          <label>Free shipping</label>
                                        </li>
                                        <li>
                                          <input
                                            type="radio"
                                            name="shipping_method"
                                            data-index="0"
                                            value="flat_rate"
                                            className="shipping_method"
                                          />
                                          <label>Flat rate</label>
                                        </li>
                                      </ul>
                                    </div>
                                  </div> */}
                                  <div className="order-total">
                                    <h2>Total</h2>
                                    <div className="total-price">
                                      <strong>
                                        <span>
                                          <NumericFormat
                                            value={totalWishlists || 0}
                                            displayType="text"
                                            prefix="Rp "
                                            thousandSeparator=","
                                            decimalSeparator="."
                                          />
                                        </span>
                                      </strong>
                                    </div>
                                  </div>
                                </div>
                                <div id="payment" className="checkout-payment">
                                  {/* <ul className="payment-methods methods custom-radio">
                                    <li className="payment-method">
                                      <input
                                        type="radio"
                                        className="input-radio"
                                        name="payment_method"
                                        value="bacs"
                                        checked
                                      />
                                      <label>Direct bank transfer</label>
                                      <div className="payment-box">
                                        <p>
                                          Make your payment directly into our
                                          bank account. Please use your Order ID
                                          as the payment reference. Your order
                                          will not be shipped until the funds
                                          have cleared in our account.
                                        </p>
                                      </div>
                                    </li>
                                    <li className="payment-method">
                                      <input
                                        type="radio"
                                        className="input-radio"
                                        name="payment_method"
                                        value="cheque"
                                      />
                                      <label>Check payments</label>
                                      <div className="payment-box">
                                        <p>
                                          Please send a check to Store Name,
                                          Store Street, Store Town, Store State
                                          / County, Store Postcode.
                                        </p>
                                      </div>
                                    </li>
                                    <li className="payment-method">
                                      <input
                                        type="radio"
                                        className="input-radio"
                                        name="payment_method"
                                        value="cod"
                                      />
                                      <label>Cash on delivery</label>
                                      <div className="payment-box">
                                        <p>Pay with cash upon delivery.</p>
                                      </div>
                                    </li>
                                    <li className="payment-method">
                                      <input
                                        type="radio"
                                        className="input-radio"
                                        name="payment_method"
                                        value="paypal"
                                      />
                                      <label>PayPal</label>
                                      <div className="payment-box">
                                        <p>
                                          Pay via PayPal; you can pay with your
                                          credit card if you don’t have a PayPal
                                          account.
                                        </p>
                                      </div>
                                    </li>
                                  </ul> */}
                                  <div className="form-row place-order">
                                    {/* <div className="terms-and-conditions-wrapper">
                                      <div className="privacy-policy-text"></div>
                                    </div> */}
                                    <a
                                      className="button alt"
                                      onClick={() => handlePayload()}
                                    >
                                      Place order
                                    </a>
                                    <p>
                                      <br /> We'll inform you about details and
                                      terms of the payment after you hit the
                                      "Place Order" Button
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
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
                          We will soon process your checkout and inform you
                          about the payment.
                        </p>
                      </div>
                      <Link
                        className="button alt single-place-order"
                        onClick={() => clearLocalStorage()}
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
        <Footer />
      </body>
      <BackToTop />
    </>
  );
}
