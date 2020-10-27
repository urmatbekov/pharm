import React, {Component} from 'react';
import HeaderContact from "./header-contact";
import HeaderSocial from "./header-social";
import HeaderLanguage from "./header-language";
import HeaderAuth from "./header-auth";

class HeaderTop extends Component {
    render() {
        return (
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <HeaderContact/>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__right">
                                <HeaderSocial/>
                                <HeaderLanguage/>
                                <HeaderAuth/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderTop;