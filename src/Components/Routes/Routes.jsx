import React from 'react';

import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Home/Home/Home';
import Menu from '../Home/Pages/Menu';
import OrderFood from '../Home/Pages/OrderFood';
import ContactUs from '../Home/Pages/ContactUs/ContactUs';

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
        }
      ]
    },
  ]);

