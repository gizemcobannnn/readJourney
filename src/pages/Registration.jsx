import React from 'react'
import {Formik,Form,Field,ErrorMessage} from "formik"
import * as Yup from "yup";
import frame from "../assets/screen-frame.svg"
import wallpaper from "../assets/wallpaper.svg"
import { toast } from 'react-toastify';


export default function Registration() {
  const handleSubmit=()=>{
    try{
        toast.success("Successful registration")
    }catch(e){
        toast.error("Unsuccessful registration"+e)
    }
  }
  const validationRegister=Yup.object({
    name:Yup.string()
    .min(6, "It has to be at least 6 characters")
    .max(20, "It can be at most 20 characters").required("You have to enter your name"),
    email:Yup.string().email()
    .min(6, "It has to be at least 6 characters")
    .max(20, "It can be at most 20 characters").required("You have to enter your email"),
    password: Yup.string()
    .min(6, "It has to be at least 6 characters")
    .max(20, "It can be at most 20 characters")
    .required("You have to enter your password")  })

  return (
    <div className='grid grid-cols-2 gap-35 p-10'>
        <div className='flex flex-col items-start justify-start p-5 relative'>
            <p className='text-start absolute top-0 left-0 mb-10'>READ JOURNEY</p>
            <div className='mt-20 flex gap-10 flex-col'>
                <h1 className='text-start text-5xl font-semibold'>Expand your mind, reading <span className='text-white/40'>a book</span></h1>
                <Formik initialValues={{name:"",email:"",password:""}} onSubmit={handleSubmit} validationSchema={validationRegister}>
                    <Form className='flex flex-col gap-5'>
                        <Field name="name" type="text" placeholder="Name" />
                        <ErrorMessage name="name" component="div" className='errormessage' />
                        <Field name="email" type="email" placeholder="Email"/>
                        <ErrorMessage name="name" component="div" className='errormessage' />
                        <Field name="password" type="password" placeholder="Password"/>
                        <ErrorMessage name="name" component="div" className='errormessage' />
                        <div className='flex flex-row justify-between mt-7'>
                        <button type="submit" className='authbutton'>Register</button>
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
