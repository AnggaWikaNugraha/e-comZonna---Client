import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL} from '../constants'
import axios from 'axios'

const listProduct = () => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_LIST_REQUEST,});
    const {data} = await axios.get('http://localhost:5000/api/products');
    dispatch({type : PRODUCT_LIST_SUCCESS, payload : data});
  } catch (error) {
    dispatch({type:PRODUCT_LIST_FAIL, payload: error.message})
  }
}

const saveProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type : PRODUCT_SAVE_REQUEST, payload : product });
    const { userSignin : { userInfo }} = getState();

    if (!product._id) {
      const { data } = await axios.post('http://localhost:5000/api/products', product ,
      {
        headers : {
          'Authorization' : 'Bearer' + userInfo.token
        }
      }
      );
      dispatch({ type : PRODUCT_SAVE_SUCCESS, payload : data}); 
    }else{
      const { data } = await axios.put('http://localhost:5000/api/products/' + product._id, product ,
      {
        headers : {
          'Authorization' : 'Bearer' + userInfo.token
        }
      }
      );
      dispatch({ type : PRODUCT_SAVE_SUCCESS, payload : data});
    }
  } catch (error) {
    dispatch({ type : PRODUCT_SAVE_FAIL, payload : error.message});
  }
}

const detailProduct = (productId) => async (dispatch) => {
  try {
    dispatch({type : PRODUCT_DETAILS_REQUEST, payload: productId});
    const data = await axios.get('http://localhost:5000/api/products/' + productId);
    dispatch({type : PRODUCT_DETAILS_SUCCESS, payload : data})
  } catch (error) {
    dispatch({type : PRODUCT_DETAILS_FAIL, payload: error})
  }
}

const deleteProduct = (productId) => async (dispatch, getState) => {
  try {
    const {userSignin : {userInfo}} = getState()
    dispatch({type : PRODUCT_DELETE_REQUEST, payload: productId});
    const data = await axios.delete('http://localhost:5000/api/products/' + productId , {
      headers : {
        'Authorization' : 'Bearer' + userInfo.token
      }
    });
    dispatch({type : PRODUCT_DELETE_SUCCESS, payload : data , succes : true})
  } catch (error) {
    dispatch({type : PRODUCT_DELETE_FAIL, payload: error.message})
  }
}


export {listProduct, detailProduct , saveProduct , deleteProduct}