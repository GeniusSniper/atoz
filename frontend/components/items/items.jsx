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
                    <div key={item.id} className='gridItem' >
                        <p className='itemTitle'>{item.item_name}</p>
                        <Link to={`items/${item.id}`} ><img src={`${item.image_url[0]}`} alt="img_of_each_item" className='gridItemImg'/></Link>
                        <p className='gridItemFooter'>{'    '}</p>
                    </div>
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