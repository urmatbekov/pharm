import React, {Component} from 'react';

class HeaderLanguage extends Component {
    render() {
        return (
            <div className="header__top__right__language">
                <img src="/img/language.png" alt=""/>
                <div>English</div>
                <span className="arrow_carrot-down">

                                            </span>
                <ul>
                    <li><a href="#">Spanis</a></li>
                    <li><a href="#">English</a></li>
                </ul>
            </div>
        );
    }
}

export default HeaderLanguage;