import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {saveProduct} from '../redux/action/ProductAction.js'

const ProductsScreen = (props) => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState('');
  const [brand, setbrand] = useState('');
  const [category, setcategory] = useState('');
  const [countInStock, setcountInStock] = useState('');
  const [description, setdescription] = useState('');
  const productSave = useSelector((state) => state.productSave);
  const { loading : loadingSave, success : successSave, userInfo, error : errorSave } = productSave;
  const dispatch = useDispatch();

  useEffect(() => {
    
    return () => {};
  }, []);

  const submitHanlder = (e) => {
    e.preventDefault();
    dispatch(saveProduct({
      name : name,
      price : price,
      image : image,
      brand : brand,
      category : category,
      countInStock : countInStock,
      description : description,
    }));
  };

  return (
    <div>
      <div className="form">
      <form onSubmit={submitHanlder}>
        <ul className="form-container">
          <li>
            <h2>Cteate Product</h2>
          </li>
          <li>
            {loadingSave && <div>loading ...</div>}
            {errorSave && <div>{errorSave}</div>}
          </li>
          <li>
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setname(e.target.value)}
            />
          </li>
          <li>
            <label for="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              onChange={(e) => setprice(e.target.value)}
            />
          </li>
          <li>
            <label for="image">Image</label>
            <input
              type="text"
              name="image"
              id="image"
              onChange={(e) => setimage(e.target.value)}
            />
          </li>
          <li>
            <label for="brand">Brand</label>
            <input
              type="text"
              name="brand"
              id="brand"
              onChange={(e) => setbrand(e.target.value)}
            />
          </li>
          <li>
            <label for="category">Category</label>
            <input
              type="text"
              name="category"
              id="category"
              onChange={(e) => setcategory(e.target.value)}
            />
          </li>
          <li>
            <label for="countInStock">CountInStock</label>
            <input
              type="text"
              name="countInStock"
              id="countInStock"
              onChange={(e) => setcountInStock(e.target.value)}
            />
          </li>
          <li>
            <label for="description">Description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              onChange={(e) => setdescription(e.target.value)}
            />
          </li>  
          <li>
            <Link
              style={{ textAlign: "center" }}
              to="/register"
              className="button full-width"
            >
              Create
            </Link>
          </li>
        </ul>
      </form>
    </div>
    </div>
  );
};

export default ProductsScreen;
