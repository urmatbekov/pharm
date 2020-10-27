import React, {Component} from 'react';
import HeroSection from "../../hero-section";
import SliderCategories from "./slider-categories";
import UseScript from "../../hooks/use-script";
import Featured from "./featured";
import FooterSection from "../../footer-section/footer-section";
import Header from "../../header";

class Index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <HeroSection/>
                <SliderCategories/>
                <Featured/>
                <FooterSection/>
                <UseScript url="/js/main.js"/>
            </div>
        );
    }
}

export default Index;