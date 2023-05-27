import React, { useContext } from "react";
import loginImg from "../../../../assets/others/authentication1.png";
import { Form, Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../../Provider/AuthProvider";
import './../Login/Login.css';


const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {createUser} = useContext(AuthContext)

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then (result =>{
        const loggedUser = result.user
        console.log(loggedUser);
    })
  };



  return (
    <div className="login-bg hero min-h-screen bg-base-200">
        <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero-content grid lg:grid-cols-2 gap-20">
        <div className="relative ">
          <div className="w-full ">
            <img className="bg-transparent" src={loginImg} alt="" />
          </div>
        </div>
        <div className="card flex-shrink-0 shadow-2xl">
          <h1 className="text-4xl p-5 font-bold">Sign Up!</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {...register("name")}
                  {...register("name", { required: true })}   
                  className="input input-bordered"
                />
                {errors.name && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email")}
                  {...register("email", { required: true })}
                  {...register("email", { required: true })}            
                  className="input input-bordered"
                />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span>Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", { required: true, minLength:6, pattern: /[A-Za-z]+/i})}    
                  className="input input-bordered"
                />
                {errors.password?.type === 'required' && <p className="text-red-500" role="alert">password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-500" role="alert">password must be 6 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-500" role="alert">password must be at least 1 uppercase or letter case</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <p className="font-bold text-red-500 text-xl"></p>
              <div className="form-control mt-6">
                <input
                  className="btn bg-yellow-600 border-0"
                  type="submit"
                  //   disabled={disabled}
                  value="Sign Up"
                />

                <p className="text-center mt-5 font-semibold">
                  Already have an account? Please
                  <Link className="text-green-600 font-bold" to="/login">
                   <span> Login</span>
                  </Link>
                </p>
              </div>
              <div className="divider">Social Media Sign Up</div>
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

export default SignUp;