import { FotoCatalogueTypes, SaleItemProps } from "@/services/data-types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

export default function SaleItem(props: SaleItemProps) {
  const { id, name, foto } = props;
  
  return (
    <>
      <div className="col-xl-3 col-md-3 col-sm-4 sm-m-b-30">
        <div className="item-product-cat-content" key={id}>
          <Link href={`/catalogue/${id}/detail`}>

            <div className="item-image">
              <Image
                width={330}
                height={300}
                src={foto.at(0)?.fotoURL!}
                alt={foto.at(0)?.fotoALT!}
              />
            </div>
          </Link>
          <div className="product-cat-content-info">
            <h2 className="item-title">
                <Link href={`/catalogue/${id}/detail`}>{name}</Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
