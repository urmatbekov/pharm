import React, {Component} from 'react';
import FeaturedHeader from "./featured-header/featured-header";
import FeaturedMixitup from "./featured-mixitup/featured-mixitup";

class Featured extends Component {

    state = {
        category: 'active',
        items: [
            {
                id: 1,
                price: 30.00,
                title: "Crab Pool Security",
                image: "/img/featured/feature-1.jpg",
                category: ['active', "oranges"]
            }, {
                id: 2,
                price: 30.00,
                title: "Crab Pool Security",
                image: "/img/featured/feature-1.jpg",
                category: ['active', "vegetables"]
            }, {
                id: 3,
                price: 30.00,
                title: "Crab Pool Security",
                image: "/img/featured/feature-1.jpg",
                category: ['active', "oranges", "vegetables"]
            }, {
                id: 4,
                price: 30.00,
                title: "Crab Pool Security",
                image: "/img/featured/feature-1.jpg",
                category: ['active', "fresh-meat", "fastfood"]
            }, {
                id: 5,
                price: 30.00,
                title: "Crab Pool Security",
                image: "/img/featured/feature-1.jpg",
                category: ['active', "oranges", "vegetables"]
            }, {
                id: 6,
                price: 30.00,
                title: "Crab Pool Security",
                image: "/img/featured/feature-1.jpg",
                category: ['active', "fresh-meat", "fastfood"]
            }, {
                id: 7,
                price: 30.00,
                title: "Crab Pool Security",
                image: "/img/featured/feature-1.jpg",
                category: ['active', "oranges", "vegetables"]
            }, {
                id: 8,
                price: 30.00,
                title: "Crab Pool Security",
                image: "/img/featured/feature-1.jpg",
                category: ['active', "fresh-meat", "fastfood"]
            },

        ]
    }

    getItems = () => {
        const state = this.state;
        const items = state.items.filter(({category}) => category.includes(state.category));
        return items.map(item => item.id)

    }

    setCategory = (category) => () => {
        this.setState({
            category
        })
    }

    render() {
        return (
            <section className="featured spad">
                <div className="container">
                    <FeaturedHeader setCategory={this.setCategory}/>
                    <FeaturedMixitup items={this.getItems()} itemsState = {this.state.items}/>
                </div>
            </section>
        );
    }
}

export default Featured;