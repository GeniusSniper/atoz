import { connect } from 'react-redux';
import Cart from './cart';

const mst = state => {
    let cart, user;
    if(state.session.id){
        user = state.entities.users[state.session.id];
        cart = user.cart;
    }
    return ({
        cart,
        user
    })
};

const mdt = dispatch => ({
});

export default connect(mst,mdt)(Cart);
