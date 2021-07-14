import { combineReducers } from "redux";

import users from './users_reducer';
import items from './items_reducer';
import reviews from './reviews_reducer';

export default combineReducers({ users, items, reviews });