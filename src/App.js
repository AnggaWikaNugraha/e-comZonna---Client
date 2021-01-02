import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductsScreen from "./Screens/ProductsScreen";
import CartScreen from "./Screens/CartScreen";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">
              <a href="index.html">amazona</a>
            </Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>

            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>

        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductsScreen} />
            <Route path="/" exact component={HomeScreen} />
            <Route path="/cart/:id?" exact component={CartScreen} />
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
