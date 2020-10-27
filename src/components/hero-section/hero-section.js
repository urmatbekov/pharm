import React, {Component} from 'react';
import HeroItem from "./hero-item";
import HeroCategories from "./hero-categories";
import HeroSearch from "./hero-search";

class HeroSection extends Component {
    render() {
        const normal = this.props['normal']

        return (
            <section className={"hero " + (normal ? "hero-normal" : '')}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <HeroCategories/>
                        </div>
                        <div className="col-lg-9">
                            <HeroSearch/>
                            {!normal && <HeroItem/>}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HeroSection;