import { connect } from 'react-redux';
import { updateReview } from '../../actions/items_action';

import ReviewForm from './review_form';

const mst = (state, props) => ({
  // review: state.entities.reviews[props.reviewId],
  review: state.entities.reviews[props.match.params.reviewId],
  formType: 'edit'
});

const mdt = dispatch => ({
  // editReview: reviewId => dispatch(editReview(reviewId)),
  updateReview: review => dispatch(updateReview(review))
});

export default connect(mst,mdt)(ReviewForm);
