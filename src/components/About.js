import React from 'react'

const About = () => {
  return (
    <div 
    name="about"
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg flex flex-col mx-auto p-4 justify-center w-full h-full  '>
            <div className='pb-18'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500  '>About</p>
            </div>
            <p className='text-xl mt-20 mb-20 '>
            My name is Pankajt and I hail from Seoni Madhya Pradesh. I completed my matriculation from Seoni and am currently a 3rd year student pursuing a B.Tech degree in Chemical Engineering at the National Institute of Technology Warangal (NITW).
            <p className='text-xl mt-2  '>Throughout my academic journey, I have developed a strong foundation in various programming languages and technologies. I have undertaken projects that reflect my proficiency in tools such as HTML,CSS, Tailwind Css, JavaScript, React.js, Node.js, Mongoose, MongoDB, Postman.
            </p>

            <p className='text-xl mt-2 '>In terms of technical proficiency, I am well-versed in C++ and have a working knowledge of Python. My experience in competitive programming and data structures and algorithms further underscores my problem-solving capabilities</p>

            <p className='text-xl mt-2 '> I look forward to the opportunity to discuss how my background and experiences align with the requirements of the SDE role. Please feel free to contact me at 7723004423 or pankajdehariya.seo@gmail.com  to schedule an interview.</p>
            </p>
        </div>
    </div>
  )
}

export default About