import React from 'react'

export default function Search() {
  return (
    <>
    {/* <!-- Search --> */}
    <section className="search-overlay">
        <div className="close-search"></div>
        <div className="wrapper-search">
        <form role="search" method="get" className="search-from ajax-search" action="">
            <div className="search-box">
            <button id="searchsubmit" className="btn" type="submit">
                <i className="icon-search"></i>
            </button>
            <input id="myInput" type="text" autoComplete="off" name="s" className="input-search s" placeholder="Search..."/>
            <div className="search-top">
                <div className="close-search">Cancel</div>
            </div>
            <div className="content-menu_search">
                <label>Suggested</label>
                <ul id="menu_search" className="menu">
                <li><a href="#">Furniture</a></li>
                <li><a href="#">Home Décor</a></li>
                <li><a href="#">Industrial</a></li>
                <li><a href="#">Kitchen</a></li>
                </ul>			
            </div>
            </div>
        </form>	
        </div>	
    </section>
    </>
  )
}
