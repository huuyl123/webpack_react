import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="container text-light p-5 col-lg-5 col-md-8">
      <div className="p-4">
        <h2 className="color-pale-green text-light">Sign Up</h2>
        <p className="lead">
          <i className="fas fa-user color-pale-green text-light mr-2" /> Create
          Your Account
        </p>
        <form className="form">
          <div className="form-group">
            <input type="text" placeholder="Name" name="name" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" name="email" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" name="password" />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
            />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Code" name="code" />
            <small className="form-text text-warning">
              If you are a student you can skip this field
            </small>
          </div>
          <input
            type="submit"
            className="btn-submit btn bg-main btn-lg text-light"
            value="Register"
          />
        </form>
        <p className="my-1 text-light d-flex">
          Already have an account?{' '}
          <Link to="/login">
            <p className="text-white-50 ml-2">Sign In</p>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
