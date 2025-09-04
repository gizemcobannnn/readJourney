import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecommendedBooks } from '../redux/data/dataOps';  
import imageUrl from '../assets/wallpaper.svg'; 
import { setToken } from '../redux/data/authSlice';
const Recommendation = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const token = useSelector((state)=>state.auth.token);
    const handleLibrary = () => {
        navigate("/mylibrary");
        console.log("Navigating to My Library");
    }
    const recommendedbooks= useSelector((state)=>state.journey.recommended);
    console.log(recommendedbooks);


    useEffect(()=>{
        setToken(token);
        const fetchRecommended= async() => {
            try{
                const recommended = await dispatch(fetchRecommendedBooks()).unwrap();
                console.log(recommended);
            }catch(e){
                console.log(e.message);
            }
        
        };
        fetchRecommended();
    },[dispatch]);

  return (
    <div className='flex  flex-row min-h-screen overflow-hidden justify-between gap-5 p-10 bg-part mt-10'>
        <div className='left-side flex flex-col gap-5 w-1/3 text-start p-7 rounded-xl bg-[#1F1F1F]'>
            <p className='p-2'>Filters: </p>
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

        <div className='right-side w-full justify-start flex flex-col pl-7 pt-4 rounded-xl bg-[#1F1F1F] text-start'>
            <div className='flex flex-col items-start'>
                <h2 className="text-3xl self-start text-left pb-7">Recommended</h2>
                <div className='flex flex-row gap-2'> 
                    <></>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-3'>
                {recommendedbooks && recommendedbooks.map((index,book)=>(
                    <div key={index} className='flex flex-col justify-start'>
                    {imageUrl && <img src={imageUrl} alt="book" className="rounded-xl" />}
                        <h2 className='font-md'>{book.title}</h2>
                        <p className='font-sm'>{book.author}</p>
                    </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Recommendation