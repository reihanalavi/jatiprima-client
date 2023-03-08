import React from "react";
import cx from "classnames";

interface ColorItemProps {
  colorCode: String;
  active: boolean;
  onClick: () => any;
}

export default function ColorItem(props: ColorItemProps) {
  const { colorCode, active, onClick } = props;

  const colorActiveClass = cx({
    "color-active": active,
  });

  return (
    <>
      <li>
        <span
          onClick={onClick}
          className={colorActiveClass}
          style={{ backgroundColor: `${colorCode}` }}
        ></span>
      </li>
    </>
  );
}
