//rafce - react snippets

import React, { useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import { ImCross} from "react-icons/im"
import {Link} from "react-scroll"

const Navbar = () => {

    const [nav, setnav] = useState(false)

const links = [
  {
    id:1,
    link:"home"
  },
  {
    id:2,
    link:"about",
  },
  {
    id:3,
    link:"protfolio"
  },
  {
    id:4,
    link:"experience"
  },
  {
    id:5,
    link:"contact"
  },
];

  return (
    

    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed '>
      <div>
        <h1 className='px-6  text-5xl font-signature'>Pankaj</h1>
      </div>
      <ul className='hidden md:flex'>
        {links.map(({id, link}) => (
                <li 
                key = {id}
                className='px-4 cursor-pointer capitalize font-medium text-gray-600 hover:scale-125 duration-200'>
                  <Link to={link} smooth duration={500}>{link}</Link>
                
              </li>
        )
        )}

        
      </ul>
      {/* md: hidden ?smaj nhi aaya */}
<div onClick={() => setnav(!nav)} 
className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>  
{ nav ? <ImCross size={25}/> :<GiHamburgerMenu size={30}/>}
</div>

{ nav && 

<ul className='flex flex-col justify-center items-center top-0 left-0 absolute w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500  '>
   
   {links.map(({id, link}) => (
                   <li 
                   key = {id}
                   className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                   <Link onClick={() => setnav(!nav)} to={link} smooth duration={500} >{link}</Link>
                 </li>
           )
           )}
   
       </ul>
}       
    </div>
  )
}

export default Navbar


