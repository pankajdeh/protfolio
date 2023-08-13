import React from 'react'
import {BiRightArrowAlt} from "react-icons/bi"
import heroImage from "../assets/heroImage.jpg"

const Home = () => {


  return (

    <div 
    name="home"
    className='h-screen w-full bg-gradient-to-b  via-black from-black to-gray-800  '>
        
        <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'> 
            <div className=' flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white mt-20' >I'm a MERN Stack Developer...</h2>
                <p 
                className='text-gray-500 py-4 max-w-md'>
                    I have 1 years of experience building and designing website.
                    Currentl I love to work on web application using technologies like
                    React.js, Talwind Css, node.js, mongodb, postman, etc.

                </p>
                <button 
                className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer  '
                >
                    Protfolio
                    <span className='group-hover:rotate-90  duration-300 '> 
                        <BiRightArrowAlt size={25} className='ml-1' />
                    </span>
                </button>

            </div>
            <div className='w-[400px] h-[350px] mt-12 '>
                <img src={heroImage} alt='my profile' className='rounded-2xl h-full w-full  md:w-full' />
            </div>   
        </div>
    </div>   
  )
}

export default Home