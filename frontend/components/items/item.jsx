import React from 'react';
import { Link } from 'react-router-dom';
import ItemReviewsContainer from '../review/item_reviews_container';

class Item extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            i: 0
        }

        this.adding_to_cart = this.adding_to_cart.bind(this);
    }

    componentDidMount(){
        this.props.needItem(this.props.match.params.itemId);
    }

    adding_to_cart(){

    }

    render(){
        const item = this.props.item;
        if(!item.id) return null;
        document.title = this.props.item.item_name;
        const itemimgs = item.image_url.map((img, j) => (
            <div className='itemImgsGrid'  key={img}>
                <div className='itemImgBlock'>
                    <img src={img} alt="broke" className='itemimg' onMouseOver={() => this.setState({i: j})}/>
                </div>
            </div>
        ))
        const allReviews = this.props.reviews.map(review => {
            if(!review) return null;
            return(
            <ItemReviewsContainer review={review} key={Math.random()} itemId={item.id}/>
        )})


        return(
            <div className='eachItem'>
                <div className='eachItemFlex'>
                    <div className='leftSession'>
                        <div className='itemimgs'>
                            {itemimgs}
                        </div>
                        <div className='eachItemMainImg'>
                            <img src={`${item.image_url[this.state.i]}`} alt="imgs" className='eachImgPit'/>
                        </div>
                    </div>
                    <div className='midSession'>
                        <div className='midSessionBox'>
                            <div className='midSessionFlex'>
                                <h1 className='eachItemTitle'>{item.item_name}</h1>
                                <p className='eachItemPrice'>${item.item_price}</p>
                                <p className='itemDescrption'>{item.descrption}</p>
                            </div>
                        </div>
                    </div>
                    <div className='rightSession'>
                        <div className='rightSessionBox'>
                            <div className='rightSessionFlex'>
                                <p className='eachItemPrice'>${item.item_price}</p>
                                {/* <p>numbers of item left: {item.num_of_item_left}</p> */}
                                <p>Qty: 1</p>
                                <button className='addCartButton' onClick={this.adding_to_cart}>Add to Cart</button>
                                <br />
                                <button className='purchaseButton'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='reviewSession'>
                    <div className='requstingReview'>
                        <h1 className='reviewThisProduct'>Review this product</h1>
                        <p className='shareYourThoughts'>Share your thoughts with other customers</p>
                        <Link to={`/items/${item.id}/review/new`} className='creatingReview'><button className='createReviewButton'>Write a customer review</button></Link>
                    </div>
                    <div className='allReviews'>
                        {allReviews}
                    </div>
                </div>
            </div>
        )
    }
};

export default Item;