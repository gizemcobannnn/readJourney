import React from 'react'
import { createPortal } from 'react-dom'
const Popup = () => {
  return createPortal(
    <div className='flex flex-col gap-3'>
        <div className='text-end'>x</div>
        <img src="" alt="" />
        <h3 className='text-slate-100 font-semibold'>book</h3>
        <h3>author</h3>
        <h3>pagesd</h3>
        <button className='text-slate-100 font-semibold'>Add to library</button>
    </div>,document.body
  )
}

export default Popup