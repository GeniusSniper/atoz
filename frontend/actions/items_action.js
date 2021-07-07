import * as APIUtil from '../util/item_api_util';

export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';

export const receiveAllItems = items => ({
  type: RECEIVE_ALL_ITEMS,
  items
});

export const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item
})

export const allItems = () => dispatch => (
    APIUtil.allItems().then(items => (
        dispatch(receiveAllItems(items))
    ))
);

export const needItem = itemId => dispatch => (
    APIUtil.needItem(itemId).then(item => (
        dispatch(receiveItem(item))
    ))
);