import React from 'react'
import plan from "../assets/protfolio/plan with love.jpg"
import razorpay from "../assets/protfolio/razorpay.jpg"
import topCourses from "../assets/protfolio/top courses.jpg"
import weather from "../assets/protfolio/weather app.jpg"
import discord from "../assets/protfolio/discord.jpg"
import shopping from "../assets/protfolio/shop.jpg"
import { Link } from 'react-router-dom'

const Protfolio = () => {

    const protfolios = [
        {
            id:1,
            src:shopping,
            path:"https://shopping-cart-pankaj.netlify.app/"
            
        },
        {
            id:2,
            src:plan,
            path:"https://tours-plan-pankaj.netlify.app/"


        },
        {
            id:3,
            src:razorpay,
            path:""

        },
        {
            id:4,
            src:discord,
            path:""

        },
        {
            id:5,
            src:topCourses,
            path:"https://category-cards-pankaj.netlify.app/"

        },
        {
            id:6,
            src:weather,
            path:""

        },
    ]

  return (
    <div 
    name="protfolio"
    className='bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full' > 
            <div className='pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500  ' >Protfolio</p>
                <p className='py-6' >check out some of my work right here</p>
            </div>
            
            {/* structure for cards */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0 mb-20 pb-12'>

            {
                protfolios.map(({id, src,path, Demo}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg mx-auto' >
                    <img
                    src={src} 
                    alt=''
                    className='rounded-md duration-200 hover:scale-105 '
                    />
                
                    <div className='flex items-center justify-center '>
                        
                       <Link to={path}>
                       <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 '>
                            Demo
                        </button>
                       </Link>
                        
                        <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 '>Code </button>
                    </div>
                </div>
                ))
            }

              
            </div>

        </div>
    </div>
  )
}

export default Protfolio