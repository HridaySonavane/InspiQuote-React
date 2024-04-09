import React from 'react'
import { BiHomeAlt } from "react-icons/bi";

function Navbar() {
  return (
    <div className='absolute w-screen h-screen top-0 left-0 flex justify-center'>
        <div className='sticky bg-gradient-to-br from-nav-primary/70 to-nav-secondary backdrop-blur-3xl border border-white rounded-full w-11/12 h-16 mt-4 flex justify-between items-center z-10 px-4'>

          <img src="https://cdn-icons-png.flaticon.com/512/9908/9908191.png" alt="" className='w-12'/>
          
          <div className='flex justify-around items-center w-4/12'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Search</a>
            <a href="">Profile</a>
            <button className='w-24 h-9'>Sign Up!</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar