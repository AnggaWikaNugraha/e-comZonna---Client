import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {productListReducer, productDetailReducer} from './reducers/productReducer'
import {cartReducer} from './reducers/cartReducer'
import {userRegisterReducer, userSigninReducer} from './reducers/userReducer'
import Cookie from 'js-cookie'

const cartItems = Cookie.getJSON('cartItems') || []
const userInfo = Cookie.getJSON('userInfo') || null

const initialState = {cart : {cartItems }, userSignin : {userInfo} };
const reducer = combineReducers({
  productList : productListReducer,
  productDetails : productDetailReducer,
  cart : cartReducer,
  userSignin : userSigninReducer,
  userRegister : userRegisterReducer

})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store