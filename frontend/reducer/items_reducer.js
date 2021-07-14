import { RECEIVE_ALL_ITEMS, RECEIVE_ITEM, RECEIVE_REVIEW } from "../actions/items_action";
  
const itemReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_ALL_ITEMS:
        return action.items;
      case RECEIVE_ITEM:
        return Object.assign({}, state, {[action.item.id]: action.item});
      case RECEIVE_REVIEW:
        let newState = Object.assign({}, state);
        newState[action.review.item_id].reviewIds.push(action.review.id);
        return newState;
      default:
        return state;
    }
};
  
export default itemReducer;
  