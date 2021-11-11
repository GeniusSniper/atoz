import { connect } from 'react-redux';
import { updateCart } from '../../actions/session_action';
import Cart from './cart';

const mst = state => {
    let cart = [], user;
    if(state.session.id){
        user = state.entities.users[state.session.id];
        cart = user.cart;
    } else {
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
        }
    }
    return ({
        cart,
        user
    })
};

const mdt = dispatch => ({
    updateCart: cart => dispatch(updateCart(cart)),
});

export default connect(mst,mdt)(Cart);
