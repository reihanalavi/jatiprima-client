import React, { useEffect, useState } from "react";
import cx from "classnames";
import Link from "next/link";

interface MenuItemProps {
  hasChildren?: boolean;
  active?: boolean;
  submenu?: SubMenuType[];
  fullwidth?: boolean;
  center?: boolean;
  name: string;
  mobile?: boolean;
  mobileHead?: boolean;
  ariaHidden: boolean;
  setAriaHidden: any;
  statusHome: boolean;
  setStatusHome: any;
  statusCatalog: boolean;
  setStatusCatalog: any;
  link?: string
}

export interface SubMenuType {
  name?: string;
  values?: SubMenuValue[];
}

export interface SubMenuValue {
  menu?: string;
  link: string;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const {
    hasChildren,
    active,
    submenu,
    fullwidth,
    center,
    mobile,
    name,
    mobileHead,
    ariaHidden,
    setAriaHidden,
    statusHome,
    setStatusHome,
    statusCatalog,
    setStatusCatalog,
    link
  } = props;

  const divClass = cx({
    "sub-menu mm-panel mm-hasnavbar": true,
    "mm-hidden-Home": statusHome === true && name === "Home",
    "mm-hidden-Catalog": statusCatalog === true && name === "Catalog",
    "mm-opened-Home": statusHome === false && name === "Home",
    "mm-opened-Catalog": statusCatalog === false && name === "Catalog",
  });

  const desktopClass = cx({
    "row": true,
    "row-mobile": mobile
  })

  const classNames = cx({
    "level-0 menu-item mega-menu": true,
    "menu-item-has-children": hasChildren,
    "current-menu-item": active,
    "mega-menu-fullwidth": fullwidth,
    "align-center": center,
  });

  useEffect(() => {
  }, [statusHome, statusCatalog, ariaHidden]);

  if (mobile) {
    if (mobileHead) {
      return (
        <>
          <div className={divClass} key={`mm-${name}`}>
              <div className="mm-navbar">
                <a
                  className="mm-btn mm-prev"
                  href={`#mm-${name}`}
                  key={`mm-${name}`}
                  id={`mm-${name}`}
                  aria-owns={`mm-${name}`}
                  aria-haspopup="true"
                  onClick={() => {
                    if (name === "Home") {
                      setStatusHome(true)
                    } else if (name === "Catalog") {
                      setStatusCatalog(true)
                    }
                    setAriaHidden(true);
                  }}
                >
                  <span className="mm-sronly">Close submenu ({name})</span>
                </a>
                <a
                  className="mm-title"
                  href={`#mm-${name}`}
                  aria-hidden={ariaHidden}
                >
                  {name}
                </a>
              </div>
              <div className={desktopClass} key={name}>
                {submenu?.map((item: SubMenuType) => (
                  <div className="col-md-6">
                    <div className="menu-section">
                      {/* <h2 className="sub-menu-title">{item.name}</h2> */}
                      <ul className="menu-list">
                        {item.values?.map((item: SubMenuValue) => (
                          <li key={item.menu}>
                            <Link href={item.link}>
                              <span className="menu-item-text">
                                {item.menu}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </>
      );
    } else {
      if (hasChildren) {
        return (
          <>
            <li className={classNames}>
              <a
                key={`mm-${name}`}
                className="mm-next"
                href={`#mm-${name}`}
                aria-owns={`mm-${name}`}
                aria-hidden={ariaHidden}
                onClick={() => {
                  if (name === "Home") {
                    setStatusHome(false)
                  } else if (name === "Catalog") {
                    setStatusCatalog(false)
                  }
                  setAriaHidden(true);
                }}
                aria-haspopup="true"
              ></a>
              <Link href={link || '/'}>
                <span className="menu-item-text">{name}</span>
              </Link>
            </li>
          </>
        );
      } else {
        return (
          <>
            <li className={classNames}>
              <Link href={link || '/'}>
                <span className="menu-item-text">{name}</span>
              </Link>
            </li>
          </>
        );
      }
    }
  } else {
    if (hasChildren) {
      return (
        <>
          <li className={classNames} key={name}>
            <Link href={link || '/'}>
              <span className="menu-item-text">{name}</span>
            </Link>
            <div className="sub-menu">
              <div className={desktopClass}>
                {submenu?.map((item: SubMenuType) => (
                  <div className="col-md-6">
                    <div className="menu-section">
                      <h2 className="sub-menu-title">{item.name}</h2>
                      <ul className="menu-list">
                        {item.values?.map((item: SubMenuValue) => (
                          <li key={item.menu}>
                            <Link href={item.link}>
                              <span className="menu-item-text">
                                {item.menu}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className={classNames} key={name}>
            <Link href={link || ''}>
              <span className="menu-item-text">{name}</span>
            </Link>
          </li>
        </>
      );
    }
  }
}
