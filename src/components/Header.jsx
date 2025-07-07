import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='fixed z-50 top-0 left-0 w-full p-2 text-white'>
        <h1>READ JOURNEY</h1>
        <nav>
           <NavLink  to="/" className="navlink">Home</NavLink> 
           <NavLink to="/" className="navlink">My Library</NavLink> 
        </nav>
        <div className='flex flex-row gap-2'>
            <p className='border border-slate-400 text-white p-3'>img</p>
            <p>name</p>
            <button type="button" className='border border-slate-400 text-white p-3'>Logout</button>
        </div>
    </div>
  )
}
