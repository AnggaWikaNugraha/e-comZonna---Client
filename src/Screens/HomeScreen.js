import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data";

const HomeScreen = () => {
  return (
    <div>
      <ul className="products">
        {data.products.map((product) => {
          return (
            <li>
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
