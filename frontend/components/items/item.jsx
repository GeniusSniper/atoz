import React from 'react';
import { Link } from 'react-router-dom';
import ReviewFormContainer from '../review/review_form_container';
import Review from '../review/review';

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
        if(!item.id) return null;
        const itemimgs = item.image_url.map((img, j) => (
            <div className='itemImgsGrid'  key={img}>
                <div className='itemImgBlock'>
                    <img src={img} alt="broke" className='itemimg' onMouseOver={() => this.setState({i: j})}/>
                </div>
            </div>
        ))
        // debugger
        // console.log(Object.values(this.props.reviews))
        // const allReviews = this.props.reviews.map(review => (
        //     <p>{review.body}</p>
        // ));
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
                                <p>numbers of item left: {item.num_of_item_left}</p>
                                <button className='addCartButton'>Add to Cart</button>
                                <br />
                                <button className='purchaseButton'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <ReviewFormContainer />
                <Review reviews={this.props.reviews} deleteReview={this.props.deleteReview} item={item}/>
            </div>
        )
    }
};

export default Item;