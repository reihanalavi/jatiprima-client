import Image from 'next/image'
import React from 'react'

export default function Idea() {
  return (
    <>
    <section className="section section-padding background-10 p-t-70 p-b-70 m-b-70">
        <div className="section-container">
            {/* <!-- Block Posts --> */}
            <div className="block block-posts layout-2 white-bg">
            <div className="block-widget-wrap">
                <div className="block-title"><h2>Style Ideas</h2></div>
                <div className="block-content">
                <div className="posts-wrap slick-wrap">
                    <div className="slick-sliders" data-slidestoscroll="true" data-dots="0" data-nav="1" data-columns4="1" data-columns3="2" data-columns2="2" data-columns1="3" data-columns="3">
                    <div className="post-grid post">	
                        <div className="post-inner">
                        <div className="post-image">
                            <a className="post-thumbnail" href="blog-details-right.html">
                            <Image width={720} height={484} src="/media/blog/1.jpg" alt="Easy Fixes for Home Decor"/>
                            </a>
                        </div>
                        <div className="post-content">
                            <div className="post-categories">
                            <a href="blog-grid-right.html">Furniture</a>
                            </div>
                            <h2 className="post-title">
                            <a href="blog-details-right.html">Easy Fixes for Home Decor</a>
                            </h2>
                            <div className="btn-read-more">
                            <a className="read-more btn-underline center" href="blog-details-right.html">Read more</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="post-grid post">	
                        <div className="post-inner">
                        <div className="post-image">
                            <a className="post-thumbnail" href="blog-details-right.html">
                            <Image width={720} height={484} src="/media/blog/2.jpg" alt="How to Make your Home a Showplace"/>
                            </a>
                        </div>
                        <div className="post-content">
                            <div className="post-categories">
                            <a href="blog-grid-right.html">Home Decor</a>
                            </div>
                            <h2 className="post-title">
                            <a href="blog-details-right.html">How to Make your Home a Showplace</a>
                            </h2>
                            <div className="btn-read-more">
                            <a className="read-more btn-underline center" href="blog-details-right.html">Read more</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="post-grid post">	
                        <div className="post-inner">
                        <div className="post-image">
                            <a className="post-thumbnail" href="blog-details-right.html">
                            <Image width={720} height={484} src="/media/blog/3.jpg" alt="Stunning Furniture with Aesthetic Appeal"/>
                            </a>
                        </div>
                        <div className="post-content">
                            <div className="post-categories">
                            <a href="blog-grid-right.html">Life Style</a>
                            </div>
                            <h2 className="post-title">
                            <a href="blog-details-right.html">Stunning Furniture with Aesthetic Appeal</a>
                            </h2>
                            <div className="btn-read-more">
                            <a className="read-more btn-underline center" href="blog-details-right.html">Read more</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="post-grid post">	
                        <div className="post-inner">
                        <div className="post-image">
                            <a className="post-thumbnail" href="blog-details-right.html">
                            <Image width={720} height={484} src="/media/blog/4.jpg" alt="How to Choose the Right Sectional Sofa"/>
                            </a>
                        </div>
                        <div className="post-content">
                            <div className="post-categories">
                            <a href="blog-grid-right.html">Office</a>
                            </div>
                            <h2 className="post-title">
                            <a href="blog-details-right.html">How to Choose the Right Sectional Sofa</a>
                            </h2>
                            <div className="btn-read-more">
                            <a className="read-more btn-underline center" href="blog-details-right.html">Read more</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </> 
  )
}
