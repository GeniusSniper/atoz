import React from 'react';
import { Link } from 'react-router-dom';

class Item extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            i: 0
        }
    }

    componentDidMount(){
        this.props.needItem(this.props.match.params.itemId);
    }

    render(){
        const item = this.props.item;
        if(!item) return null;
        const itemimgs = item.image_url.map((img, j) => (
            <img src={img} alt="broke" key={img} className='itemimg' onMouseOver={() => this.setState({i: j})}/>
        ))
        return(
            <div className='eachItem'>
                <div className='leftSession'>
                    <div className='itemimgs'>
                        {itemimgs}
                    </div>
                    <img src={`${item.image_url[this.state.i]}`} alt="imgs" className='eachImgPit'/>
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
                    <button className='addCartButton'>Add to Cart</button>
                    <button className='purchaseButton'>Buy Now</button>
                </div>
            </div>
        )
    }
};

export default Item;