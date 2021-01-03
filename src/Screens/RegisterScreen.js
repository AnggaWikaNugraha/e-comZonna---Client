import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register} from "../redux/action/userActions";

const SigninScreen = (props) => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [repassword, setrepassword] = useState("");
  const userRegister = useSelector((state) => state.userRegister);
  console.log(userRegister)
  const { loading, userInfo, error } = userRegister;

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    return () => {};
  }, [userInfo]);

  const submitHanlder = (e) => {
    e.preventDefault();
    dispatch(register(name,email, password));
  };

  return (
    <div className="form">
      <form onSubmit={submitHanlder}>
        <ul className="form-container">
          <li>
            {loading && <div>loading ...</div>}
            {error && <div>{error}</div>}
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
            <label for="repassword">repeat Password</label>
            <input
              type="password"
              name="repassword"
              id="repassword"
              onChange={(e) => setrepassword(e.target.value)}
            />
          </li>
          <li>
            <button type="submit" className="button primary">
              Create account
            </button>
          </li>
          <li>have account?</li>
          <li>
            <Link
              style={{ textAlign: "center" }}
              to="/login"
              className="button full-width"
            >
              Sign in
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SigninScreen;
