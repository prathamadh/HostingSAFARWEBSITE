import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../image/logo.jpg';


function Navbar() {
    return (
        <header class="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
          
            <h1 class="w-3/12">
                <a href="">
                {/* <img className="h-10 w-10" src="C:\Users\acm\Desktop\ethoshacathon\SAFAR\src\components\collection\image\safarlogo.png" alt="" /> */}
                <img src={logo} alt="logo" className="image-responsive rounded-circle" style={{ height: "50px", width: "50px" }} />
                </a>
            </h1>
        
            
            <nav class="nav font-semibold text-lg">
                <ul class="flex items-center">
                    <li class="p-4 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer active">
                      <a href="">Home</a>
                    </li>
                    <li class="p-4 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer">
                      <a href="">360-View</a>
                    </li>
                    <li class="p-4 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer">
                      <a href="">Explore</a>
                    </li>
                    <li class="p-4 border-b-2 border-sky-500 border-opacity-0 hover:border-opacity-100 hover:text-sky-500 duration-200 cursor-pointer">
                      <a href="">About</a>
                    </li>
                </ul>
            </nav>
        
           
            <div class="w-3/12 flex justify-end">
                <a href="" className="font-medium">Log In             </a>
                
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                     Log in
                </button>                
            </div>
        </header>
    );
}
export default Navbar;