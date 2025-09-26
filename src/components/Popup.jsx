import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

import { createPortal } from 'react-dom'
const Popup = ({onClose, selectedBook}) => {
  return createPortal(
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50'>
        <div className='flex items-center flex-col gap-3 bg-[#262626] p-5 rounded-lg w-1/3'>
        <IoCloseSharp className="self-end text-2xl" onClick={onClose}/> 
        <img src={selectedBook.imageUrl} alt={selectedBook.title} className="rounded-xl mb-3 h-50 md:h-120 xl:h-130 w-90" />
        <h3 className="text-slate-100 font-semibold">{selectedBook.title}</h3>
        <h3>{selectedBook.author}</h3>
        <h3>pagesd</h3>
        <button className='text-slate-100 font-semibold'>Add to library</button>
        </div>
    </div>,document.body
  )
}

export default Popup