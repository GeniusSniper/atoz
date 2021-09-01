import { connect } from 'react-redux';
import { needItem } from '../../actions/items_action';
import { updateCart } from '../../actions/session_action';
import { selectItem, selectReviewsForItem } from '../../reducer/selectors';
import item from './item';

const mst = (state, props) => {
    const itemId = parseInt(props.match.params.itemId);
    const item = selectItem(state.entities, itemId);
    const reviews = selectReviewsForItem(state.entities, item);
    let user;
    if(state.session.id) user = state.entities.users[state.session.id];
    return {
        itemId,
        item,
        reviews,
        user
    }
}
const mdt = dispatch => ({
    needItem: itemId => dispatch(needItem(itemId)),
    // deleteReview: reviewId => dispatch(deleteItemReview(reviewId)),
    addingToCart: user => dispatch(updateCart(user)),
});

export default connect(mst,mdt)(item);
