import ProgressBar from "@ramonak/react-progress-bar";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiFirebase } from "react-icons/si";

const Skills = () => {
    return (
        <div className="bg-gradient-to-r from-black to bg-gray-700 md:p-20 p-10 text-white ">
        <h2 className="text-4xl text-center font-bold my-10">My Skills</h2>
        <p className="text-center md:text-lg  text-sm mb-10">As a MERN developer with one year of experience, I specialize in building web applications using MongoDB, Express.js, React, and Node.js. My responsibilities include database design, server-side development, creating RESTful APIs, and developing modular and user-friendly interfaces. I`m proficient in Git for version control, implement testing strategies, and contribute to the full software development life cycle. I have experience with deployment and optimization, and I continuously learn and adapt to stay current with industry trends.</p>
        <div className="flex items-center justify-center my-10 text-3xl  gap-10 ">
            <SiTailwindcss className="hover:text-lime-300"></SiTailwindcss>
            <RiJavascriptFill className="hover:text-lime-300"></RiJavascriptFill>
            <FaReact className="hover:text-lime-300"></FaReact>
            <DiMongodb className="hover:text-lime-300"></DiMongodb>
            <SiFirebase className="hover:text-lime-300"></SiFirebase>
        </div>

        <div className="flex flex-col gap-5">
            <ProgressBar
              completed={90}
              bgColor="linear-gradient(to right,black,#e1ff89)"
              labelAlignment="left"
              labelColor="#fdf7f7"
              transitionDuration="4s"
              animateOnRender
              maxCompleted={100}
              customLabel="TAILWIND"
            />
            <ProgressBar
              completed={70}
              bgColor="linear-gradient(to right,black,#e1ff89)"
              labelAlignment="left"
              labelColor="#fdf7f7"
              transitionDuration="4s"
              animateOnRender
              maxCompleted={100}
              customLabel="JAVASCRIPT"
            />
            <ProgressBar
              completed={75}
              bgColor="linear-gradient(to right,black,#e1ff89)"
              labelAlignment="left"
              labelColor="#fdf7f7"
              transitionDuration="4s"
              animateOnRender
              maxCompleted={100}
              customLabel="REACT"
            />
            <ProgressBar
              completed={70}
              bgColor="linear-gradient(to right,black,#e1ff89)"
              labelAlignment="left"
              labelColor="#fdf7f7"
              transitionDuration="4s"
              animateOnRender
              maxCompleted={100}
              customLabel="MONGODB"
            />
            <ProgressBar
              completed={50}
              bgColor="linear-gradient(to right,black,#e1ff89)"
              labelAlignment="left"
              labelColor="#ffff"
              transitionDuration="4s"
              animateOnRender
              maxCompleted={100}
              customLabel="EXPRESS.JS"
            />
          </div>
        </div>
    );
};

export default Skills;