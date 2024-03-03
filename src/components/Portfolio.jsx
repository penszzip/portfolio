import React from 'react'
import {FaGithub, FaExternalLinkSquareAlt} from 'react-icons/fa'

const Portfolio = () => {
    
    const projects = [
        {
            id: 1,
            title: "HikeSpot",
            github: "https://github.com/penszzip/HikeSpot",
            demo: "",
        },
        {
            id: 2,
            title: "Tennis Matches Tracker API",
            github: "https://github.com/penszzip/tennis_matches_api",
            demo: "",
        },
        {
            id: 3,
            title: "Course Calendar REST API",
            github: "https://github.com/penszzip/courses_api",
            demo: "",
        },
        {
            id: 4,
            title: "WeatherApp",
            github: "https://github.com/penszzip/react-weatherapp",
            demo: "",
        }
    ]


  return (
    <div>
        <section className="min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center">
            <h3 className="py-3 text-3xl lg:text-5xl">Portfolio</h3>
            <p className="max-w-xl font-light text-gray-400 mb-10 text-sm md:text-base">These are some of my projects I have worked on to gain experience. Take a look!</p>
        </section>

        <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
            {projects.map(({id, title, github}) => (
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>

                    <h2>{title}</h2>

                    <a href={github}>
                        <FaGithub />
                    </a>
                    <a href="">
                        <FaExternalLinkSquareAlt />
                    </a>
                </div>

            ))}
        </div>
    </div>
  )
}

export default Portfolio