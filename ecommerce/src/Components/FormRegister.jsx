import { useRef } from "react";
import Button from "./Button";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import instance from './../Functions/Instance';


export default function FormRegister(){

  const inputFullname = useRef()
  const inputEmail = useRef()
  const inputPassword = useRef()

  const onRegister = async() => {
    try {
      const inputs = {
        username: inputFullname.current.value, 
        email: inputEmail.current.value, 
        password: inputPassword.current.value 
      }

      const response = await axios.post('http://localhost:5000/users/register', inputs, {
        headers: {
          apikey: 'abc12345'
        }
      })

      if(!response.data.isError) return toast.success(response.data.message)
      if(response.data.isError) return toast.error(response.data.message)

    } catch (error) {
      console.log(error)
    }
  }

    return(
        <div>
          <Toaster />
          <div className='flex justify-center items-center bg-slate-100 w-full h-10'>
            <h1 className='text-xl font-bold'>
              NEW CUSTOMER
            </h1>
          </div>
          <div className='px-20 py-3'>
            <h1 className='text-xl font-bold'> 
              Complete Name
            </h1>
            <input type='text' ref={inputFullname} placeholder='Full Name' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
          </div>
          <div className='px-20 py-3'>
            <h1 className='text-xl font-bold'> 
              Email
            </h1>
            <input type='text' ref={inputEmail} placeholder='Email' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
          </div>
          <div className='px-20 py-3'>
            <h1 className='text-xl font-bold'> 
              Password
            </h1>
            <input type='password' ref={inputPassword} placeholder='Password' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
            <div className='text-red-600'>
              Password Have Minimum 6 Characters
            </div>
          </div>
          <div className='px-20 py-3'>
            <Button handleFunction={onRegister} handleClass={'px-10 py-5 hover:bg-cyan-600 font-bold'}>
              Register
            </Button>
          </div>
        </div>
    )
}