import React from 'react'
import thumbsup from "../assets/thumbs-up-filled-svgrepo-com.svg"
import { createPortal } from 'react-dom'
export default function Goodjob() {
  return createPortal(
    <div className='flex flex-col items-center gap-2 relative'>
        <button className='absolute top-2 right-2  text-xl white'>X</button>
        <img src={thumbsup} alt="thımsup" width={100} height={100} />
        <h3 className='text-3xl font-semibold'>Good Job</h3>
        <p>Your book is now in the library! The joy knows no bounds and now you can start your training</p>
    </div>,document.body
  )
}
