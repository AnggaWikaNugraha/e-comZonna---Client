import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProduct, saveProduct } from "../redux/action/ProductAction.js";

const ProductsScreen = (props) => {
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState("");
  const [brand, setbrand] = useState("");
  const [category, setcategory] = useState("");
  const [countInStock, setcountInStock] = useState("");
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;
  const [description, setdescription] = useState("");
  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    userInfo,
    error: errorSave,
  } = productSave;
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if(successSave){
      setModalVisible(false)
    }
    dispatch(listProduct());
    return () => {};
  }, [successSave]);

  const submitHanlder = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        _id : id,
        name: name,
        price: price,
        image: image,
        brand: brand,
        category: category,
        countInStock: countInStock,
        description: description,
      })
    );
    console.log({
      name: name,
      price: price,
      image: image,
      brand: brand,
      category: category,
      countInStock: countInStock,
      description: description,
    });
  };
  const openModal = (product) => {
    setModalVisible(true);
    setid(product._id);
    setname(product.name);
    setprice(product.price);
    setdescription(product.description);
    setimage(product.image);
    setbrand(product.brand);
    setcategory(product.category);
    setcountInStock(product.countInStock);
  };

  console.log(products);

  return (
    <div>
      <div className="product-header">
        <h3>Products</h3>
      </div>
      <button className="button primary" onClick={() => openModal({})}>
        Create Product
      </button>
      {modalVisible && (
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
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </li>
              <li>
                <label for="price">Price</label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  value={price}
                  onChange={(e) => setprice(e.target.value)}
                />
              </li>
              <li>
                <label for="image">Image</label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  value={image}
                  onChange={(e) => setimage(e.target.value)}
                />
              </li>
              <li>
                <label for="brand">Brand</label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  value={brand}
                  onChange={(e) => setbrand(e.target.value)}
                />
              </li>
              <li>
                <label for="category">Category</label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  value={category}
                  onChange={(e) => setcategory(e.target.value)}
                />
              </li>
              <li>
                <label for="countInStock">CountInStock</label>
                <input
                  type="text"
                  name="countInStock"
                  id="countInStock"
                  value={countInStock}
                  onChange={(e) => setcountInStock(e.target.value)}
                />
              </li>
              <li>
                <label for="description">Description</label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                />
              </li>
              <li>
                <button
                  style={{ textAlign: "center" }}
                  className="button full-width"
                >
                 { id ? 'Update' : "Create"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setModalVisible(false)}
                  className="button secondary"
                >
                  Back
                </button>
              </li>
            </ul>
          </form>
        </div>
      )}
      {products && (
        <div className="product-list">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <button
                      className="button"
                      onClick={() => openModal(product)}
                    >
                      Edit
                    </button>
                    <button className="button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductsScreen;
