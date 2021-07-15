import { connect } from 'react-redux';
import { deleteItemReview } from '../../actions/items_action';
import Review from './review';

const mst = ({entities: { users }}, { review }) => ({
    user: users[review.user_id]
});

const mdt = dispatch => ({
    deleteReview: reviewId => dispatch(deleteItemReview(reviewId))
});


export default connect(mst,mdt)(Review);
