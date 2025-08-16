import React from 'react'
import { useNavigate } from 'react-router';
const Recommendation = () => {
    let navigate = useNavigate();
    const handleLibrary = () => {
        navigate("/mylibrary");
        console.log("Navigating to My Library");
    }
  return (
    <div className='flex  flex-row min-h-screen overflow-hidden justify-between gap-5 p-4 bg-part mt-10'>
        <div className='left-side flex flex-col gap-5 w-1/4 text-start'>
            <p>Filters: </p>
            <input type="text" name="title" id="title" placeholder='Book Title: ' className='bg-part' />
            <input type="text" name="author" id="author" placeholder='The Author: ' className='bg-part' />
            <button>To apply</button>

            <h2 className='text-xl'>Start your workout</h2>
            <p>Create a personal library: add the books you intend to read </p>
            <p>Create your first workout: define a goal, choose a period, start training.</p>

            <div className='flex flex-row justify-between'>
                <button type="button" onClick={()=>handleLibrary()} className='text-start'>My library</button>
            <button>ok</button>
            </div>
        </div>

        <div className='right-side p-3'>
            <div>
                <h2 className="text-3xl">Recommended</h2>
                <div className='flex flex-row gap-2'> 
                    <></>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-3'></div>
        </div>
    </div>
  )
}

export default Recommendation