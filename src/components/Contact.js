import React from 'react'

const Contact = () => {
  return (
    <div 
    name="contact"
    className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'
    > 
        <div className=' max-w-screen-lg flex flex-col justify-center mx-auto h-full p-4 '>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 inline '>Contact</p>
                <p className='py-6'> Submit the form to get in touch with me </p>
            </div>

            <div className='py-4 flex justify-center items-center '>
                <form action="" 
                className='flex flex-col w-full md:w-1/2' >
                    <input
                    type='text'
                    name="name"
                    placeholder='Enter your name'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                     <input
                    type='text'
                    name="email"
                    placeholder='Enter your email'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-5'
                    />
                    <textarea 
                    name="message" 
                    rows=""
                    placeholder='Write your message'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none h-40'
                    ></textarea>

                    <button
                    className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 '
                    >
                        Let's talk
                    </button>
                    
                </form>
               
            </div>
        </div>
    </div>
  )
}

export default Contact