import React, {Component} from 'react';
import HeroSection from "../../hero-section";
import HeroCategories from "./hero-categories";
import UseScript from "../../hooks/use-script";
import Featured from "./featured";
import Footer from "../../footer/footer";
import Header from "../../header";

class IndexPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <HeroSection/>
                <HeroCategories/>
                <Featured/>
                <Footer/>
                <UseScript url="/js/main.js"/>
            </div>
        );
    }
}

export default IndexPage;