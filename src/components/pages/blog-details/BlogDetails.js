import React, {Component} from 'react';
import UseScript from "../../hooks/use-script";
import FooterSection from "../../footer-section/footer-section";
import Header from "../../header";
import HeroSection from "../../hero-section";
import BlogDetailsHero from "./blog-details-hero/blog-details-hero";
import BlogDetailsSection from "./blog-details-section/blog-details-section";
import BlogDetailsSelection from "./blog-details-selection/blog-details-selection";



class BlogDetails extends Component {
    render() {
        return (
            <div>
                <Header/>
                <HeroSection normal/>
                <BlogDetailsHero/>
                <BlogDetailsSelection/>
                <BlogDetailsSection/>
                <FooterSection/>
                <UseScript url="/js/main.js"/>
            </div>
        );
    }
}

export default BlogDetails;