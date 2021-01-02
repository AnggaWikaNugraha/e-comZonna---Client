import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {detailProduct} from '../redux/action/ProductAction'

const ProductsScreen = (props) => {
  const [qty, setqty] = useState(1)
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);
  const {product, loading , error} = productDetails;

  useEffect(() => {
    dispatch(detailProduct(props.match.params.id));
    return () => {
      
    }
  }, [])

  console.log(qty)

  // const id = props.match.params.id;
  // const product = data.products.find(x => x._id === id);

  const handleAddCart = () => {
    props.history.push('/cart/' + props.match.params.id + "?qty=" + qty)
  }

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
            <li>Status : {product.data.countInStock > 0 ? "In stock" : <div>Out of Stock</div>}</li>
            <li>Qty : <select value={qty} onChange={(e) => setqty(e.target.value)}>
              {[...Array(product.data.countInStock).keys()].map(x => {
                return (
                  <option key={x+1} value={x +1}>{x+1}</option>
                )
              })}
            </select></li>
            <li>
              {product.data.countInStock > 0 && <button onClick={handleAddCart}>Add to Cart</button> }
            </li>
          </ul>
        </div>
      </div> :
      error}
    </div>
  )
}

export default ProductsScreen
