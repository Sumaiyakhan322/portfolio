import img1 from "../../src/assets/project11.png";
import img2 from "../../src/assets/project12.PNG";
import img3 from "../../src/assets/project13.PNG";
import img4 from "../../src/assets/project14.PNG";

import img5 from "../../src/assets/project21.PNG";
import img6 from "../../src/assets/project22.PNG";
import img7 from "../../src/assets/project23.PNG";
import img8 from "../../src/assets/project24.PNG";

import img9 from "../../src/assets/project31.PNG";
import img10 from "../../src/assets/project32.PNG";
import img11 from "../../src/assets/project33.PNG";

import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";

const Projects = () => {
  return (
    <div id="projects" className="bg-gradient-to-r from-black to bg-gray-700 md:p-20 p-10 text-white  ">
      <h2 className="text-4xl text-center font-bold my-10">
        My Top 3 Projects
      </h2>
      <div>
        {/* 1st project */}
        <div className="flex md:flex-row flex-col items-center gap-20">
           <div className=" md:w-1/4 w-full">
          <div className="h-96 w-full carousel carousel-vertical rounded-box">
            <div className="carousel-item  border w-full h-full">
              <img src={img1} className="h-full w-full" />
            </div>
            <div className="carousel-item h-full w-full">
              <img src={img2} className="h-full w-full" />
            </div>
            <div className="carousel-item h-full w-full">
              <img src={img3} className="h-full w-full" />
            </div>
            <div className="carousel-item h-full w-full">
              <img src={img4} className="h-full w-full" />
            </div>
          
            </div>
            <div className=" items-center gap-10 mt-5">
                <p className=" text-white mb-5 font-bold">See More:</p>
               <div className="flex gap-4 ">
               <a href="https://fitness-traker-ff4bf.web.app/" className="btn text-lime-300 bg-black hover:bg-gray-900 rounded-full px-7">Live Site</a>
                <a href="https://github.com/Sumaiyakhan322/fitness-tracker" className="btn text-lime-300 bg-black hover:bg-gray-900 rounded-full px-7">Code Link</a>
               </div>
            </div>
          </div>

          <div className="space-y-4 md:w-3/4 ">
            <h2 className="text-3xl font-bold">Project Name:<span className="text-lime-300">Fit-Flex-Online</span></h2>
            <p className="font-bold">Project Short Description:<span className="font-normal">This is a online gym platform.Where One can esaily joins classes.We have many trainers they provides classes in many time slots.Members can easily apply for a trainer and embark on a transformative fitness experience. Join us and make every workout count towards a healthier, stronger you!</span></p>
            <p className="font-bold flex gap-5 md:flex-row flex-col">Tools Used in this project: <span> <div className="flex md:items-center md:justify-center  text-3xl  md:gap-10 gap-2 text-lime-400 ">
            <SiTailwindcss className="hover:text-lime-300"></SiTailwindcss>
            <RiJavascriptFill className="hover:text-lime-300"></RiJavascriptFill>
            <FaReact className="hover:text-lime-300"></FaReact>
            <DiMongodb className="hover:text-lime-300"></DiMongodb>
            <SiFirebase className="hover:text-lime-300"></SiFirebase>
            <IoLogoNodejs></IoLogoNodejs>
        </div></span></p>

          </div>
        </div>
        {/* 2nd project */}
        <div className="my-20 flex md:flex-row flex-col items-center gap-20">
           <div className=" md:w-1/4 w-full">
          <div className="h-96 w-full carousel carousel-vertical rounded-box">
            <div className="carousel-item  border w-full h-full">
              <img src={img5} className="h-full w-full" />
            </div>
            <div className="carousel-item h-full w-full">
              <img src={img6} className="h-full w-full" />
            </div>
            <div className="carousel-item h-full w-full">
              <img src={img7} className="h-full w-full" />
            </div>
            <div className="carousel-item h-full w-full">
              <img src={img8} className="h-full w-full" />
            </div>
          
            </div>
            <div className=" items-center gap-10 mt-5">
                <p className=" text-white mb-5 font-bold">See More:</p>
               <div className="flex gap-4 ">
               <a href="https://foody-brands.web.app//" className="btn text-lime-300 bg-black hover:bg-gray-900 rounded-full px-7">Live Site</a>
                <a href="https://github.com/Sumaiyakhan322/food-brands" className="btn text-lime-300 bg-black hover:bg-gray-900 rounded-full px-7">Code Link</a>
               </div>
            </div>
          </div>

          <div className="space-y-4 md:w-3/4 ">
            <h2 className="text-3xl font-bold">Project Name:<span className="text-lime-300">Foody-Brands</span></h2>
            <p className="font-bold">Project Short Description:<span className="font-normal">The website includes a login and register page, allowing users to navigate between them. Users who are logged in can add products on the `Add to Product`` page, and these products are stored in a database.Clicking on a brand name displays all products associated with that brand. If there are no products for a particular brand, a message indicating the absence of products is shown. The `All Brands Product`` page displays cards for all products, each containing `Details`` and `Update`buttons.</span></p>
            <p className="font-bold flex gap-5 md:flex-row flex-col ">Tools Used in this project: <span> <div className="flex items-center justify-center  text-3xl  md:gap-10 gap-2 text-lime-400 ">
            <SiTailwindcss className="hover:text-lime-300"></SiTailwindcss>
            <RiJavascriptFill className="hover:text-lime-300"></RiJavascriptFill>
            <FaReact className="hover:text-lime-300"></FaReact>
            <DiMongodb className="hover:text-lime-300"></DiMongodb>
            <SiFirebase className="hover:text-lime-300"></SiFirebase>
            <IoLogoNodejs></IoLogoNodejs>
           
        </div></span></p>

          </div>
        </div>
        {/* 3rd project */}
        <div className=" flex md:flex-row flex-col items-center gap-20">
           <div className=" md:w-1/4 w-full">
          <div className="h-96 w-full carousel carousel-vertical rounded-box">
            <div className="carousel-item  border w-full h-full">
              <img src={img10} className="h-full w-full" />
            </div>
            <div className="carousel-item h-full w-full">
              <img src={img11} className="h-full w-full" />
            </div>
            <div className="carousel-item h-full w-full">
              <img src={img9} className="h-full w-full" />
            </div>
           
          
            </div>
            <div className=" items-center gap-10 mt-5">
                <p className=" text-white mb-5 font-bold">See More:</p>
               <div className="flex gap-4 ">
               <a href="https://webbazaar-creations.web.app/" className="btn text-lime-300 bg-black hover:bg-gray-900 rounded-full px-7">Live Site</a>
                <a href="https://github.com/Sumaiyakhan322/web-developer" className="btn text-lime-300 bg-black hover:bg-gray-900 rounded-full px-7">Code Link</a>
               </div>
            </div>
          </div>

          <div className="space-y-4 md:w-3/4 ">
            <h2 className="text-3xl font-bold">Project Name:<span className="text-lime-300">Web-Bazaar</span></h2>
            <p className="font-bold">Project Short Description:<span className="font-normal">This website features six main sections, including a navigation bar, banner, a display of all brands with images, a team section, features, and a footer. It offers both login and register pages, allowing users to seamlessly switch between them. Once logged in, users can access the `Add Jobs`` page, enabling them to add jobs that will be stored in the database.In the My Posts Jobs section, users can view and manage the jobs they have posted, with options to update or delete them. The home page showcases tabs with all available jobs, allowing users to bid on any job except their own.For bid management, the Bid Requests page displays bids on the user`s posted jobs, providing options to accept or reject bids. If a user takes action, the corresponding button is hidden. In the My Bids section, users can track the status of jobs they have bid on, categorized as in progress, pending, or complete. In the `In Progress`` status, users can complete the job.</span></p>
            <p className="font-bold flex gap-5 md:flex-row flex-col ">Tools Used in this project: <span> <div className="flex items-center justify-center  text-3xl md:gap-10 gap-2 text-lime-400 ">
            <SiTailwindcss className="hover:text-lime-300"></SiTailwindcss>
            <RiJavascriptFill className="hover:text-lime-300"></RiJavascriptFill>
            <FaReact className="hover:text-lime-300"></FaReact>
            <DiMongodb className="hover:text-lime-300"></DiMongodb>
            <SiFirebase className="hover:text-lime-300"></SiFirebase>
            <IoLogoNodejs></IoLogoNodejs>
           
        </div></span></p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
