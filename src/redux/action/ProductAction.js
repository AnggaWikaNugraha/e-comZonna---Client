import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL} from '../constants'
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

export {listProduct}