import { connect } from 'react-redux';
import { needItem } from '../../actions/items_action';
import { addToCart, updateCart } from '../../actions/session_action';
import { selectItem, selectReviewsForItem } from '../../reducer/selectors';
import item from './item';

const mst = (state, props) => {
    const itemId = parseInt(props.match.params.itemId);
    const item = selectItem(state.entities, itemId);
    const reviews = selectReviewsForItem(state.entities, item);
    let user;
    if(state.session.id) user = state.entities.users[state.session.id];
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    let totalRaiting = 0;
    let numOfRaiting = 0;
    reviews.forEach( review => {
        numOfRaiting++;
        totalRaiting += review.rating;
    })

    return {
        itemId,
        item,
        reviews,
        user,
        cart,
        avgRating: totalRaiting/numOfRaiting || 0,
        numOfRaiting
    }
}
const mdt = dispatch => ({
    needItem: itemId => dispatch(needItem(itemId)),
    // deleteReview: reviewId => dispatch(deleteItemReview(reviewId)),
    addingToCart: cart => dispatch(updateCart(cart)),
});

export default connect(mst,mdt)(item);
