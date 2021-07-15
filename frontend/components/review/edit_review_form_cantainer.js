import { connect } from 'react-redux';
import { editReview, updateReview } from '../../actions/items_action';

import ReviewForm from './review_form';

const mst = (state,props) => ({
  review: state.entities.reviews[props.match.params.reviewId]
});

const mdt = dispatch => ({
  editReview: reviewId => dispatch(editReview(reviewId)),
  updateReview: review => dispatch(updateReview(review))
});

export default connect(mst,mdt)(ReviewForm);
