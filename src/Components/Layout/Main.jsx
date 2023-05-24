import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Shared/Footer/Footer';
import Navbar from '../Home/Shared/Navbar/Navbar';


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
         <div className="min-h-[calc(100vh-298px)]"><Outlet></Outlet></div>  
          <Footer></Footer>
        </div>
    );
};

export default Main;