import React from 'react'
import html from "../assets/logo.jpg"
import css from "../assets/logo.jpg"
import javascript from "../assets/logo.jpg"
import reactImage from "../assets/logo.jpg"
import nodejs from "../assets/logo.jpg"
import graphql from "../assets/logo.jpg"
import github from "../assets/logo.jpg"
import talwind from "../assets/logo.jpg"


const Experience = () => {

    const techs = [
        {
            id:1,
            src:html,
            title:"HTML",
            style:"shadow-orange-900"
        },
        {
            id:2,
            src:javascript,
            title:"JavaScript",
            style:"shadow-yellow-500"
        },
        {
            id:3,
            src:css,
            title:"Css",
            style:"shadow-blue-500"
        },
        {
            id:4,
            src:reactImage,
            title:"React",
            style:"shadow-blue-600"
        },
        {
            id:5,
            src:talwind,
            title:"Talwind",
            style:"shadow-sky-400"
        },
        {
            id:6,
            src:nodejs,
            title:"NodeJs",
            style:"shadow-white"
        },
        {
            id:7,
            src:graphql,
            title:"GraphQl",
            style:"shadow-pink-500"
        },
        {
            id:8,
            src:github,
            title:"Github",
            style:"shadow-gray-400"
        },
    ]

  return (
    <div
    name="experience"
    className='bg-gradient-to-b from-gray-800 to-black w-full h-screen '
    >
        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white  ' >
            <div>
                <p className=' text-4xl font-bold border-b-4 border-gray-500 inline '>Experience</p>
                <p className=' py-6'>This is the technology </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0  mb-20 pb-8'>

                {
                    techs.map(({id, title, src, style}) =>(
                        <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg ' + " " + style}>
                        <img src={src} alt='' className='w-20 mx-auto' />
                        <p className='mt-4'>{title}</p>
                    </div>
                    ))
                }
            
            </div>
        </div>

    </div>
  )
}

export default Experience