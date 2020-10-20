import React, {Component} from 'react';
import HeroSection from "./hero-section";
import HeroCategories from "./hero-categories";
import UseScript from "../../hooks/use-script";
import Featured from "./featured";

class Index extends Component {
    render() {
        return (
            <div>
                <HeroSection/>
                <HeroCategories/>
                <Featured/>
                <UseScript url="/js/main.js"/>
            </div>
        );
    }
}

export default Index;