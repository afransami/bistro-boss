import React from "react";
import { Helmet } from "react-helmet";
import {
  FaBars,
  FaCalendarAlt,
  FaComment,
  FaHamburger,
  FaHome,
  FaRegCommentAlt,
  FaShoppingCart,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { MdEmail, MdShoppingBag } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  const isAdmin = true;
  return (
    <div className="drawer drawer-mobile">
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-yellow-600">
          {/* <!-- Sidebar content here --> */}

          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home" className="uppercase">
                  <FaHome></FaHome> Admn Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/resevation" className="uppercase">
                  <FaUtensils></FaUtensils>Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history" className="uppercase">
                  <FaWallet></FaWallet> Managa Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings" className="uppercase">
                  <FaWallet></FaWallet> Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers" className="uppercase">
                  <FaWallet></FaWallet> All users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home" className="uppercase">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/resevation" className="uppercase">
                  <FaCalendarAlt></FaCalendarAlt>reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history" className="uppercase">
                  <FaWallet></FaWallet> payment history
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart" className="uppercase">
                  <FaShoppingCart></FaShoppingCart> my cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addreview" className="uppercase">
                  <FaRegCommentAlt></FaRegCommentAlt> add review
                </NavLink>
              </li>
            </>
          )}

          <p className="divider"></p>
          <li>
            <NavLink to="/" className="uppercase">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="uppercase">
              <FaBars></FaBars> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="uppercase">
              <MdShoppingBag></MdShoppingBag> shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="uppercase">
              <MdEmail></MdEmail> contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
