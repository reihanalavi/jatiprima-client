import { EtalaseItemProps } from '@/services/data-types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NumericFormat } from 'react-number-format'

export default function CatalogueSliderItems(props: EtalaseItemProps) {
    const {id, name, foto, price, arrival} = props

  return (
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
        <div className="items">
          <div className="products-entry clearfix product-wapper">
            <div className="products-thumb">
              <div className="product-lable">
                {arrival ? 
                  <div className="hot">New Arrival</div>
                : ''}
              </div>
              <div className="product-thumb-hover">
                <Link href={`/catalogue/${id}/detail`}>
                  <Image
                    width={600}
                    height={600}
                    src={foto?.at(0)?.fotoURL!}
                    className="post-image"
                    alt={foto?.at(0)?.fotoALT!}
                  />
                </Link>
              </div>
            </div>
            <div className="products-content">
              <div className="contents text-center">
                <h3 className="product-title">
                  <Link href={`/catalogue/${id}/detail`}>{name}</Link>
                </h3>
                <span className="price">
                  <NumericFormat value={parseInt(price)} displayType='text' prefix='Rp ' thousandSeparator=',' decimalSeparator='.'/>
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
