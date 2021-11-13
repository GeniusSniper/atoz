import { connect } from 'react-redux';
import { createReview } from '../../actions/items_action';
import { errors } from '../../actions/session_action';

import ReviewForm from './review_form';

const mst = (state, props) => {
  return ({
    errors: state.errors.session,
    item: state.entities.items[props.match.params.itemId],
    review: {
    raing: 0,
    headline: '',
    body: ''
  },
  formType: 'Create'
})}

const mdt = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  removeErrors: () => dispatch(errors())
});

export default connect(mst,mdt)(ReviewForm);
