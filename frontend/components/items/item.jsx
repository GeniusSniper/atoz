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
            <div className='eachItem'>
                <div className='leftSession'>
                    ArrayOfPicture
                    <img src={`${item.image_url[0]}`} alt="imgs" />
                    <br />
                </div>
                <div className='midSession'>
                    <h1>{item.item_name}</h1>
                    <br />
                    <p>descrption</p>
                </div>
                <div className='rightSession'>
                    <p>${item.item_price}</p>
                    <p>numbers of item left: {item.num_of_item_left}</p>
                </div>
            </div>
        )
    }
};

export default Item;