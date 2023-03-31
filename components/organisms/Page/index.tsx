import { getHome } from '@/services/apiservice';
import React, { useCallback, useEffect, useState } from 'react'
import About from '../About';
import Collection from "../Collection";
import Etalase from "../Etalase";
import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";
import Keys from "../Keys";
import Sale from "../Sale";
import Testimoni from "../Testimoni";

export default function Page() {

  const [catalogues, setCatalogues] = useState([])
  const [categories, setCategories] = useState([])
  const [arrivals, setArrivals] = useState([])
  const [testimonies, setTestimonies] = useState([])
  const [numArrival, setNumArrival] = useState(0)

  const getHomeObject = useCallback(async() => {
    const data = await getHome()
    setCatalogues(data.catalogues)
    setCategories(data.categories)
    setTestimonies(data.testimonies)

    
  }, [])

  useEffect(() => {
    setArrivals([])
    catalogues.map((item: any) => (
      (item.arrival ? arrivals.push(item as never) : '')
    ))

    setNumArrival(arrivals.length)
    console.log("ARRIVALS : ", arrivals)
    console.log("ARRIVALS LENGTH : ", numArrival)
  }, [catalogues])

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

                {(arrivals && numArrival >= 1 ? <Sale item={catalogues}/> : '')}

                {/* <Collection item={categories} /> */}
                <About/>

                <Etalase mobile item={catalogues} />
                <Etalase item={catalogues} />

                <Testimoni item={testimonies} />

              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}
