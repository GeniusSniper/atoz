import React from 'react';
import { Link } from 'react-router-dom';

class Items extends React.Component{
    componentDidMount(){
        this.props.allItems();
    }

    render(){
        const allItem = (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>
                        <a href={`items/${item.id}`}><img src={`${item.image_url}`} alt="img_of_each_item" /></a>
                    </li>
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