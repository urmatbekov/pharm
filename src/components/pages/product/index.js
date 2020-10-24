import React, {Component} from 'react';
import UseScript from "../../hooks/use-script";
import Footer from "../../footer/footer";
import Header from "../../header";
import HeroSection from "../../hero-section";
import Products from "./products";
import Grid from "./grid";


class ProductPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <HeroSection normal/>
                <Grid/>
                <Products/>
                <Footer/>
                <UseScript url="/js/main.js"/>
            </div>
        );
    }
}

export default ProductPage;