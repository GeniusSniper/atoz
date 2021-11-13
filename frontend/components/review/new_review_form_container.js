import { connect } from 'react-redux';
import { createReview } from '../../actions/items_action';

import ReviewForm from './review_form';

const mst = state => ({
  review: {
    raing: 0,
    headline: '',
    body: ''
  },
  formType: 'Create'
})

const mdt = dispatch => ({
  createReview: review => dispatch(createReview(review))
});

export default connect(mst,mdt)(ReviewForm);
