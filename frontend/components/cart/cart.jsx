import React from 'react';

class Cart extends React.Component{
    render(){
        if(!this.props.cart) return null;
        let items = this.props.cart.map( item => {
            return (
                <div key={item.id}>
                    <div>
                        {/* <img src={`${item.image_url[0]}`} alt="imgs" className='eachImgPit'/>                             */}
                    </div>
                    <div>{item.item_name}</div>
                </div>
            )
        });
        let text = items.length === 0 ? 'Your Atoz Cart is empty' : 'Shopping Cart';
        return (
            <div>
                <div>
                    <div>{text}</div>
                    <div>{items}</div>
                </div>
                <div>
                    <div>
                        <h3>Subtotal ({`1`} item): {`$23`}</h3>
                        <button>Proceed to checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;