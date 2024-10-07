"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import ConForm from "./comp/conForm";

function page() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contectRef = useRef(null);
  const handleClick = (refer) => {
    refer.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {/* "bg-gray-800 text-white py-3 px-4 flex items-center justify-between " */}

      <nav className=" bg-gray-800 flex justify-around font-bold items-center sticky top-0 p-3 text-white  ">
   
        <a className="font-bold text-xl tracking-tight" href="/">
          Deepak
        </a>
        <div className="flex items-center">
          <a
            className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
            href="/"
          >
            Home
          </a>
          <a
            className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
            onClick={() => {
              handleClick(aboutRef);
            }}
          >
            About
          </a>
          <a
            className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
            onClick={() => {
              handleClick(projectRef);
            }}
          >
            Projects
          </a>
          <a
            className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
            onClick={() => {
              handleClick(contectRef);
            }}
          >
            Contact
          </a>
        </div>
      </nav>

      <section className="lg:py-16 bg-gray-200 min-h-screen ">
        <div className="grid grid-cols-1 sm:grid-cols-12 ml-5 md:mt-6 justify-between p-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-gray-800 mb-4 text-4xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className=" text-gray-800 mb-4  ">
                Hello, I&apos;m{" "}
                
              </span>
              <br></br>
               
              <TypeAnimation
                sequence={[
                  "DEEPAK KUMAR",
                  1000,
                  "FULL-STACK  DEVELOPER",
                  1000,
                  "MERN-STACK DEVELOPER",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>

            <div>
              <a
                
                onClick={() => {
                  handleClick(contectRef);
                }}
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Hire Me
                </span>
              </a>
              <Link
                href="cv.pdf" download
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              >
                
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src="/pro_me2.jpg"
                alt="profile  image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full shadow-xl"
                
                width={400}
                height={350}
              />
            </div>
          </motion.div>
        </div>
      </section>
      <div className=" h-1 bg-gray-400 "></div>
      <section className="bg-gray-200" id="about">
        <div
          ref={aboutRef}
          className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
        >
          <Image
            src="/about-image.png"
            width={500}
            height={500}
            alt="about_img"
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              Hello! I am currently pursuing a degree in Computer Science and
              Engineering at Uttaranchal University Dehradun, where I am
              building a strong foundation in software development, data
              structures, and algorithms. I am passionate about leveraging
              technology to solve complex problems and enhance user experiences.
              My goal is to continuously learn and grow in the field of
              technology, embracing new challenges and staying updated with
              emerging trends. Let's connect and explore ways to collaborate or
              share insights on the latest advancements in the tech industry!
            </p>
            <div>
              <h1 className="font-bold text-lg md:text-3xl text-gray-800">
                Hobbies
              </h1>
              <li className=" font-bold text-lg md:text-3xl text-gray-800">
                LeetCoding
              </li>
              <li className=" font-bold text-lg md:text-3xl text-gray-800">
                Competitive Programming
              </li>
              <li className=" font-bold text-lg md:text-3xl text-gray-800">
                Web Development
              </li>
              <li className=" font-bold text-lg md:text-3xl text-gray-800">
                Movies
              </li>
              <li className=" font-bold text-lg md:text-3xl text-gray-800">
                Webseries
              </li>
              <li className=" font-bold text-lg md:text-3xl text-gray-800">
                cricket
              </li>
            </div>
          </div>
        </div>
      </section>

      <div className=" h-1 bg-gray-400 "></div>

      <div
        ref={projectRef}
        className="w-screen min-h-screen bg-gray-200 p-8 dark:bg-slate-800"
      >
        <div className="text-center lg:text-6xl font-bold mt-3 text">
          Projects
        </div>
        <div className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-5">
          <div className="w-72 bg-white shadow-lg duration-300 hover:scale-105">
            <div className="border-b-4 border-blue-800 relative group p-4">
              <a href="https://github.com/deepak7857/Blog-App">
                <img
                  className="w-full h-48 object-cover"
                  src="blogApp.png"
                  alt="project_image"
                />
              </a>

              <div className="absolute hidden my-4 p-2 text-sm text-white bg-blue-400 rounded-r-lg shadow-lg group-hover:block duration-300 bottom-0 mb- whitespace-nowrap">
                <p>Click to view Code</p>
              </div>
            </div>
            <div className="bg-gray-800 p-4">
              <div className="text-xl capitalize font-semibold text-white">
                <h2>Blog App</h2>
              </div>
              <div className="text-xl capitalize mt-4 mb-1.5 text-white">
                <p>The blog app is a dynamic and interactive platform designed for users to create, manage, and share blogs effortlessly. With a focus on user experience, the app allows for easy blog creation, editing, and deletion while ensuring secure access and user authentication. Readers can engage with blogs by leaving comments, fostering a community of interaction and feedback</p>
              </div>
              <div className="mt-4 text-center">
                <Link
                  href="#"
                  target="_blank"
                  className="   w-full text-gray-50 capitalize font-medium p-2 rounded-lg opacity-90 hover:opacity-100 "
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>

          {/* project 2 */}
          <div className="w-72 bg-white shadow-lg duration-300 hover:scale-105">
            <div className="border-b-4 border-blue-800 relative group p-4">
              <a href="https://github.com/deepak7857/fitMotvieWebApp">
                <img
                  className="w-full h-48 object-cover"
                  src="fitmotive.png"
                  alt="project_image"
                />
              </a>

              <div className="absolute hidden my-4 p-2 text-sm text-white bg-blue-400 rounded-r-lg shadow-lg group-hover:block duration-300 bottom-0 mb- whitespace-nowrap">
                <p>Click to view code</p>
              </div>
            </div>
            <div className="bg-gray-800 p-4">
              <div className="text-xl capitalize font-semibold text-white">
                <h2>fitmotive</h2>
              </div>
              <div className="text-xl capitalize mt-4 mb-1.5 text-white">
                <p>The Fitmotive is a comprehensive health and wellness platform designed to help users achieve their fitness goals through personalized workout plans, activity tracking, and nutrition guidance. The app offers a range of features, including exercise tracking, progress monitoring, and community engagement, , whether they are beginners or advanced athletes.</p><br></br>
              </div>
              <div className="mt-4 text-center">
                <Link
                  href="#"
                  target="_blank"
                  className="   w-full text-gray-50 capitalize font-medium p-2 rounded-lg opacity-90 hover:opacity-100 "
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
          {/*project 3*/}


          <div className="w-72 bg-white shadow-lg duration-300 hover:scale-105">
            <div className="border-b-4 border-blue-800 relative group p-4">
              <a href="https://github.com/deepak7857/Niyalservices.git">
                <img
                  className="w-full h-48 object-cover"
                  src="Pathfinder.png"
                  alt="project_image"
                />
              </a>

              <div className="absolute hidden my-4 p-2 text-sm text-white bg-blue-400 rounded-r-lg shadow-lg group-hover:block duration-300 bottom-0 mb- whitespace-nowrap">
                <p>Click to view Code</p>
              </div>
            </div>
            <div className="bg-gray-800 p-4">
              <div className="text-xl capitalize font-semibold text-white">
                <h2>Pathfinder</h2>
              </div>
              <div className="text-xl capitalize mt-4 mb-1.5 text-white">
                <p>The AI-Personalized Roadmap with Career Guidance platform is an intelligent system designed to help individuals identify and achieve their career goals by providing personalized learning . Powered by AI, the platform analyzes user profiles, skills, interests, and career aspirations to create customized roadmaps that guide users toward their desired career paths.  </p>
              </div>
              <div className="mt-4 text-center">
                <Link
                  href="#"
                  target="_blank"
                  className="   w-full text-gray-50 capitalize font-medium p-2 rounded-lg opacity-90 hover:opacity-100 "
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
          {/* project 4 */}
          <div className="w-72 bg-white shadow-lg duration-300 hover:scale-105">
            <div className="border-b-4 border-blue-800 relative group p-4">
              <a href="https://github.com/deepak7857/shortUrl">
                <img
                  className="w-full h-48 object-cover"
                  src="url_short.jpg"
                  alt="project_image"
                />
              </a>

              <div className="absolute hidden my-4 p-2 text-sm text-white bg-blue-400 rounded-r-lg shadow-lg group-hover:block duration-300 bottom-0 mb- whitespace-nowrap">
                <p>Click to view Code</p>
              </div>
            </div>
            <div className="bg-gray-800 p-4">
              <div className="text-xl capitalize font-semibold text-white">
                <h2>URL_Shortner</h2>
              </div>
              <div className="text-xl capitalize mt-4 mb-1.5 text-white">
                <h3><p>The URL Shortener app is a simple yet powerful tool that allows users to shorten long web URLs into compact, easy-to-share links. The app is designed to enhance the user experience by providing a clean and efficient way to manage links. It tracks click data, making it perfect for analyzing link performance, whether for personal use or marketing purposes.</p></h3>
              </div>
              <div class="mt-4 text-center">
                <Link
                  href="#"
                  target="_blank"
                  className="   w-full text-gray-50 capitalize font-medium p-2 rounded-lg opacity-90 hover:opacity-100 "
                ><br></br>
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>







      <div className=" h-1 bg-gray-400 "></div>
      <div ref={contectRef} className="bg-gray-500 ">
        <div className="flex items-center justify-items-center">
          <div className="ml-11">
            <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
            <p className="text-white mb-4 max-w-md">
              I'm currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>

            <div className="socials flex flex-row gap-2">
              <a href="https://github.com/deepak7857">
                <img src="github_icon.svg" alt="github_icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/deepak4512 "
                className="h-13 w-12"
              >
                <img src="linkedin_icon.svg" alt="github_icon" />
              </a>
            </div>
          </div>
          <div className="ml-12 mb-6 mt-6">
           <ConForm></ConForm>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
