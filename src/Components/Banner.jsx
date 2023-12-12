import profileImg from '../../src/assets/porfile.jpg'
import banner from '../../src/assets/banner.jpg'
import Typewriter from 'typewriter-effect';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";


const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      once: true, // Only animate once
    });
  }, []);
    return (
        <div className="w-full pt-16">

<div className="hero min-h-screen " style={{backgroundImage: `url(${banner})`}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content " >
    <div className="flex md:flex-row flex-col justify-between items-center">
     <div className='w-1/2 flex items-center justify-center text-left md:p-20 py-20 ' data-aos="fade-right">
     <div>
     <h1 className="mb-5 lg:text-5xl text-2xl font-bold">Greetings,I am</h1>
    
     <p className='font-bold bg-gradient-to-r from-lime-400 to-white bg-clip-text text-transparent text-4xl'>Sumaiya Khan</p>
    <p className='font-bold text-2xl my-4 flex gap-3' ><span>I am</span> <span>  <Typewriter 
  options={{
    strings: [' Front-End-Developer'," Mern Developer",'React Developer'],
    autoStart: true,
    loop: true,
  }}
/></span>
   </p> 
      <p className="mb-5" >As a seasoned MERN stack virtuoso, I channel my passion for crafting immersive web applications into every line of code. My journey is fueled by the desire to transform static interfaces into dynamic, user-centric masterpieces.In quest of a challenge, I seek a role that not only values proficiency but embraces innovation. </p>
      <div className='flex gap-6 items-center text-lime-300 mt-16'>
      <a  className="btn text-lime-300 bg-black hover:bg-gray-900 rounded-full px-10" href="#contact">Let`s talk</a>
      <a className=" text-3xl hover:scale-125 transition duration-200"  href="https://www.linkedin.com/in/sumaiya-khan-917b01265/" ><FaLinkedin></FaLinkedin></a>
    <a className=" text-3xl hover:scale-125 transition duration-200" href="https://www.facebook.com/profile.php?id=100045201829910" target="_blank"  rel="noopener noreferrer"  ><FaFacebook></FaFacebook></a>
    <a className="text-3xl hover:scale-125 transition duration-200" href="sumaiya.khan32665@gmail.com"><MdEmail></MdEmail></a>
      </div>
      
     </div>
     </div>
     <div className='md:w-1/2  center w-full ' data-aos="fade-left" >
        <img src={profileImg} alt="" className='rounded-full w-80 h-80 border-2 block mx-auto border-lime-300' />

     </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;