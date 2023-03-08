// import '@/styles//libs/bootstrap/css/bootstrap.min.css'
import '@/styles/libs/icomoon-font/css/icomoon.css'
import '@/styles/libs/font-awesome/css/font-awesome.css'
import '@/styles/libs/wpbingofont/css/wpbingofont.css'
import '@/styles/libs/elegant-icons/css/elegant.css'
import '@/styles/libs/slick/css/slick.css'
import '@/styles/libs/slick/css/slick-theme.css'
import '@/styles/libs/mmenu/css/mmenu.min.css'
import '@/styles/app.css'
import '@/styles/responsive.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Helmet } from 'react-helmet'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>

      <Head>
        
      <meta charSet="UTF-8" />
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
     <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>

      {/* <!-- Dependency Scripts --> */}
      

      <Component {...pageProps}/>
      {/* <!-- Site Scripts --> */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossOrigin="anonymous"/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js" integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ==" crossOrigin="anonymous"/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/6.1.0/jquery.mmenu.all.js"/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.countdown/2.2.0/jquery.countdown.min.js" integrity="sha512-lteuRD+aUENrZPTXWFRPTBcDDxIGWe5uu0apPEn+3ZKYDwDaEErIK9rvR0QzUGmUQ55KFE2RqGTVoZsKctGMVw==" crossOrigin="anonymous"/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.smartmenus/1.2.1/jquery.smartmenus.min.js" integrity="sha512-l41a9t1Irxj+b01Af26sz1sD3u+xChHXYsGErFqK2R4ECNn6Vr4k/DoNsxwwnM8aN7nz11ym6rf6Wm3B9ureAg==" crossOrigin="anonymous" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js" integrity="sha512-2rNj2KJ+D8s1ceNasTIex6z4HWyOnEYLVC3FigGOmyQCZc2eBXKgOxQmo3oKLHyfcj53uz4QMsRCWNbLd32Q1g==" crossOrigin="anonymous"/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==" crossOrigin="anonymous"/>
      
      {/* <script src="/js/app.js"/> */}
    </>
  )
}
