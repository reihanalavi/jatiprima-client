import Image from "next/image";
import React from "react";

interface LogoProps {
  mobile?: boolean
}

export default function Logo(props: LogoProps) {
  const {mobile} = props
  return (
    <>
      <div className="site-logo">
        <a href='/'>
          <Image
            width={mobile ? 50 : 20}
            height={mobile ? 15 : 50}
            src="/media/jp_logo.png"
            alt="Jati Prima Furniture"
          />
        </a>
      </div>
    </>
  );
}
