import React from 'react';
import { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';


const SocialLogin = () => {

    const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
    
    const { googleSignIn } = useContext(AuthContext);



    return (
        <div>
             <div className="divider">Social Media Login</div>
              <div className="text-center flex justify-center gap-8">
                <button
                //   onClick={handleGoogleLogin}
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