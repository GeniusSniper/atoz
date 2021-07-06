import { createStore, applyMiddleware } from "redux";//creating store and applying middle ware
import thunk from "redux-thunk";
import rootReducer from '../reducer/rootReducer';// root reducer that getting all the data and render 

const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(thunk))
);

export default configureStore;