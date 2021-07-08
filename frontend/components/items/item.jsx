import React from 'react';
import { Link } from 'react-router-dom';

class Item extends React.Component{
    componentDidMount(){
        this.props.needItem(this.props.match.params.itemId);
    }

    render(){
        const item = this.props.item;
        if(!item) return null;
        return(
            <div>
                <h1>{item.item_name}</h1>
                <br />
                <img src={`${item.picture_url}`} alt="imgs" />
                <br />
                <div>
                    <p>item price: {item.item_price}</p>
                    <p>numbers of item left: {item.num_of_item_left}</p>
                    <p>descrption</p>
                </div>
            </div>
        )
    }
};

export default Item;