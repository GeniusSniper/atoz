import React from 'react';
import { Link } from 'react-router-dom';
import Item from './item';

class Items extends React.Component{
    componentDidMount(){
        this.props.allItems();
    }

    render(){
        const allItem = (
            <ul>
                {this.props.items.map(item => (
                    <img src={`${item.image_url}`} alt="img_of_each_item" />
                ))}
            </ul>
        )
        return(
            <>
                {allItem}
            </>
        )
    }
};

export default Items;