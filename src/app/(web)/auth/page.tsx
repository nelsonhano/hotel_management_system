"use client"

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { signUp } from 'next-auth-sanity/client';
import { signIn, useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


const defaultFormData = {
    email: '',
    name: '',
    password: ''
}

export default function Auth() {
    const [ formData, setFormData ] = useState(defaultFormData)
    const {email, name, password} = formData;

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    const { data: session } = useSession();

    const router = useRouter()
    useEffect(() => {
        if (session) router.push('/')
    },[router,session])    
    
    const loginHandler = async () => {
        try {
            await signIn();
            router.push('/')
        } catch (error) {
            toast.error('Something went wrong');            
        }
    }
    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const user = await signUp(formData);
            if (user) return toast.success('Sign-In Successfully, Please Sign-In');            
        } catch (error) {
            toast.error('Something went wrong!!! ')
        } finally {
            setFormData(defaultFormData)
        }
    }

    const inPutStyle = 'border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none'
  return (
    <section className='container mx-auto'>
      <div className='p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto'>
        <div className='flex mb-8 flex-col md:flex-row items-center justify-center'>
            <h1 className='text-xl font-bold  leading-tight tracking-tight md:2xl'>Create an account</h1>
            <p>OR</p>
            <span className='inline-flex items-center'>
                      <AiFillGithub onClick={loginHandler} className='mr-3 text-4xl cursor-pointer text-black dark:text-white'/>
                |
                      <FcGoogle onClick={loginHandler} className='ml-3 text-4xl cursor-pointer'/>
            </span>
        </div>
        <form onSubmit={handleFormSubmit} className='space-y-4 md:space-y-6'>
            <input type="email" name='email' value={email} onChange={handleInputChange} placeholder='name@gmail.com' required className={inPutStyle} />
            <input type="text" name='name' value={name} onChange={handleInputChange} placeholder='john doe' required className={inPutStyle} />
            <input type="password" name='password' value={password} onChange={handleInputChange} placeholder='password'minLength={6} required className={inPutStyle} />
            <button type="submit" className='w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Sign Up</button>
        </form>
              <button onClick={loginHandler} className='text-blue-700 underline'>login</button>
      </div>
    </section>
  )
}
