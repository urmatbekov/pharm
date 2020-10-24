import React, {Component} from 'react';
import UseScript from "../../hooks/use-script";
import FooterSection from "../../footer-section/footer-section";
import Header from "../../header";
import HeroSection from "../../hero-section";
import GridSections from "./grid-section";
import ProductSection from "./product-section";


class Products extends Component {
    render() {
        return (
            <div>
                <Header/>
                <HeroSection normal/>
                <GridSections/>
                <ProductSection/>
                <FooterSection/>
                <UseScript url="/js/main.js"/>
            </div>
        );
    }
}

export default Products;