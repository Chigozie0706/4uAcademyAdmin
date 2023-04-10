import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';

const SignUp = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleInput = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));
  };

  // const handleInput = ({ target: { name, value } }) =>
  // setValues((p) => ({ ...p, [name]: value }));

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setErrors(Validation(values));
  //   fetch('http://localhost:34567/api/signup', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify({ values }),
  //   })
  //     .then((res) => {
  //       history.push('./');
  //     })
  //     .then((err) => console.log(err));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setErrors(Validation(values));
    const err = Validation(values);
    setErrors(err);

    if (err.name === '' && err.email === '' && err.password === '') {
      axios
        .post('http://localhost:34567/api/signup', values)
        .then((res) => {
          history.push('./');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    // <div>
    //   <input
    //     type="text"
    //     placeholder="username"
    //     onChange={(e) => setUsername(e.target.value)}
    //   />
    //   <input
    //     type="password"
    //     placeholder="password"
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button onClick={handleClick}>Login</button>
    // </div>
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="">
              <strong>Name</strong>
            </label>
            <input
              type="name"
              name="name"
              placeholder="name"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              name="password"
              onChange={handleInput}
              placeholder="Enter password"
              className="form-control rounded-0"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-success w-100 rounded-0">
            Sign Up
          </button>
          <p>You are agree to our terms and policies</p>
          <Link
            to="/"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Log In
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
