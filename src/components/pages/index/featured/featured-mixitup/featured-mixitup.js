import React, {Component} from 'react';
import FeaturedItem from "../featured-item";
import ReactMixitup from "react-mixitup";

class FeaturedMixitup extends Component {
    render() {
        const {items,itemsState} = this.props
        return (
            <ReactMixitup
                items={items}
                renderCells={(items) => (
                    <div className="row featured__filter">
                        {items.map(({key, ref, style}) => {
                            const item = itemsState.find(({id}) => id === +key)
                            return <FeaturedItem key={key} mix={{ref, style}} item={item}/>
                        })}
                    </div>)}/>
        );
    }
}

export default FeaturedMixitup;