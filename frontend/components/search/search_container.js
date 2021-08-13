import { connect } from 'react-redux';
import { allItems } from '../../actions/items_action';
import Search from './search';

const mst = ({ entities }) => ({
    items: Object.values(entities.items),
});

const mdt = dispatch => ({
    allItems: () => dispatch(allItems())
});

export default connect(mst,mdt)(Search);
