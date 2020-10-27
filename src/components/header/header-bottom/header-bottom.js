import React, {Component} from 'react';
import Logo from "./logo";
import Navbar from "./navbar";
import HeaderCart from "./header-cart";

class HeaderBottom extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Logo/>
                    </div>
                    <div className="col-lg-6">
                        <Navbar/>
                    </div>
                    <div className="col-lg-3">
                        <HeaderCart/>
                    </div>
                </div>
                <div className="humberger__open">
                    <i className="fa fa-bars"/>
                </div>
            </div>
        );
    }
}

export default HeaderBottom;