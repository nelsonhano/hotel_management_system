"use client"

import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

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

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            console.log(formData);
            
        } catch (error) {
            console.log(error);
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
                <AiFillGithub className='mr-3 text-4xl cursor-pointer text-black dark:text-white'/>
                |
                <FcGoogle className='ml-3 text-4xl cursor-pointer'/>
            </span>
        </div>
        <form onSubmit={handleFormSubmit} className='space-y-4 md:space-y-6'>
            <input type="email" name='email' value={email} onChange={handleInputChange} placeholder='name@gmail.com' required className={inPutStyle} />
            <input type="text" name='name' value={name} onChange={handleInputChange} placeholder='john doe' required className={inPutStyle} />
            <input type="password" name='password' value={password} onChange={handleInputChange} placeholder='password'minLength={6} required className={inPutStyle} />
            <button type="submit" className='w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Sign Up</button>
        </form>
        <button className='text-blue-700 underline'>login</button>
      </div>
    </section>
  )
}
