import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data =[
    {
        id:0,
        title: "Calculator.App",
        desc: "A Next.js and typescript based app for calculating calculus",
        img: "/Calculator Animation.gif",
        tags: ["Next.js", "Node", "CSS", "Typescript"],
    },
    {
        id:1,
        title: "Password-Gen.App",
        desc: "A Next.js and typescript based app for generate password easily",
        img: "/password.gif",
        tags: ["Next.js", "Node", "CSS", "Typescript"],
    },
    {
        id:2,
        title: "Digital-Clock.App",
        desc: "A Next.js and typescript based app to watch time easily",
        img: "/Clock .jpeg",
        tags: ["Next.js", "Node", "CSS", "Typescript"],
    },
    {
        id:3,
        title: "Static Resume",
        desc: "CSS, HTMl and typescript base create static resume",
        img: "/cv.png",
        tags: ["HTML", "CSS", "Typescript"],
    },
    {
        id:4,
        title: "Responsive-Navbar",
        desc: "A HTML , CSS and typescript based responsive Navbar",
        img: "/navbar1.png",
        tags: ["HTML","CSS", "Typescript"],
    },
    {
        id:5,
        title: "Unit-Convertor.App",
        desc: "A Next.js and typescript based app for unit convertor",
        img: "/Screenshot 2024-11-10 at 1.47.38 PM.png",
        tags: ["Next.js", "Node", "CSS", "Typescript"],
    }
]

const Projects = () => {
  return (
    <div id="projects" className=' pt-32  bg-gray-800 text-white p-3'>
        <Heading title="My Projects"/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el)=> (<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>

    </div>
  )
}

export default Projects