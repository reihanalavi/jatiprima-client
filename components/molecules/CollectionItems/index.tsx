import { CollectionItemsProps } from "@/services/data-types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CollectionItems(props: CollectionItemsProps) {
    const { fotoURL, fotoALT, name, _id } = props

  return (
    <>
      <div className="item item-product-cat slick-slide">
        <div className="item-product-cat-content">
          <Link href={`/catalogues?id=${_id}`}>
            <div className="item-image">
              <Image
                width={250}
                height={250}
                src={`${fotoURL}`}
                alt={`${fotoALT}`}
              />
            </div>
          </Link>
          <div className="product-cat-content-info">
            <h2 className="item-title">
              <a href={`/catalogues?id=${_id}`}>{name}</a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
