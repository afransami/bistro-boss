import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart]= useCart()

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have successfully log out!",
      footer: '<a href="">Why do I have this issue?</a>'
    });
  };

  const NavOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contactUs">Contact Us</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <Link to="/dashboard/mycart">
          <button className="flex gap-1">
          <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+ {cart?.length || 0}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <span className="flex justify-center items-center mr-4">
            {user?.displayName}
          </span>
          <span className="flex justify-center items-center"><button onClick={handleLogOut} className="btn btn-active btn-ghost">
            Log out
          </button>{" "}</span>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-base-100 bg-opacity-30 max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavOptions}</ul>
      </div>
      <div className="navbar-end">
        <Link>
          <button className="btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
