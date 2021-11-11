import { connect } from 'react-redux';
import { updateCart } from '../../actions/session_action';
import Cart from './cart';

const mst = state => {
    let cart = {}, user;
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    if(state.session.id){
        user = state.entities.users[state.session.id];
        Object.values(user.cart).forEach(obj => {
            cart[obj.id] ? cart[obj.id].qty += parseInt(cart[obj.id].qty) + parseInt(obj.qty) : cart[obj.id] = obj;
        })
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
