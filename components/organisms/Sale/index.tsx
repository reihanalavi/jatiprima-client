import React, { useEffect } from "react";
import Image from "next/image";
import SaleItem from "@/components/molecules/SaleItem";
import { FotoCatalogueTypes, SaleTypes } from "@/services/data-types";

interface SaleProps {
  item: SaleTypes[];
}

export default function Sale(props: SaleProps) {
  const { item } = props;

  return (
    <>
      <section className="section section-padding m-b-0 p-t-70 p-b-70">
        <div className="section-container">
          {/* <!-- Block Product Categories --> */}
          <div className="block block-product-cats layout-4">
            <div className="block-widget-wrap">
            <div className="block-title" style={{textAlign: "center", marginBottom: 80}}>
                <h2>New Arrivals</h2>
              </div>
              <div className="block-content">
                <div className="product-cats-list">
                  <div className="row" style={{textAlign: "center"}}>
                    {item.map((item: SaleTypes) => (
                      item.arrival ? 
                        <SaleItem
                          id={item._id}
                          name={item.name}
                          foto={item.foto}
                        />
                        : ''
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
