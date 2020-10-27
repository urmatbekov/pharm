import React, {Component} from 'react';

class FeaturedHeader extends Component {
    render() {
        const setCategory = this.props.setCategory
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Featured Product</h2>
                    </div>
                    <div className="featured__controls">
                        <ul>
                            <li onClick={setCategory("active")}>All</li>
                            <li onClick={setCategory("oranges")}>Oranges</li>
                            <li onClick={setCategory("fresh-meat")}>Fresh Meat</li>
                            <li onClick={setCategory("vegetables")}>Vegetables</li>
                            <li onClick={setCategory("fastfood")}>Fastfood</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedHeader;