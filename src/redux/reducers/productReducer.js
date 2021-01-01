import {PRODUCT_DELETE_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS} from '../constants' 

function productListReducer (state ={ product:[]} , action){
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {loading : true};
    case PRODUCT_LIST_SUCCESS:
      return {loading : false, products : action.payload}
    case PRODUCT_LIST_FAIL:
      return {loading : false, error : action.payload}
    default:
      return state
  }
}

function productDetailReducer (state ={ product:{}} , action){
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {loading : true};
    case PRODUCT_DETAILS_SUCCESS:
      return {loading : false, product : action.payload}
    case PRODUCT_DETAILS_FAIL:
      return {loading : false, error : action.payload}
    default:
      return state
  }
}

export {productListReducer, productDetailReducer}