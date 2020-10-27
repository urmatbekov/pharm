import React, {Component} from 'react';

class HeaderContact extends Component {
    render() {
        return (
            <div className="header__top__left">
                <ul>
                    <li><i className="fa fa-envelope"/> hello@colorlib.com</li>
                    <li>Free Shipping for all Order of $99</li>
                </ul>
            </div>
        );
    }
}

export default HeaderContact;