import { DELETE_REVIEW, RECEIVE_ITEM, RECEIVE_REVIEW } from "../actions/items_action";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ITEM:
      return Object.assign({}, state, action.reviews);
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.review.id]: action.review });
    case DELETE_REVIEW:
      let nextState = Object.assign({}, state);
      delete nextState[action.reviewId];
      return nextState;
    default:
      return state;
  }
}

export default reviewsReducer;
