import { CartItemsProps } from "@/services/data-types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NumericFormat } from "react-number-format";

export default function CartItems(props: CartItemsProps) {
    const {cart, onClick} = props
  return (
    <>
      <li className="mini-cart-item">
        <button onClick={onClick} className="remove" title="Remove this item">
          <i className="icon_close"></i>
        </button>
        <Link href='/checkout' className="product-image">
          <Image width={600} height={600} src={cart.item.foto.at(0)?.fotoURL!} alt={cart.item.foto.at(0)?.fotoALT!} />
        </Link>
        <Link href='/checkout' className="product-name">
          {cart.item.name} | {cart.warna}
        </Link>
        <div className="quantity">Qty: {cart.quantity}</div>
        <div className="price">
        <NumericFormat value={parseInt(cart.item.price) * cart.quantity} displayType='text' prefix='Rp ' thousandSeparator=',' decimalSeparator='.'/>
        </div>
      </li>
    </>
  );
}
