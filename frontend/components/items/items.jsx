import React from 'react';
import { Link } from 'react-router-dom';

class Items extends React.Component{
    componentDidMount(){
        this.props.allItems();
    }

    render(){
        const allItem = (
            <ul className='grid-items'>
                {this.props.items.map(item => (
                    <li key={item.id} className='gird-item' ><Link to={`items/${item.id}`}><img src={`${item.image_url}`} alt="img_of_each_item" /></Link></li>
                ))}
            </ul>
        )
        return(
            <div className='mainPageSession'>
                {allItem}
            </div>
        )
    }
};

export default Items;