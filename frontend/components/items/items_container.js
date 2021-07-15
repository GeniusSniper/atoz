import { connect } from 'react-redux';
import { allItems, deleteItemReview } from '../../actions/items_action';
import items from './items';

const mst = ({ entities }) => ({
    items: Object.values(entities.items),
});

const mdt = dispatch => ({
    allItems: () => dispatch(allItems())
});

export default connect(mst,mdt)(items);
