import React, {Component} from 'react';

class ItemPic extends Component {
    render() {
        const image = this.props.image

        return (
            <div className="featured__item__pic set-bg"
                 style={{backgroundImage: `url(${image})`}}>
                <ul className="featured__item__pic__hover">
                    <li><a href="#"><i className="fa fa-heart"/></a></li>
                    <li><a href="#"><i className="fa fa-retweet"/></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"/></a></li>
                </ul>
            </div>
        );
    }
}

export default ItemPic;