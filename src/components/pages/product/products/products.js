import React from "react";
import OwlCarousel from "react-owl-carousel";

const owlCarousel = {
    loop: true,
    margin: 0,
    items: 3,
    dots: true,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {

        320: {
            items: 1,
        },

        480: {
            items: 2,
        },

        768: {
            items: 2,
        },

        992: {
            items: 3,
        }
    }
}

const Products = () => {
    return (
        <section className="product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-5">
                        <div className="sidebar">
                            <div className="sidebar__item">
                                <h4>Department</h4>
                                <ul>
                                    <li><a href="#">Fresh Meat</a></li>
                                    <li><a href="#">Vegetables</a></li>
                                    <li><a href="#">Fruit & Nut Gifts</a></li>
                                    <li><a href="#">Fresh Berries</a></li>
                                    <li><a href="#">Ocean Foods</a></li>
                                    <li><a href="#">Butter & Eggs</a></li>
                                    <li><a href="#">Fastfood</a></li>
                                    <li><a href="#">Fresh Onion</a></li>
                                    <li><a href="#">Papayaya & Crisps</a></li>
                                    <li><a href="#">Oatmeal</a></li>
                                </ul>
                            </div>
                            <div className="sidebar__item">
                                <h4>Price</h4>
                                <div className="price-range-wrap">
                                    <div
                                        className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                        data-min="10" data-max="540">
                                        <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                                        <span tabIndex="0"
                                              className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                        <span tabIndex="0"
                                              className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                    </div>
                                    <div className="range-slider">
                                        <div className="price-input">
                                            <input type="text" id="minamount"/>
                                            <input type="text" id="maxamount"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-7">
                        <div className="product__discount">
                            <div className="section-title product__discount__title">
                                <h2>Sale Off</h2>
                            </div>
                            <div className="row">
                                <OwlCarousel {...owlCarousel} className="product__discount__slider owl-carousel">
                                    <div className="col-lg-4">
                                        <div className="product__discount__item">
                                            <div className="product__discount__item__pic set-bg"
                                                 style={{backgroundImage: `url(/img/latest-product/pd-1.jpg)`}}>
                                                <div className="product__discount__percent">-20%</div>
                                                <ul className="product__item__pic__hover">
                                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="product__discount__item__text">
                                                <span>Dried Fruit</span>
                                                <h5><a href="#">Raisin’n’nuts</a></h5>
                                                <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="product__discount__item">
                                            <div className="product__discount__item__pic set-bg"
                                                 style={{backgroundImage: `url(/img/latest-product/lp-3.jpg)`}}>
                                                <div className="product__discount__percent">-20%</div>
                                                <ul className="product__item__pic__hover">
                                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="product__discount__item__text">
                                                <span>Vegetables</span>
                                                <h5><a href="#">Vegetables’package</a></h5>
                                                <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="product__discount__item">
                                            <div className="product__discount__item__pic set-bg"
                                                 style={{backgroundImage: `url(/img/latest-product/pd-3.jpg)`}}>
                                                <div className="product__discount__percent">-20%</div>
                                                <ul className="product__item__pic__hover">
                                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="product__discount__item__text">
                                                <span>Dried Fruit</span>
                                                <h5><a href="#">Mixed Fruitss</a></h5>
                                                <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="product__discount__item">
                                            <div className="product__discount__item__pic set-bg"
                                                 style={{backgroundImage: `url(/img/latest-product/pd-4.jpg)`}}>
                                                <div className="product__discount__percent">-20%</div>
                                                <ul className="product__item__pic__hover">
                                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="product__discount__item__text">
                                                <span>Dried Fruit</span>
                                                <h5><a href="#">Raisin’n’nuts</a></h5>
                                                <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="product__discount__item">
                                            <div className="product__discount__item__pic set-bg"
                                                 style={{backgroundImage: `url(/img/latest-product/pd-5.jpg)`}}>
                                                <div className="product__discount__percent">-20%</div>
                                                <ul className="product__item__pic__hover">
                                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="product__discount__item__text">
                                                <span>Dried Fruit</span>
                                                <h5><a href="#">Raisin’n’nuts</a></h5>
                                                <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="product__discount__item">
                                            <div className="product__discount__item__pic set-bg"
                                                 style={{backgroundImage: `url(/img/latest-product/pd-6.jpg)`}}>
                                                <div className="product__discount__percent">-20%</div>
                                                <ul className="product__item__pic__hover">
                                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="product__discount__item__text">
                                                <span>Dried Fruit</span>
                                                <h5><a href="#">Raisin’n’nuts</a></h5>
                                                <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                        <div className="filter__item">
                            <div className="row">
                                <div className="col-lg-4 col-md-5">
                                    <div className="filter__sort">
                                        <span>Sort By</span>
                                        <select>
                                            <option value="0">Default</option>
                                            <option value="0">Default</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="filter__found">
                                        <h6><span>16</span> Products found</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-3">
                                    <div className="filter__option">
                                        <span className="icon_grid-2x2"></span>
                                        <span className="icon_ul"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" style={{backgroundImage: `url(/img/product/product-1.jpg)`}}>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" style={{backgroundImage: `url(/img/product/product-2.jpg)`}}>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" style={{backgroundImage: `url(/img/product/product-3.jpg)`}}>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" style={{backgroundImage: `url(/img/product/product-4.jpg)`}}>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" style={{backgroundImage: `url(/img/product/product-5.jpg)`}}>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" style={{backgroundImage: `url(/img/product/product-6.jpg)`}}>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" style={{backgroundImage: `url(/img/product/product-7.jpg)`}}>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" style={{backgroundImage: `url(/img/product/product-8.jpg)`}}>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" style={{backgroundImage: `url(/img/product/product-9.jpg)`}}>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" style={{backgroundImage: `url(/img/product/product-10.jpg)`}}>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" style={{backgroundImage: `url(/img/product/product-11.jpg)`}}>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" style={{backgroundImage: `url(/img/product/product-12.jpg)`}}>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product__pagination">
                            <a href="#">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#"><i className="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Products;