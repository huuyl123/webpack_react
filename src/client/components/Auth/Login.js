import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line no-shadow
const Login = () => {
  return (
    <div className="container text-light p-5 col-lg-5 col-md-8">
      <div className="p-5">
        <h2 className="color-pale-green text-light">Sign In</h2>
        <p className="lead">
          <i className="fas fa-user color-pale-green text-light mr-2" /> Sign
          Into Your Account
        </p>
        <form className="form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
            />
          </div>
          <input
            type="submit"
            className="btn bg-main btn-lg text-light "
            value="Login"
          />
        </form>
        <p className="my-1 text-light d-flex">
          Do not have an account?{' '}
          <Link to="/register">
            <p className="text-white-50 ml-2">Sign Up</p>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
