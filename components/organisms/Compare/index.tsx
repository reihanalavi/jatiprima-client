import Image from 'next/image'
import React from 'react'

export default function Compare() {
  return (
    <>
    {/* <!-- Compare --> */}
    <section className="compare-popup">
        <div className="compare-popup-inner">
            <div className="compare-table">
                <div className="compare-table-inner">
                        <a href="#" id="compare-table-close" className="compare-table-close">
                        <span className="compare-table-close-icon"></span>
                        </a>
                        <div className="compare-table-items">
                        <table id="product-table" className="product-table">
                            <thead>
                            <tr>
                                <th>
                                <a href="#" className="compare-table-settings">Settings</a>
                                </th>
                                <th>
                                <a href="shop-details.html">Chair Oak Matt Lacquered</a> <span className="remove">remove</span>
                                </th>
                                <th>
                                <a href="shop-details.html">Zunkel Schwarz</a> <span className="remove">remove</span>
                                </th>
                                <th>
                                <a href="shop-details.html">Namaste Vase</a> <span className="remove">remove</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="tr-image">
                                <td className="td-label">Image</td>
                                <td>
                                <a href="shop-details.html">
                                    <Image width={600} height={600} src="/media/product/3.jpg" alt=""/>
                                </a>
                                </td>
                                <td>
                                <a href="shop-details.html">
                                    <Image width={600} height={600} src="/media/product/1.jpg" alt=""/>
                                </a>
                                </td>
                                <td>
                                <a href="shop-details.html">
                                    <Image width={600} height={600} src="/media/product/2.jpg" alt=""/>
                                </a>
                                </td>
                            </tr>
                            <tr className="tr-sku">
                                <td className="td-label">SKU</td>
                                <td>VN00189</td>
                                <td></td>
                                <td>D1116</td>
                            </tr>
                            <tr className="tr-rating">
                                <td className="td-label">Rating</td>
                                <td>
                                <div className="star-rating">
                                    <span style={{width:'80%'}}></span>
                                </div>
                                </td>
                                <td>
                                <div className="star-rating">
                                <span style={{width:'80%'}}></span>
                                </div>
                                </td>
                                <td></td>
                            </tr>
                            <tr className="tr-price">
                                <td className="td-label">Price</td>
                                <td><span className="amount">$150.00</span></td>
                                <td><del><span className="amount">$150.00</span></del> <ins><span className="amount">$100.00</span></ins></td>
                                <td><span className="amount">$200.00</span></td>
                            </tr>
                            <tr className="tr-add-to-cart">
                                <td className="td-label">Add to cart</td>
                                <td>
                                <div data-title="Add to cart">
                                    <a href="#" className="button">Add to cart</a>
                                </div>
                                </td>
                                <td>
                                <div data-title="Add to cart">
                                    <a href="#" className="button">Add to cart</a>
                                </div>
                                </td>
                                <td>
                                <div data-title="Add to cart">
                                    <a href="#" className="button">Add to cart</a>
                                </div>
                                </td>
                            </tr>
                            <tr className="tr-description">
                                <td className="td-label">Description</td>
                                <td>Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.</td>
                                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</td>
                                <td>The EcoSmart Fleece Hoodie full-zip hooded jacket provides medium weight fleece comfort all year around. Feel better in this sweatshirt because Hanes keeps plastic bottles of landfills by using recycled polyester.7.8 ounce fleece sweatshirt made with up to 5 percent polyester created from recycled plastic.</td>
                            </tr>
                            <tr className="tr-content">
                                <td className="td-label">Content</td>
                                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</td>
                                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</td>
                                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</td>
                            </tr>
                            <tr className="tr-dimensions">
                                <td className="td-label">Dimensions</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
