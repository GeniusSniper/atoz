import { connect } from 'react-redux';
import { createReview } from '../../actions/items_action';

import ReviewForm from './review_form';

const mdt = dispatch => ({
  createReview: review => dispatch(createReview(review))
});

export default connect(null,mdt)(ReviewForm);
