import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
  mobile?: boolean
}

export default function Logo(props: LogoProps) {
  const {mobile} = props
  return (
    <>
      <div className="site-logo">
        <Link href='/'>
          <Image
            width={mobile ? 30 : 50}
            height={mobile ? 15 : 50}
            src="/media/jp_logo.png"
            alt="Jati Prima Furniture"
          />
        </Link>
      </div>
    </>
  );
}
