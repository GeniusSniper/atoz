import { RECEIVE_CURRENT_USER,LOGOUT_CURRENT_USER, ADD_ITEM, CLEAR_CART } from '../actions/session_action';
const _nullUser = Object.freeze({id: null, cart: {}});
  
const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_CURRENT_USER:
        return { id: action.currentUser.id };
      case LOGOUT_CURRENT_USER:
        return _nullUser;
      case ADD_ITEM:
        return { cart }
      case CLEAR_CART:
        return { cart: {} }
      default:
        return state;
    }
};
  
export default sessionReducer;
  