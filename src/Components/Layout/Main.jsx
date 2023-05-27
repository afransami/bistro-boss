import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Home/Shared/Footer/Footer';
import Navbar from '../Home/Shared/Navbar/Navbar';


const Main = () => {
    const location= useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp');    
    return (
        <div>
            { noHeaderFooter || <Navbar></Navbar>}
         <div className="min-h-[calc(100vh-298px)]"><Outlet></Outlet></div>  
          {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;