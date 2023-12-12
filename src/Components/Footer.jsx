import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
             <div className="px-4 md:px-14 bg-black text-white h- py-8 relative ">
        <h1 className=" font-bold bg-gradient-to-r from-lime-400 to-white bg-clip-text text-transparent text-4xl text-center my-5">
          Sumaiya <span>Khan</span>
        </h1>
        <ul className="flex justify-center gap-8 cursor-pointer">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Project</a></li>

          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="flex flex-row gap-4 justify-center md:hidden pt-4">
          <div className=" hover:scale-75 transition duration-200">
           <FaFacebook  size={26}
              color="white"></FaFacebook>
        
          </div>

          <div className=" hover:scale-75 transition duration-200">
            <FaLinkedin size={26} color="white"></FaLinkedin>
          </div>
          <div className=" hover:scale-75 transition duration-200">
            <FaGithub size={26} color="white"></FaGithub>
          </div>
        </div>
        <p className="text-center mt-6 text-gray-200">
          © All rights reserved by Sumaiya Khan
        </p>
      </div>
        </div>
    );
};

export default Footer;