import React, { useContext, useEffect, useState } from "react";
import loginImg from "../../../../assets/others/authentication.gif";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import './Login.css';

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";


const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { singIn } = useContext(AuthContext);
  const Navigate = useNavigate()
  const location= useLocation()
  const from= location.state?.from?.pathname || '/';


  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    singIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        icon: 'success',
        title: 'success.',
        text: 'You have successfully logged in!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      Navigate(from, {replace:true})
    });
  };


  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    console.log(user_captcha_value);
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
          <Form onSubmit={handleLogin}>
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
              <div className="divider">Social Media Login</div>
              <div className="text-center flex justify-center gap-8">
                <button className="btn btn-outline btn-circle text-3xl text-yellow-600">
                  <FaGoogle></FaGoogle>
                </button>
                <button className="btn btn-outline btn-circle text-3xl text-yellow-600">
                  <FaFacebook></FaFacebook>
                </button>
                <button className="btn btn-outline btn-circle text-3xl text-yellow-600">
                  <FaGithub></FaGithub>
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
