import AboutMe from "../Components/AboutMe";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
           <AboutMe></AboutMe>
           <hr />
           <Education></Education>
           <hr />
           <Skills></Skills>
           <hr />
           <Experience></Experience>
           <hr />
              <Projects></Projects>  
              <hr />
              <Contact></Contact>
              <hr />
              <Footer></Footer>
            </div>
       
    );
};

export default Home;