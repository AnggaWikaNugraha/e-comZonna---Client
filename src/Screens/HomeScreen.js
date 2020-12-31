import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const HomeScreen = () => {
  const [products, setproducts] = useState([])

  useEffect(() => {
    // axios.get('http://localhost:5000/api/products')
    // .then(res => {
    //   setproducts(res.data)
    // })

    // const fetchData = async () => {
    //   const {data} = await axios.get('http://localhost:5000/api/products');
    //   setproducts(data)
    // }

    const fetchData = async () => {
      const data = await fetch('http://localhost:5000/api/products');
      const dataJson = await data.json()
      setproducts(dataJson)
    }
    fetchData()
  }, [])
  
  console.log(products)
  return (
    <div>
      <ul className="products">
        {products.map((product) => {
          return (
            <li key={product._id}>
              <div className="product">
                <Link to={`/product/${product._id}`}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                </Link>
                <div className="product-name">
                  <Link to={`/product/${product._id}`}>
                    <a href="product.html">{product.name}</a>
                  </Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">
                  {product.rating} Stars ({product.numReview})
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeScreen;