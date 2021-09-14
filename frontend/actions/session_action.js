import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';
export const ADD_ITEM = 'ADD_ITEM';
export const CLEAR_CART = 'CLEAR_CART';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const errors = () =>({
  type: REMOVE_ERRORS
});

export const addItem = cart => ({
  type: ADD_ITEM,
  cart
});

export const clearCart = () => ({
  type: CLEAR_CART
});

export const addToCart = cart => dispatch => (
  dispatch(addItem(cart))
);

export const clearItems = () => dispatch => (
  dispatch(clearCart())
);

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(() => (
    dispatch(logoutCurrentUser())
  ))
);

export const updateCart = (cart) => (dispatch) => (
  APIUtil.cart(cart).then(user => (
    dispatch(receiveCurrentUser(user))
  ))
);

