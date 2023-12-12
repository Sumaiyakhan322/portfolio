import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from '../../src/assets/logo.png';

const Navbar = () => {
    const navLinks=<>
    <li><a>Home</a></li>
    <li><a>About me</a></li>
        <li>
          <a>Experience</a>
          
        </li>
        <li><a href="#about">Projects</a></li>
        <li><a>Contact</a></li>
    
    </>
    return (
        <div>
            <div className="w-full fixed z-10">
<div className="navbar max-w-7xl bg-gray-900 text-lime-400 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <img src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end space-x-4">
    <a className=""  href="https://www.linkedin.com/in/sumaiya-khan-917b01265/" ><FaLinkedin></FaLinkedin></a>
    <a className="" href="https://www.facebook.com/profile.php?id=100045201829910" target="_blank"  rel="noopener noreferrer"  ><FaFacebook></FaFacebook></a>
    <a className="" href="sumaiya.khan32665@gmail.com"><MdEmail></MdEmail></a>
  </div>
</div>
        </div> 
        </div>
    );
};

export default Navbar;