import { connect } from 'react-redux';
import { needItem } from '../../actions/items_action';
import { selectItem, selectReviewsForItem } from '../../reducer/selectors';
import item from './item';

const mst = (state, props) => {
    const itemId = parseInt(props.match.params.itemId);
    const item = selectItem(state.entities, itemId);
    const reviews = selectReviewsForItem(state.entities, item);
    return {
        itemId,
        item,
        reviews
    }
}
const mdt = dispatch => ({
    needItem: itemId => dispatch(needItem(itemId)),
    deleteReview: reviewId => dispatch(deleteItemReview(reviewId))
});

export default connect(mst,mdt)(item);
