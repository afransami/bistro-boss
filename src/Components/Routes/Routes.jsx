import React from 'react';

import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Home/Home/Home';
import Menu from '../Home/Pages/Menu';

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
            path:'menu',
            element: <Menu></Menu>
        }
      ]
    },
  ]);

