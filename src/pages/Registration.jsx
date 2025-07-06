import React from 'react'
import {Formik,Form,Field,ErrorMessage} from "formik"
import frame from "../assets/screen-frame.svg"
import wallpaper from "../assets/wallpaper.svg"
export default function Registration() {
  const handleSubmit=()=>{

  }
  return (
    <div className='grid grid-cols-2 gap-5'>
        <div className='flex flex-col items-start justify-start p-5 relative'>
            <p className='text-start absolute top-0 left-0 mb-10'>READ JOURNEY</p>
            <div className='mt-20 flex gap-10 flex-col'>
                <h1 className='text-start'>Expand your mind, reading <span>a book</span></h1>
                <Formik initialValues={{name:"",email:"",password:""}} onSubmit={handleSubmit}>
                    <Form className='flex flex-col gap-5'>
                        <Field name="name" type="text" placeholder="Name" />
                        <Field name="email" type="email" placeholder="Email"/>
                        <Field name="password" type="password" placeholder="Password"/>
                        <div className='flex flex-row justify-between mt-7'><button type="submit" >Register</button>
                        <button type="button">Already have an account ?</button></div>
                    </Form>
                </Formik>
            </div>
        </div>
        <div className='relative'>
            <img src={frame} alt="frame" className='absolute top-2 right-0'/>
            <img src={wallpaper} alt="wallpaper" className='absolute top-8 right-3' />
        </div>
    </div>
  )
}
