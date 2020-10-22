import React, {Component} from 'react';

class HeroItem extends Component {
    render() {
        return (
            <div className="hero__item set-bg" style={{backgroundImage:"url(img/hero/banner.jpg)"}}>
                <div className="hero__text">
                    <span>FRUIT FRESH</span>
                    <h2>Vegetable <br/>100% Organic</h2>
                    <p>Free Pickup and Delivery Available</p>
                    <a href="#" className="primary-btn">SHOP NOW</a>
                </div>
            </div>
        );
    }
}

export default HeroItem;