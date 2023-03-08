import BackToTop from '@/components/molecules/Back To Top'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import Search from '@/components/organisms/Search'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {

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

  return (
    <>
    <Head>
    <title>Jati Prima Furniture</title>
    <meta name="description" content="Best furniture mebel from Jepara" />
    <meta name="og:title" content="Jati Prima Furniture" />
    <meta name="og:image" content="/media/hero_jp.jpeg" />
    <meta name="og:url" content="https://jatiprimafurniture.com/" />
    </Head>

    <body className="page">
		<div id="page" className="hfeed page-wrapper">
            <Header menus={menus} />

			<div id="site-main" className="site-main">
				<div id="main-content" className="main-content">
					<div id="primary" className="content-area">
						<div id="content" className="site-content" role="main">
							<div className="section-padding">
								<div className="section-container p-l-r">
									<div className="page-404">
										<div className="content-page-404">
											<div className="title-error">
												404		
											</div>
											<div className="sub-title">
												Oops! That page can't be found.		
											</div>
											<div className="sub-error">
												We're really sorry but we can't seem to find the page you were looking for.		
											</div>
											<Link className="button" href="/">
												Back The Homepage		
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
                        {/* <!-- #content --> */}
					</div>
                    {/* <!-- #primary --> */}
				</div>
                {/* <!-- #main-content --> */}
			</div>

			<Footer />

        <BackToTop />

        <Search />
		</div>


	</body>
    </>
  )
}
