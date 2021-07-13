import React from 'react';
import { Link } from 'react-router-dom';

class Item extends React.Component{
    componentDidMount(){
        this.props.needItem(this.props.match.params.itemId);
    }

    render(){
        const item = this.props.item;
        if(!item) return null;
        // this.i = 0;
        const itemimgs = item.image_url.map((img, j) => (
            <img src={img} alt="broke" key={img} className='itemimg' />
        ))
        return(
            <div className='eachItem'>
                <div className='leftSession'>
                    <div className='itemimgs'>
                        {itemimgs}
                    </div>
                    <img src={`${item.image_url[0]}`} alt="imgs" className='eachImgPit'/>
                    <br />
                </div>
                <div className='midSession'>
                    <h1 className='eachItemTitle'>{item.item_name}</h1>
                    <br />
                    <p className='itemDescrption'>{item.descrption}</p>
                </div>
                <div className='rightSession'>
                    <p>${item.item_price}</p>
                    <p>numbers of item left: {item.num_of_item_left}</p>
                    <button className='purchaseButton'>Purchase</button>
                </div>
            </div>
        )
    }
};

export default Item;