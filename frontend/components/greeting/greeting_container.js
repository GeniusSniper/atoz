import { connect } from 'react-redux';
import { logout } from '../../actions/session_action';
import Greeting from './greeting';

const mst = (state) => {
  let cartTotal = 0;
  let cart = {};
  if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
    Object.values(cart).forEach(obj => {
      cartTotal += parseInt(obj.qty);
    })
  }
  if(state.session.id){
    Object.values(state.entities.users[state.session.id].cart).forEach(obj => {
      cartTotal += parseInt(obj.qty);
    })
  }
  return ({
    currentUser: state.entities.users[state.session.id],
    cartTotal
})};

const mdt = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mst,mdt)(Greeting);
