import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='fixed z-50 items-center left-0 w-full p-3 text-white flex flex-row justify-between mb-2 bg-part'>
        <h1 className='text-center'>READ JOURNEY</h1>
        <nav className='flex flex-row  gap-5'>
           <NavLink  to="/recommendation" className="navlink">Home</NavLink> 
           <NavLink to="/mylibrary" className="navlink">My Library</NavLink> 
        </nav>
        <div className='flex flex-row gap-2 items-center '>
            <p className='border border-slate-400 text-white p-3'>img</p>
            <p className='text-center'>name</p>
            <button type="button" className='border border-slate-400 text-white p-3'>Logout</button>
        </div>
    </div>
  )
}
