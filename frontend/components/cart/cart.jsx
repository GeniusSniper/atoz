import React from 'react';

class Cart extends React.Component{
    render(){
        let items = this.props.cart.map( item => {

        })

        return (
            <div>
                Your Atoz Cart is empty
            </div>
        )
    }
}

export default Cart;