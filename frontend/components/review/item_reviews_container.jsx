import { connect } from 'react-redux';
import { deleteReview } from '../../actions/items_action';
import Review from './review';

const mst = ( state, { review }) => ({
    user: state.entities.users[review.user_id],
    currentUserId: state.session.id
});

const mdt = dispatch => ({
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
});


export default connect(mst,mdt)(Review);
