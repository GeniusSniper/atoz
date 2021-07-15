import { DELETE_REVIEW, RECEIVE_ITEM, RECEIVE_REVIEW } from '../actions/items_action';
import { RECEIVE_CURRENT_USER } from '../actions/session_action';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.user.id]: action.user});
    case RECEIVE_ITEM:
      return Object.assign({}, state, action.users);
    default:
      return state;
  }
};

export default usersReducer;
 