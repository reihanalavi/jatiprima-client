import { CartPageProps } from "@/services/data-types";
import Image from "next/image";
import React from "react";
import { NumericFormat } from "react-number-format";

export default function CheckoutItems(props: CartPageProps) {
  const { cart, pos } = props;
  return (
    <>
      <div className="cart-item">
        <div className="info-product">
          <div className="product-thumbnail">
            <Image
              width={600}
              height={600}
              src={cart?.item.foto.at(0)?.fotoURL!}
              alt={cart?.item.foto.at(0)?.fotoALT!}
            />
          </div>
          <div className="product-name">
            {cart?.item.name}
            <strong className="product-quantity">
            {cart?.item.warnas.map((item) => (
                item.name === cart?.warna ? item.name : ''
            ))} | QTY : {cart?.quantity!}
            </strong>
          </div>
        </div>
        <div className="product-total">
          <NumericFormat
            value={parseInt(cart?.item.price || "")}
            displayType="text"
            prefix="$"
            thousandSeparator=","
            decimalSeparator="."
          />
        </div>
      </div>
    </>
  );
}
