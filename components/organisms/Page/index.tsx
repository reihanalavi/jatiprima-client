import { getHome } from '@/services/apiservice';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react'
import Collection from "../Collection";
import Etalase from "../Etalase";
import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";
import Idea from "../Idea";
import Keys from "../Keys";
import Sale from "../Sale";
import Shop from "../Shop";
import Subscribe from "../Subscribe";
import Testimoni from "../Testimoni";
import Trend from "../Trend";

export default function Page() {

  const [catalogues, setCatalogues] = useState([])
  const [categories, setCategories] = useState([])
  const [testimonies, setTestimonies] = useState([])

  const getHomeObject = useCallback(async() => {
    const data = await getHome()
    setCatalogues(data.catalogues)
    setCategories(data.categories)
    setTestimonies(data.testimonies)
  }, [])

  const menus = [
    {
      name: "Home",
      hasChildren: false,
      link: "/",
      active: true
    },
    {
      name: "Catalogues",
      hasChildren: false,
      link: "/catalogues",
    },
    {
      name: "Contact",
      hasChildren: false,
      link: "/contact"
    },
  ];

  useEffect(() => {
    getHomeObject()
  }, [])

  return (
    <>
      <section id="page" className="hfeed page-wrapper">
        <Header menus={menus} />

        <div id="site-main" className="site-main">
          <div id="main-content" className="main-content">
            <div id="primary" className="content-area">
              <div id="content" className="site-content" role="main">
                <Keys />

                <Hero />

                <Sale item={catalogues} />

                {/* <Trend /> */}

                {/* <Shop /> */}

                <Collection item={categories} />

                <Etalase item={catalogues} />

                {/* <Idea /> */}

                <Testimoni item={testimonies} />

                {/* <Subscribe /> */}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}
