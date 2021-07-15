import { connect } from 'react-redux';
import { deleteReview } from '../../actions/items_action';
import Review from './review';

const mst = ({entities: { users }}, { review }) => ({
    user: users[review.user_id]
});

const mdt = dispatch => ({
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
});


export default connect(mst,mdt)(Review);
