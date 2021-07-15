import * as APIUtil from '../util/item_api_util';

export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';

export const receiveAllItems = items => ({
  type: RECEIVE_ALL_ITEMS,
  items
});

export const receiveItem = ({item, reviews, users}) => ({
  type: RECEIVE_ITEM,
  item,
  reviews,
  users
});

export const receiveReivew = ({ review, user }) => ({
  type: RECEIVE_REVIEW,
  review,
  user
});

export const deleteItemReview = reviewId => ({
  type: DELETE_REVIEW,
  reviewId
})

export const allItems = () => dispatch => (
    APIUtil.allItems().then(items => (
        dispatch(receiveAllItems(items))
    ))
);

export const needItem = itemId => dispatch => (
    APIUtil.needItem(itemId).then(item => (
        dispatch(receiveItem(item))
    ))
);

// export const showReview = reviewId => dispatch => (
//     APIUtil.showReview(reviewId).then(payload => (
//     dispatch(receiveReivew(payload))
//   ))
// );

export const createReview = review => dispatch => (
    APIUtil.createReview(review).then(payload => (
    dispatch(receiveReivew(payload))
  ))
);

// export const editReview = reviewId => dispatch => (
//   APIUtil.editReview(reviewId).then(payload => (
//     dispatch(receiveReivew(payload))
//   ))
// );

export const updateReview = review => dispatch => (
  APIUtil.updateReview(review).then(payload => (
    dispatch(receiveReivew(payload))
  ))
);

export const deleteReview = reviewId => dispatch => (
  APIUtil.deleteReview(reviewId).then(() => (
    dispatch(deleteItemReview(reviewId))
  ))
);