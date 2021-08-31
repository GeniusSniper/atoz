import { connect } from 'react-redux';
import Cart from './cart';

const mst = state => {
    let cart = [];
    let user = state.entities.users;
    if(Object.values(user).length) cart = Object.values(user[Object.keys(user)[0]].cart);
    return ({
        cart
    })
};

const mdt = dispatch => ({
});

export default connect(mst,mdt)(Cart);
