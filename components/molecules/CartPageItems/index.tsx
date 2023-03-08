import { CartPageProps } from "@/services/data-types";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { NumericFormat } from "react-number-format";

export default function CartPageItems(props: CartPageProps) {
  const { cart, pos } = props;

  const [wishlists, setWishlists] = useState(() => {
    return JSON.parse(localStorage?.getItem("wishlists")!) || []
  })

  useEffect(() => {
    localStorage.setItem("wishlists", JSON.stringify(wishlists));
  }, [wishlists]);

  return (
    <>
      <tr className="cart-item">
        <td className="product-thumbnail">
          <a href={`/catalogue/${cart?.item?._id}/detail`}>
            <Image
              width="600"
              height="600"
              src={cart?.item?.foto?.at(0)?.fotoURL!}
              className="product-image"
              alt={cart?.item?.foto?.at(0)?.fotoURL!}
            />
          </a>
          <div className="product-name">
            <a href={`/catalogue/${cart?.item?._id}/detail`}>{cart?.item?.name}</a><br />
            {cart?.item.warnas.map((item) => (
                item.name === cart?.warna ? item.name : ''
            ))}
          </div>
        </td>
        <td className="product-price">
          <NumericFormat
            value={parseInt(cart?.item.price || "")}
            displayType="text"
            prefix="Rp "
            thousandSeparator=","
            decimalSeparator="."
          />
        </td>
        <td className="product-quantity">
          <div className="quantity">
          <span>
            {cart?.quantity}
          </span>
          </div>
        </td>
        <td className="product-subtotal">
          <span>
            <NumericFormat
              value={parseInt(cart?.item.price || "") * cart?.quantity!}
              displayType="text"
              prefix="Rp "
              thousandSeparator=","
              decimalSeparator="."
            />
          </span>
        </td>
      </tr>
    </>
  );
}
