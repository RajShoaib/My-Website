
// import React, { useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import emailjs from 'emailjs-com';
// import { styles } from '../styles';
// import { EarthCanvas } from './canvas';
// import { SectionWrapper } from '../hoc';
// import { slideIn } from '../utils/motion';
// import { linkedin, githubs } from '../assets';
// import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
// import { FaLinkedinIn, FaFacebookF, FaGoogle } from 'react-icons/fa';

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         'service_0ledi5j', // replace with your EmailJS Service ID
//         'template_u5uf58s', // replace with your EmailJS Template ID
//         form,
//         'kZEFw9Mpk6vqj_jys'
//       )
//       .then(
//         (result) => {
//           setLoading(false);
//           setSuccessMessage('🎉 Your message has been sent successfully!');
//           setErrorMessage(''); // Clear any previous error message
//           setForm({
//             name: '',
//             email: '',
//             message: '',
//           });

//           setTimeout(() => {
//             setSuccessMessage(''); // Clear the success message after a few seconds
//           }, 5000);
//         },
//         (error) => {
//           setLoading(false);
//           setErrorMessage('❌ Something went wrong. Please try again.');
//           setSuccessMessage(''); // Clear any previous success message

//           setTimeout(() => {
//             setErrorMessage(''); // Clear the error message after a few seconds
//           }, 5000);
//         }
//       );
//   };

//   return (
//     <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden ">
//       <motion.div
//         variants={slideIn('left', 'tween', 0.2, 1)}
//         className="flex-[0.75] bg-black-100 p-8 rounded-2xl max-w-[520px] border-[1px] border-green-400 shadow-card"
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>

//         <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-4">
//           <label className="flex flex-col">
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Enter Name"
//               className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//               required
//             />
//           </label>

//           <label className="flex flex-col">
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Your Email"
//               className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//               required
//             />
//           </label>

//           <label className="flex flex-col">
//             <textarea
//               type="text"
//               name="message"
//               value={form.message}
//               rows="7"
//               onChange={handleChange}
//               placeholder="Your Message"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//               required
//             />
//           </label>

//           <button
//             type="submit"
//             className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
//           >
//             {loading ? 'Sending...' : 'Send'}
//           </button>
//         </form>
//         <div className="flex gap-4 mt-8">
//           <a
//             href="https://www.linkedin.com/in/rajashoaib/"
//             target="_blank"
//             className="social-icons"
//           >
//             <FaLinkedinIn />
//           </a>
//           <a
//             href="https://github.com/RajShoaib"
//             target="_blank"
//             className="social-icons"
//           >
//             <AiFillGithub />
//           </a>
//         </div>

//         {successMessage && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="mt-4 text-green-400 font-medium text-lg"
//           >
//             {successMessage}
//           </motion.div>
//         )}

//         {errorMessage && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="mt-4 text-red-400 font-medium text-lg"
//           >
//             {errorMessage}
//           </motion.div>
//         )}
//       </motion.div>

//       <motion.div
//         variants={slideIn('right', 'tween', 0.2, 1)}
//         className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
//       >
//         <EarthCanvas />
//       </motion.div>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-content">
//           <div className="footer-left">
//             <h3>Designed and Developed by Raja Shoaib</h3>
//           </div>
//           <div className="footer-center">
//             <h3>Copyright © {new Date().getFullYear()} Raja Shoaib</h3>
//           </div>
//           <div className="footer-right">
//             <ul className="footer-icons">
//               <li className="social-icons">
//                 <a
//                   href="https://github.com/RajShoaib"
//                   style={{ color: 'white' }}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <AiFillGithub />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.linkedin.com/in/rajashoaib/"
//                   style={{ color: 'white' }}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaLinkedinIn />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.instagram.com/itz.shoaib_official/"
//                   style={{ color: 'white' }}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <AiFillInstagram />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.facebook.com/raja.shoaib.7146"
//                   style={{ color: 'white' }}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaFacebookF />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="mailto:shoaib2rocks@gmail.com/"
//                   style={{ color: 'white' }}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaGoogle />
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </footer>

//       {/* CSS styles */}
//       <style jsx>{`
//         .footer {
//           background: rgba(0, 0, 0, 0.8);
//           padding: 10px 0;
//           position: fixed;
//           bottom: 0;
//           left: 0;
//           width: 100%;
//           text-align: center;
//           color: white;
//           backdrop-filter: blur(10px);
//           z-index: 1000;
//         }

//         .footer-content {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .footer-left, .footer-center, .footer-right {
//           flex: 1;
//         }

//         .footer-icons {
//           display: flex;
//           justify-content: center;
//           gap: 20px;
//         }

//         .social-icons a {
//           font-size: 24px;
//           color: white;
//           transition: all 0.3s ease;
//         }

//         .social-icons a:hover {
//           color: skyblue; /* Skyblue color on hover */
//           transform: scale(1.2); /* Zoom in effect */
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, 'contact');


// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import emailjs from "emailjs-com";
// import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";
// import { linkedin, githubs } from "../assets";
// import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
// import { FaLinkedinIn, FaFacebookF, FaGoogle } from "react-icons/fa";

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
  
//   // State for Total Visitors counter
//   const [visitorCount, setVisitorCount] = useState(0);

//   // Increment and save visitor count in localStorage
//   useEffect(() => {
//     let currentCount = parseInt(localStorage.getItem("visitorCount")) || 0;
//     localStorage.setItem("visitorCount", currentCount + 1); // Increment visitor count
//     setVisitorCount(currentCount + 1); // Set state to reflect updated count
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         "service_0ledi5j", // replace with your EmailJS Service ID
//         "template_u5uf58s", // replace with your EmailJS Template ID
//         form,
//         "kZEFw9Mpk6vqj_jys"
//       )
//       .then(
//         (result) => {
//           setLoading(false);
//           setSuccessMessage("🎉 Your message has been sent successfully!");
//           setErrorMessage(""); // Clear any previous error message
//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });

//           setTimeout(() => {
//             setSuccessMessage(""); // Clear the success message after a few seconds
//           }, 5000);
//         },
//         (error) => {
//           setLoading(false);
//           setErrorMessage("❌ Something went wrong. Please try again.");
//           setSuccessMessage(""); // Clear any previous success message

//           setTimeout(() => {
//             setErrorMessage(""); // Clear the error message after a few seconds
//           }, 5000);
//         }
//       );
//   };

//   return (
//     <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden ">
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className="flex-[0.75] bg-black-100 p-8 rounded-2xl max-w-[520px] border-[1px] border-green-400 shadow-card"
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>

//         <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-4">
//           <label className="flex flex-col">
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Enter Name"
//               className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//               required
//             />
//           </label>

//           <label className="flex flex-col">
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Your Email"
//               className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//               required
//             />
//           </label>

//           <label className="flex flex-col">
//             <textarea
//               type="text"
//               name="message"
//               value={form.message}
//               rows="7"
//               onChange={handleChange}
//               placeholder="Your Message"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//               required
//             />
//           </label>

//           <button
//             type="submit"
//             className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>

//         <div className="flex gap-4 mt-8">
//           <a
//             href="https://www.linkedin.com/in/rajashoaib/"
//             target="_blank"
//             className="social-icons"
//           >
//             <FaLinkedinIn />
//           </a>
//           <a
//             href="https://github.com/RajShoaib"
//             target="_blank"
//             className="social-icons"
//           >
//             <AiFillGithub />
//           </a>
//         </div>

//         {successMessage && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="mt-4 text-green-400 font-medium text-lg"
//           >
//             {successMessage}
//           </motion.div>
//         )}

//         {errorMessage && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="mt-4 text-red-400 font-medium text-lg"
//           >
//             {errorMessage}
//           </motion.div>
//         )}
//       </motion.div>

//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
//       >
//         <EarthCanvas />
//       </motion.div>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-content">
//           <div className="footer-left">
//             <h3>Designed and Developed by Raja Shoaib</h3>
//           </div>

//           {/* Total Visitors Counter above Copyright */}
//           <div className="footer-center">
//             <p>Total Visitors: {visitorCount}</p>
//           </div>

//           <div className="footer-right">
//             <ul className="footer-icons">
//               <li className="social-icons">
//                 <a
//                   href="https://github.com/RajShoaib"
//                   style={{ color: "white" }}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <AiFillGithub />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.linkedin.com/in/rajashoaib/"
//                   style={{ color: "white" }}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaLinkedinIn />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.instagram.com/itz.shoaib_official/"
//                   style={{ color: "white" }}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <AiFillInstagram />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.facebook.com/raja.shoaib.7146"
//                   style={{ color: "white" }}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaFacebookF />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="mailto:shoaib2rocks@gmail.com/"
//                   style={{ color: "white" }}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaGoogle />
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </footer>

//       {/* CSS styles */}
//       <style jsx>{`
//         .footer {
//           background: rgba(0, 0, 0, 0.8);
//           padding: 10px 0;
//           position: fixed;
//           bottom: 0;
//           left: 0;
//           width: 100%;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           color: white;
//         }
//         .footer-content {
//           display: flex;
//           justify-content: space-between;
//           width: 100%;
//           padding: 0 20px;
//         }
//         .footer-left, .footer-right {
//           display: flex;
//           align-items: center;
//         }
//         .footer-center {
//           text-align: center;
//           flex-grow: 1;
//         }
//         .footer-icons {
//           display: flex;
//           list-style: none;
//           padding: 0;
//         }
//         .social-icons {
//           font-size: 24px;
//           color: white;
//           margin-right: 15px;
//           transition: transform 0.3s ease, color 0.3s ease;
//         }
//         .social-icons a:hover {
//           transform: scale(1.2);
//           color: skyblue;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");


import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { linkedin, githubs } from "../assets";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaGoogle } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  // State for Total Visitors counter
  const [visitorCount, setVisitorCount] = useState(0);

  // Increment and save visitor count in localStorage
  useEffect(() => {
    let currentCount = parseInt(localStorage.getItem("visitorCount")) || 0;
    localStorage.setItem("visitorCount", currentCount + 1); // Increment visitor count
    setVisitorCount(currentCount + 1); // Set state to reflect updated count
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_0ledi5j", // replace with your EmailJS Service ID
        "template_u5uf58s", // replace with your EmailJS Template ID
        form,
        "kZEFw9Mpk6vqj_jys"
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccessMessage("🎉 Your message has been sent successfully!");
          setErrorMessage(""); // Clear any previous error message
          setForm({
            name: "",
            email: "",
            message: "",
          });

          setTimeout(() => {
            setSuccessMessage(""); // Clear the success message after a few seconds
          }, 5000);
        },
        (error) => {
          setLoading(false);
          setErrorMessage("❌ Something went wrong. Please try again.");
          setSuccessMessage(""); // Clear any previous success message

          setTimeout(() => {
            setErrorMessage(""); // Clear the error message after a few seconds
          }, 5000);
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl max-w-[520px] border-[1px] border-green-400 shadow-card"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-4">
          <label className="flex flex-col">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <textarea
              type="text"
              name="message"
              value={form.message}
              rows="7"
              onChange={handleChange}
              placeholder="Your Message"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <div className="flex gap-4 mt-8">
          <a
            href="https://www.linkedin.com/in/rajashoaib/"
            target="_blank"
            className="social-icons"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/RajShoaib"
            target="_blank"
            className="social-icons"
          >
            <AiFillGithub />
          </a>
        </div>

        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-green-400 font-medium text-lg"
          >
            {successMessage}
          </motion.div>
        )}

        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-red-400 font-medium text-lg"
          >
            {errorMessage}
          </motion.div>
        )}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Designed and Developed by Raja Shoaib</h3>
          </div>
          
          {/* Total Visitors Counter above Copyright */}
          <div className="footer-center">
            <motion.p
              className="visitor-counter"
              animate={{
                color: [
                  "rgb(34,193,195)",
                  "rgb(253,187,45)",
                  "rgb(34,193,195)",
                  "rgb(253,187,45)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              Total Visitors: {visitorCount}
            </motion.p>
          </div>

          <div className="footer-right">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/RajShoaib"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rajashoaib/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/itz.shoaib_official/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/raja.shoaib.7146"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:shoaib2rocks@gmail.com/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGoogle />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* CSS styles */}
      <style jsx>{`
        .footer {
          background: rgba(0, 0, 0, 0.8);
          padding: 10px 0;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 0 20px;
        }
        .footer-left,
        .footer-right {
          display: flex;
          align-items: center;
        }
        .footer-center {
          text-align: center;
          flex-grow: 1;
        }
        .footer-icons {
          display: flex;
          list-style: none;
          padding: 0;
        }
        .social-icons {
          font-size: 24px;
          color: white;
          margin-right: 15px;
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .social-icons a:hover {
          transform: scale(1.2);
          color: skyblue;
        }
        .visitor-counter {
          font-size: 18px;
          font-weight: bold;
          background: linear-gradient(to right, rgb(34,193,195), rgb(253,187,45), rgb(255,20,147));
          -webkit-background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
