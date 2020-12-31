import { prettyDOM } from '@testing-library/react';
import React from 'react'
import { Link } from 'react-router-dom';
import { data } from "../data";

const ProductsScreen = (props) => {
  const id = props.match.params.id;
  const product = data.products.find(x => x._id === id);
  return (
    <div>
      <div className='back-to-result'><Link to='/'>Back to result</Link></div>
      <div className='details'>
        <div className='details-image'><img src={product.image} alt={product.name}/></div>
        <div className='details-info'>
          <li><h4>{product.name}</h4></li>
          <li>{product.rating} Stars ({product.numReviews})</li>
          <li><b>{product.price}</b></li>
          <li> Description :
            <div>{product.description}</div>
          </li>
        </div>
        <div className='details-action'>
          <ul>
            <li>Price : {product.price}</li>
            <li>Status : {product.status}</li>
            <li>Qty : <select><option>1</option><option>2</option><option>3</option><option>4</option></select></li>
            <li><button>Add to Cart</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductsScreen
