import { connect } from 'react-redux';
import { createReview } from '../../actions/items_action';

import ReviewForm from './review_form';

const mst = state => ({
  review: {
    raing: 5,
    body: ''
  },
  formType: 'create'
})

const mdt = dispatch => ({
  createReview: review => dispatch(createReview(review))
});

export default connect(mst,mdt)(ReviewForm);
