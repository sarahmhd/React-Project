import "./login.sass";

import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/imgs/logo.svg";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="wrapper">
      <form
        action="#"
        id="login"
        noValidate
        onSubmit={handleSubmit(formSubmit)}
      >
        <div className="img">
          <img src={logo} alt="logo" />
        </div>
        <div className="input-box">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your Email"
            {...register("email", {
              required: true,
              pattern: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
            })}
          />
          <div id="nameHelp" className="form-text text-danger mx-2">
            {errors?.email?.type === "required" && (
              <span>this field is required</span>
            )}
            {errors?.email?.type === "pattern" && (
              <span>Please Enter Valid Email</span>
            )}
          </div>
        </div>
        <div className="input-box">
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            {...register("password", { required: true, minLength: 6 })}
          />
          <div id="nameHelp" className="form-text text-danger mx-2">
            {errors?.password?.type === "required" && (
              <span>this field is required</span>
            )}
            {errors?.password?.type === "minLength" && (
              <span>Password must be at least 6 characters</span>
            )}
          </div>
        </div>
        <div className="policy d-flex flex-column align-items-start">
          <div className="d-flex align-items-center">
            <input type="checkbox" />
            <h3>remember me</h3>
          </div>
        </div>
        <div className="input-box button">
          <input type="Submit" defaultValue="Login" />
        </div>
        <div className="text">
          <h3>
            Don't have an account?
            <Link to="/register">Register now</Link>
          </h3>
        </div>
        {/* <div className="text text-center">
          <Link to={"/forget-password"}>forget password ?</Link>
        </div> */}
      </form>
    </div>
  );
};

export default Login;
