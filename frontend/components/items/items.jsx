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
                    <Link to={`items/${item.id}`} key={item.id} className='gridItem'><img src={`${item.image_url}`} alt="img_of_each_item" className='gridItemImg'/></Link>
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