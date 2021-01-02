import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS} from '../constants'
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
    dispatch({type : PRODUCT_DETAILS_REQUEST, payload: productId});
    const data = await axios.get('http://localhost:5000/api/products/' + productId);
    dispatch({type : PRODUCT_DETAILS_SUCCESS, payload : data})
  } catch (error) {
    dispatch({type : PRODUCT_DETAILS_FAIL, payload: error})
  }
}

export {listProduct, detailProduct}