import React, {Component} from 'react';
import Header from "../header";
import HeroSection from "../hero-section";
import ContactSection from "./contact-section";
import FooterSection from "../footer-section/footer-section";

class Contact extends Component {
    render() {
        return (
            <div>
                <Header/>
                <HeroSection normal/>
                <ContactSection/>
                <FooterSection/>
            </div>
        );
    }
}

export default Contact;