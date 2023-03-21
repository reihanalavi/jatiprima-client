import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { NumericFormat } from 'react-number-format';

interface SearchSidebarItemsProps {
    item: any;
  }

export default function SearchSidebarItems(props: SearchSidebarItemsProps) {
    const { item } = props
  return (
    <>
    <li className="item-search d-inline-block p-2" key={item._id}>
        <Link className="item-image" href={`/catalogue/${item._id}/detail`}>
          <Image
            alt={item.foto?.at(0)?.fotoALT!}
            className="pull-left"
            width={100}
            height={100}
            src={item.foto?.at(0)?.fotoURL!}
          />
        </Link>
        <div className="item-content">
          <Link href={`/catalogue/${item._id}/detail`} title={item.name as any}>
            <span>{item.name}</span>
          </Link>
          <div className="price">
            <NumericFormat
              value={parseInt(item?.price!)}
              displayType="text"
              prefix="$"
              thousandSeparator=","
              decimalSeparator="."
            />
          </div>
        </div>
      </li>
      </>
  )
}
