import React from "react";
import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);

      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };

      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          // Swal.fire({
          //   icon: "success",
          //   title: "success.",
          //   text: "You have successfully logged in!",
          // });
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div>
      <div className="divider">Social Media Login</div>
      <div className="text-center flex justify-center gap-8">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-circle text-3xl text-yellow-600"
        >
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
  );
};

export default SocialLogin;
