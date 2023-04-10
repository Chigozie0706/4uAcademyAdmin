import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [backendError, setBackendError] = useState([])
  const [errors, setErrors] = useState({});
  const history = useHistory();


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   history.push('/users');
  // };

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  // const handleInput = ({ target: { name, value } }) =>
  // setValues((p) => ({ ...p, [name]: value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);

    if (err.email === '' && err.password === '') {
      axios
        .post('http://localhost:34567/api/loginadmin', values)
        .then((res) => {
          if (res.data === 'Success') {
            history.push('./users');
          } else {
            alert('No record existed');
          }
        })
        .catch((err) => console.log(err));
    }
  };



  return (
  
    <div className="d-flex justify-content-center align-items-center bg-success vh-100">
      <div className="bg-light p-3 rounded w-25">
        <h2>Login</h2>
        <form action="" onSubmit={handleSubmit}>
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
              placeholder="Enter password"
              name="password"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button
            type="submit"
            // onClick={handleClick}
            className="btn btn-light w-100 rounded-0">
            Login
          </button>
          <p>You agree to our terms and policies</p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
