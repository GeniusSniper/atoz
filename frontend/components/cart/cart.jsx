import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component{
    constructor(props){
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(i){
        this.props.user.cart[i] = undefined;
        this.props.updateCart(this.props.user.cart);
    }

    render(){
        // if(!this.props.cart) return null;
        let totalItem = 0, totalPrice = 0.00;
        let items = this.props.cart.map( item => {
            totalItem += parseInt(item.qty);
            totalPrice += parseFloat(item.item_price) * parseFloat(item.qty);
            return (
                <div key={item.id} className='cartIem'>
                    <div className='cartEachItem'>
                        <div className='cartEachItem01'>
                            <div>
                                <Link to={`items/${item.id}`} className='cartEachItemLink'>
                                    <div className='cartEachItemImgDiv'>
                                        <img src={`${item.image_url[0]}`} alt="imgs" className='cartItemImg'/>                            
                                    </div>
                                </Link>
                            </div>
                            <div className='cartEachItemDetail'>
                                <Link to={`items/${item.id}`} className='cartEachItemLink'>
                                    <div>{item.item_name}</div>
                                </Link>
                                <div className='cartEachItemQt'>
                                    <div className='cartEachItemQt1'>Qty:{item.qty}</div>
                                    <div className='cartDeleteItem' onClick={() => this.deleteItem(item.id)}>Delete</div>
                                    {/* <div><button>Delete</button></div> */}
                                </div>
                            </div>
                        </div>
                        <div className='cartPrice'>${priceToS(item.item_price)}</div>
                    </div>
                </div>
            )
        });
        let text = items.length === 0 ? 'Your Atoz Cart is empty' : 'Shopping Cart';
        let item = this.props.cart.length < 2 ? 'item' : 'items';
        let total = <h3>Subtotal ({totalItem} {item}): <a className='cartPrice'>${priceToS('' + totalPrice)}</a></h3>;
        return (
            <div className='cartMain'>
                <div className='cartShow'>
                    <div className='cartShoppingCart'>
                        <div className='cartShoppingList'>
                            <div className='cartTitle'>
                                {text}
                            </div>
                            <br />
                            <div>{items}</div>
                            <div className='checkoutSubTotal'>
                                {total}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='cartCheckout'>
                            <div>{total}</div>
                            <button className='cartCheckoutButton'>Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

let priceToS = num => {
    if(num.length < 4) return num;
    let str = '';
    let arr = num.split('.');
    for(let i = 0; i < arr[0].length; i++){
        if((arr[0].length - i) % 3 === 0 && i !==0){
            str += ',' + arr[0][i]
        } else {
            str += arr[0][i];
        }
    }
    str += '.' + arr[1].substring(0,2);
    return str;
}

export default Cart;