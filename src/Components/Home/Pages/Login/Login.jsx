import React, { useContext, useEffect, useState } from "react";
import loginImg from "../../../../assets/others/authentication.gif";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        icon: "success",
        title: "success.",
        text: "You have successfully logged in!",
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="login-bg hero min-h-screen bg-base-200">
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero-content grid lg:grid-cols-2 gap-20">
        <div className="relative ">
          <div className="w-full ">
            <img src={loginImg} alt="" />
          </div>
        </div>
        <div className="card flex-shrink-0 shadow-2xl">
          <h1 className="text-4xl p-5 font-bold">Login!</h1>
          <form onSubmit={handleLogin}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  placeholder="Type Captcha"
                  className="input input-bordered"
                  onBlur={handleValidateCaptcha}
                />
              </div>
              <p className="font-bold text-red-500 text-xl"></p>
              <div className="form-control mt-6">
                <input
                  className="btn bg-yellow-600 border-0"
                  type="submit"
                  disabled={disabled}
                  value="Login"
                />

                <p className="text-center mt-5 font-semibold">
                  New to Bistro Boss? Please{" "}
                  <Link className="text-green-600 font-bold" to="/signUp">
                    signUp
                  </Link>
                </p>
              </div>
          <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
