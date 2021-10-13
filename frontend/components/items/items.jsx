import React from 'react';
import { Link } from 'react-router-dom';

class Items extends React.Component{
    componentDidMount(){
        this.props.allItems();
        document.title = 'Atoz'
    }

    render(){
        const allItem = (
            <div className='allItems'>
                <ul className='grid-items'>
                    {this.props.items.map(item => (
                        <div key={item.id} className='gridItem' >
                            <div className='gridContent'>
                                <p className='itemTitle'>{itemName(item.item_name)}</p>
                                <div className='gridImgBox'>
                                    <Link to={`items/${item.id}`} className='gridItemLink'><img src={`${item.image_url[0]}`} alt="img_of_each_item" className='gridItemImg'/></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        );
        return(
            <>
                <div className='zIndex'>
                    <div className='mainPageImgBox'>
                        <img src="https://atoz-seeds.s3.us-east-2.amazonaws.com/deals.jpg" alt="main page" className='mainPageImg'/>
                    </div>
                </div>
                <div className='mainPageSession'>
                    {allItem}
                </div>
            </>
        )
    }
};

export default Items;

let itemName = name => {
    return name.length > 17 ? name.slice(0, 17) + '...' : name;
}