import "../login/login.sass";

import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);
    localStorage.setItem("user-data", JSON.stringify(data));
    navigate("/login");
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
            id="name"
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: true,
            })}
          />
          <div id="nameHelp" className="form-text text-danger mx-2">
            {errors?.name?.type === "required" && (
              <span>this field is required</span>
            )}
          </div>
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
        <div className="input-box">
          <input
            id="repeat_pass"
            type="password"
            placeholder="Confirm password"
            {...register("repeat_pass", {
              required: true,
              validate: (val) =>
                val === watch("password") || "password doesn't match",
            })}
          />
          <div id="nameHelp" className="form-text text-danger mx-2">
            {errors?.repeat_pass?.type === "required" && (
              <span>this field is required</span>
            )}
            {errors?.repeat_pass?.type === "validate" && (
              <span>{errors?.repeat_pass?.message}</span>
            )}
          </div>
        </div>
        <div className="policy d-flex flex-column align-items-start">
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              {...register("checkbox", { required: true })}
            />
            <h3>
              I agree to the <span>Privacy Policy</span>
            </h3>
          </div>
          <div id="nameHelp" className="form-text text-danger mx-2">
            {errors?.checkbox?.type === "required" && (
              <span className="">this field is required</span>
            )}
          </div>
        </div>
        <div className="input-box button">
          <input type="Submit" defaultValue="Login" />
        </div>
        <div className="text">
          <h3>
            Already have an account?
            <Link to={"/login"}>Login now</Link>
          </h3>
        </div>
        {/* <div className="text text-center">
          <Link to={"/forget-password"}>forget password ?</Link>
        </div> */}
      </form>
    </div>
  );
};

export default Register;
