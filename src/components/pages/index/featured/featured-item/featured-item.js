import React, {Component} from 'react';
import ItemPic from "./item-pic";

class FeaturedItem extends Component {
    render() {
        const {mix, item} = this.props
        return (
            <div ref={mix.ref} style={mix.style}
                 className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                <div className="featured__item">
                    <ItemPic image={item.image}/>
                    <div className="featured__item__text">
                        <h6><a href="#">{item.title}</a></h6>
                        <h5>{'$'}{item.price}</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedItem;