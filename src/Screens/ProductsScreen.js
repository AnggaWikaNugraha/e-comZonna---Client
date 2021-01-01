import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {detailProduct} from '../redux/action/ProductAction'

const ProductsScreen = (props) => {
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);
  const {product, loading , error} = productDetails;

  useEffect(() => {
    dispatch(detailProduct(props.match.params.id));
    return () => {
      
    }
  }, [])

  // const id = props.match.params.id;
  // const product = data.products.find(x => x._id === id);

  return (
    <div>
      <div className='back-to-result'><Link to='/'>Back to result</Link></div>
      { loading  ? <p>loading...</p> : 
        product.data ? <div className='details'>
        <div className='details-image'><img src={product.data.image} alt={product.data.name}/></div>
        <div className='details-info'>
          <li><h4>{product.data.name}</h4></li>
          <li>{product.data.rating} Stars ({product.data.numReviews})</li>
          <li><b>{product.data.price}</b></li>
          <li> Description :
            <div>{product.data.description}</div>
          </li>
        </div>
        <div className='details-action'>
          <ul>
            <li>Price : {product.data.price}</li>
            <li>Status : {product.data.status}</li>
            <li>Qty : <select><option>1</option><option>2</option><option>3</option><option>4</option></select></li>
            <li><button>Add to Cart</button></li>
          </ul>
        </div>
      </div> :
      error}
    </div>
  )
}

export default ProductsScreen
