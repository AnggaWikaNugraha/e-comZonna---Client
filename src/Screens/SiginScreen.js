import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../redux/action/userActions";

const SigninScreen = (props) => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const userSigin = useSelector((state) => state.userSignin);
  console.log(userSigin)
  const { loading, userInfo, error } = userSigin;

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    return () => {};
  }, [userInfo]);

  const submitHanlder = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <div className="form">
      <form onSubmit={submitHanlder}>
        <ul className="form-container">
          <li>
            {loading && <div>loading ...</div>}
            {error && <div>loading ..</div>}
          </li>
          <li>
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setemail(e.target.value)}
            />
          </li>
          <li>
            <label for="password">Email</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </li>
          <li>
            <button type="submit" className="button primary">
              Sign In
            </button>
          </li>
          <li>New to amazona?</li>
          <li>
            <Link
              style={{ textAlign: "center" }}
              to="/register"
              className="button full-width"
            >
              Create account
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SigninScreen;
