import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
emailjs.init("ZYlfDB9H57G6wKORU");
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const message=e.target.des.value;
        console.log(name,email,message)
            Swal.fire({
            position: "center",
            icon: "success",
            title: `Successfully sent  by via emailjs`,
            showConfirmButton: false,
            timer: 1500,
          })
       
        // const templateParams = {
        //     to_name:`${name}` ,
        //     from_name:`${email}`,
        //     message:`${message}`
        //   };
    
        //   await emailjs.send("service_5zq1qlr", "template_6tsaxvk", templateParams);
        //   Swal.fire({
        //     position: "center",
        //     icon: "success",
        //     title: `Successfully sent  by via emailjs`,
        //     showConfirmButton: false,
        //     timer: 1500,
        //   });
          e.target.reset();
        


      }
      
    return (
        <div className="bg-gradient-to-r from-black to bg-gray-700 md:p-20 p-10 text-white">
        <h2 className="text-4xl text-center font-bold my-10">Please Contact Me</h2>
           <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h2 className="font-bold text-3xl">Let’s Discuss Your Project</h2>
      <p className="py-6">Feel free to get in touch with me for any inquiries, collaboration opportunities, or just to say hello!  i am a passionate MERN stack developer ready to tackle exciting projects and challenges. Reach out through the provided contact form, and I will get back to you as soon as possible. Let is turn your ideas into powerful and efficient web solutions!</p>
      <div className='flex gap-6 items-center text-lime-300 mt-16'>
      <p className="text-white font-bold">Also  Join Me With </p>
      <a className=" text-3xl hover:scale-125 transition duration-200"  href="https://www.linkedin.com/in/sumaiya-khan-917b01265/" ><FaLinkedin></FaLinkedin></a>
    <a className=" text-3xl hover:scale-125 transition duration-200" href="https://www.facebook.com/profile.php?id=100045201829910" target="_blank"  rel="noopener noreferrer"  ><FaFacebook></FaFacebook></a>
    <a className="text-3xl hover:scale-125 transition duration-200" href="sumaiya.khan32665@gmail.com"><MdEmail></MdEmail></a>
      </div>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl border border-lime-300">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lime-300">Name</span>
          </label>
          <input type="text" placeholder="Your Name" className="input input-bordered text-black" name="name" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lime-300">Email</span>
          </label>
          <input type="email" placeholder="Your Email" className="input input-bordered text-black" required  name="email"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lime-300">Message</span>
          </label>
          <textarea className="textarea textarea-bordered text-black" placeholder="Message" name="des"></textarea>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn text-lime-300 bg-black hover:bg-gray-900 rounded-full px-10">Sent Message</button>
        </div>
      </form>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Contact;