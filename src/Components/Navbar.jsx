
import logo from '../../src/assets/logo.png';

const Navbar = () => {
    const navLinks=<>
    <li><a>Home</a></li>
    <li><a href="#about">About me</a></li>
        <li>
          <a href="#expreience">Experience</a>
          
        </li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    
    </>

const downloadPdf = ()=>{
  console.log('Clicked');
          fetch("../../public/resume.pdf").then((response) => {
            response.blob().then((blob) => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement("a");
              alink.href = fileURL;
              alink.download = "../../public/resume.pdf";
              alink.click();
            });
          });
}
    return (
        <div>
            <div className="bg-[#166534] w-full fixed z-10 ">
<div className="navbar max-w-7xl bg-zinc-800 text-lime-400 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <img src={logo} alt="" className='rounded-full' />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="md:navbar-end ">
    {/* <a className=""  href="https://www.linkedin.com/in/sumaiya-khan-917b01265/" ><FaLinkedin></FaLinkedin></a>
    <a className="" href="https://www.facebook.com/profile.php?id=100045201829910" target="_blank"  rel="noopener noreferrer"  ><FaFacebook></FaFacebook></a>
    <a className="" href="sumaiya.khan32665@gmail.com"><MdEmail></MdEmail></a> */}
      <div>
                <button className="btn text-lime-300 bg-black hover:bg-gray-900 rounded-full px-10" onClick={downloadPdf}>
                  RESUME
                </button>
              </div>
  </div>
</div>
        </div> 
        </div>
    );
};

export default Navbar;