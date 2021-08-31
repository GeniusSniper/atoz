import React from 'react';

class Cart extends React.Component{
    render(){
        if(!this.props.cart) return null;
        let items = this.props.cart.map( item => {
            return (
                <div key={item.id}>
                    <div>{item.item_name}</div>
                </div>
            )
        });
        let text = items.length === 0 ? 'Your Atoz Cart is empty' : 'Shopping Cart';
        return (
            <div>
                <div>{text}</div>
                <div>{items}</div>
            </div>
        )
    }
}

export default Cart;