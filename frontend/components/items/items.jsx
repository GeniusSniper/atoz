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
                        <div className='gridContent'>
                            <p className='itemTitle'>{item.item_name}</p>
                            <div className='gridImgBox'>
                                <Link to={`items/${item.id}`} className='gridItemLink'><img src={`${item.image_url[0]}`} alt="img_of_each_item" className='gridItemImg'/></Link>

                            </div>
                            {/* <p className='gridItemFooter'>{'    '}</p> */}
                        </div>
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