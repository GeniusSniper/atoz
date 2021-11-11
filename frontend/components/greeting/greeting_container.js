import { connect } from 'react-redux';
import { logout } from '../../actions/session_action';
import Greeting from './greeting';

const mst = ({ session, entities: { users } }) => {
  let cartTotal = 0;
  return ({
    currentUser: users[session.id],
    cartTotal
})};

const mdt = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mst,mdt)(Greeting);
