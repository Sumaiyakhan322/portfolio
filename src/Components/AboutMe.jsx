import Aos from "aos";
import { useEffect } from "react";
import "../../src/Styles/rotation.css";
import img from "../../src/assets/aboutme.jpg";


const AboutMe = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration in milliseconds
      once: true, // Only animate once
    });
  }, []);
  return (
    <>
    <div id="about" className=" bg-gradient-to-r from-black to bg-gray-700 md:p-20 p-10">
      <div className="flex items-center text-white md:flex-row flex-col gap-10">
        <div className="md:w-1/2 w-full space-y-5" data-aos="fade-up">
          <h2 className="text-4xl ">About Me</h2>
          <p>I AM AVAILABLE FOR FRONT END PROJECTS</p>
          <p>
            As a MERN stack developer, I possess expertise in developing
            full-stack web applications using MongoDB, Express.js, React.js, and
            Node.js. With a strong command of these technologies, I have the
            ability to design and implement robust and scalable solutions for
            various business needs. I am proficient in creating RESTful APIs,
            building interactive user interfaces with React, handling data
            storage and retrieval with MongoDB, and developing server-side logic
            with Node.js and Express.js. I am experienced in working with
            front-end frameworks, version control systems, and deploying
            applications to cloud platforms.
          </p>
         
          <a className="btn text-lime-300 bg-black hover:bg-gray-900 rounded-full px-10" href="#expreience">
            My Experience
          </a>
         
        </div>
        <div className="md:w-1/2 w-full rounded-lg" data-aos="fade-down">
          <img src={img} alt="" className="rounded-xl" />
        </div>
        
       
      </div>
    
    </div>
   
    </>
    
  );
};

export default AboutMe;
