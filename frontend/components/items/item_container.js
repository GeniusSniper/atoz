import { connect } from 'react-redux';
import { needItem } from '../../actions/items_action';
import item from './item';

const mst = (state, props) => ({
    item: state.entities.items[props.match.params.itemId],
});

const mdt = dispatch => ({
    needItem: itemId => dispatch(needItem(itemId)),
});

export default connect(mst,mdt)(item);
