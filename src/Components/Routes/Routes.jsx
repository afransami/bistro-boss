import React from 'react';

import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Home/Home/Home';
import Menu from '../Home/Pages/Menu';
import OrderFood from '../Home/Pages/OrderFood';
import ContactUs from '../Home/Pages/ContactUs/ContactUs';
import Login from '../Home/Pages/Login/Login';
import SignUp from '../Home/Pages/SignUp/SignUp';
import Secret from '../Home/Shared/Secret/Secret';
import PrivateRoute from './PrivateRoute';

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'contactUs',
            element: <ContactUs></ContactUs>
        },
        {
            path:'menu',
            element: <Menu></Menu>
        },
        {
            path:'order/:category',
            element: <OrderFood></OrderFood>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
  ]);

