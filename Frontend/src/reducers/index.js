import { combineReducers } from 'redux';
import product from './product';
import auth from './auth';
import cartReducer from './cartReducer';
import cartProductRed from './cartProductRed';

export const reducers = combineReducers({ product,auth,cartReducer,cartProductRed});