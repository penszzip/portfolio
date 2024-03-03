import React from 'react'
import {FaGithub, FaLinkedin, FaArrowDown} from 'react-icons/fa'

const Hero = () => {
  
    window.addEventListener('scroll', function () {
        const downArrow = document.querySelector(".down-arrow");

        if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
        else downArrow.classList.remove("hide-down-arrow")
    })

  const social = [
    {
        id: 1,
        link: "https://github.com/penszzip",
        icon: <FaGithub />,
    },
    {
        id: 2,
        link: "https://www.linkedin.com/in/raj-zatsarenko-80137629b/",
        icon: <FaLinkedin />
    },
  ];
  
    return (
    <section className=" pt-28 flex flex-col justify-start items-center p-5 text-center">
        <h2 className="text-5xl text-sky-400 font-medium">Raj Zatsarenko</h2>
        <h3 className="py-3 text-2xl">Software Engineer</h3>
        <p className="max-w-xl font-light text-gray-400">
            Hi! Welcome to my portfolio website. I'm a computer science student at TMU.
            I'm passionate about full-stack development in NodeJS 
            and also I have a solid competency in Java Spring Boot.
        </p>

        <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
            {social.map(({id, link, icon}) => (
                <a href={link} key={id} className="cursor-pointer duration-300 hover:text-sky-400">{icon}</a>
            ))}
        </div>

        {/* <div>
            avatar
            resume link
        </div> */}

        <div className="mt-10 down-arrow">
            <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
        </div>



    </section>
  )
}

export default Hero