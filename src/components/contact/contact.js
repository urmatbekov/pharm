import React, {Component} from 'react';
import Header from "../header";
import HeroSection from "../hero-section";
import ContactSection from "./contact-section";
import Footer from "../footer/footer";

class Contact extends Component {
    render() {
        return (
            <div>
                <Header/>
                <HeroSection normal/>
                <ContactSection/>
                <Footer/>
            </div>
        );
    }
}

export default Contact;