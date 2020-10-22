import React, {Component} from 'react';
import ReactMixitup from 'react-mixitup'

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
        return this.state.items.filter(({category}) => category.includes(this.state.category)).map(({id})=>id)
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
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Featured Product</h2>
                            </div>
                            <div className="featured__controls">
                                <ul>
                                    <li onClick={this.setCategory("active")}>All</li>
                                    <li onClick={this.setCategory("oranges")}>Oranges</li>
                                    <li onClick={this.setCategory("fresh-meat")}>Fresh Meat</li>
                                    <li onClick={this.setCategory("vegetables")}>Vegetables</li>
                                    <li onClick={this.setCategory("fastfood")}>Fastfood</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <ReactMixitup
                        items={this.getItems()}
                        renderCells={(MItems) => (
                            <div className="row featured__filter">
                                {MItems.map(({key,ref,style}) => {
                                    const item = this.state.items.find(({id})=>id==key)
                                    return (
                                        <div key={key} ref={ref} style={style} className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                                            <div className="featured__item">

                                                <div className="featured__item__pic set-bg" data-setbg={item.image}>
                                                    <ul className="featured__item__pic__hover">
                                                        <li><a href="#"><i className="fa fa-heart">
                                                        </i></a></li>
                                                        <li><a href="#"><i className="fa fa-retweet">
                                                        </i></a></li>
                                                        <li><a href="#"><i className="fa fa-shopping-cart">
                                                        </i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="featured__item__text">
                                                    <h6><a href="#">{item.title}</a></h6>
                                                    <h5>{'$'}{item.price}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    )})}
                            </div>)}
                    />

                </div>
            </section>
        );
    }
}

export default Featured;