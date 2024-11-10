import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className=' pt-20 bg-gray-800 text-white p-5'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>Technologies I Work with:</h2>
                <p className=' pt-3 text-xl'>I have strong knowledge with various technologies like HTML, CSS, TypeScript, and React for the front-end. I’m also familiar with Version Control systems like Git, and I have a keen eye for detail when it comes to UI/UX design.</p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-sky-500 text-3xl sm:text-4xl '>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">HTML</h2>
                        <h2 data-aos="zoom-in-up">React.Js</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills


