import { connect } from 'react-redux';
import { logout } from '../../actions/session_action';
import Greeting from './greeting';

const mst = ({ session, entities: { users } }) => {
  
  return ({
    currentUser: users[session.id]
})};

const mdt = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mst,mdt)(Greeting);
