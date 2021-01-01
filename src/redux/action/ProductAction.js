import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL} from '../constants'
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

const detailProduct = (productId) => async (dispatch) => {
  try {
    dispatch({type : PRODUCT_LIST_REQUEST, payload: productId});
    const data = await axios.get('http://localhost:5000/api/products/' + productId);
    dispatch({type : PRODUCT_DELETE_SUCCESS , payload : data})
  } catch (error) {
    dispatch({type : PRODUCT_DELETE_FAIL, payload: error})
  }
}

export {listProduct, detailProduct}