import React from 'react';

class Cart extends React.Component{
    render(){
        if(!this.props.cart) return null;
        let totalItem = 0, totalPrice = 0.00;
        let items = this.props.cart.map( item => {
            totalItem += parseInt(item.qty);
            totalPrice += parseFloat(item.item_price) * parseFloat(item.qty);
            return (
                <div key={item.id} className='cartIem'>
                    <div className='cartEachItem'>
                        <div>
                            <img src={`${item.image_url[0]}`} alt="imgs" className='cartItemImg'/>                            
                        </div>
                        <div>
                            <div>{item.item_name}</div>
                            <div>${priceToS(item.item_price)}</div>
                            <div>
                                <div>Qty:{item.qty}</div>
                                {/* <div><button>Delete</button></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
        let text = items.length === 0 ? 'Your Atoz Cart is empty' : 'Shopping Cart';
        return (
            <div className='cartMain'>
                <div className='cartShow'>
                    <div className='cartShoppingCart'>
                        <div className='cartShoppingList'>
                            <div>{text}</div>
                            <div>{items}</div>
                        </div>
                    </div>
                    <div className='cartCheckout'>
                        <h3>Subtotal ({totalItem} item): ${priceToS('' + totalPrice)}</h3>
                        <button>Proceed to checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}

let priceToS = num => {
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