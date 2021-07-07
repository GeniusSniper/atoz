import {RECEIVE_SESSION_ERRORS, REMOVE_ERRORS} from '../actions/action';
  
  export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_SESSION_ERRORS:
        return action.errors;
      case REMOVE_ERRORS:
        return [];
      default:
        return state;
    }
  };
  