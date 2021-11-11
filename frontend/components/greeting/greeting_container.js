import { connect } from 'react-redux';
import { logout } from '../../actions/session_action';
import Greeting from './greeting';

const mst = ({ session, entities: { users } }) => {
  let cartTotal = 0;
  let cart = {};
  if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
  }
  Object.values(cart).forEach(obj => {
    cartTotal += parseInt(obj.qty);
  })
  if(session.id){
    Object.values(users[session.id].cart).forEach(obj => {
      cartTotal += parseInt(obj.qty);
    })
  }
  return ({
    currentUser: users[session.id],
    cartTotal
})};

const mdt = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mst,mdt)(Greeting);
