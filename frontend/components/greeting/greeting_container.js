import { connect } from 'react-redux';
import { logout } from '../../actions/action';
import Greeting from './greeting';

const mst = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mdt = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mst,mdt)(Greeting);
