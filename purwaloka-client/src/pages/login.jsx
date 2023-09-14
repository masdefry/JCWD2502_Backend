import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login(){

    const username = useRef()
    const password = useRef()
    const navigate = useNavigate()

    const [disabled, setDisabled] = useState(false)

    const onLogin = async() => {
        try {
            setDisabled(true)
            const response = await axios.get(`${process.env.REACT_APP_URL}user?username=${username.current.value}&password=${password.current.value}`)

            localStorage.setItem('tkn', response.data.data)
            navigate('/')
        } catch (error) {
            console.log(error)
        } finally {
            setDisabled(false)
        }
    }

    return(
        <div className='grid grid-cols-1 flex justify-center px-52 py-10'>
            <div className='bg-white rounded-md drop-shadow-xl px-10 py-5'>
                <div>
                    <div>
                        <h1 className='text-bold text-3xl'>
                            Login Your Account
                        </h1>
                        <div className='py-3'>
                            <span className='text-lg font-bold'>
                                Username
                            </span>
                            <input type="text" ref={username} className="mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Username" />
                        </div>
                        <div className='py-3'>
                            <span className='text-lg font-bold'>
                                Password
                            </span>
                            <input type="password" ref={password} className="mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Password" />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-x-8 flex items-center'>
                        <div>
                            <Link to='/register'>
                                <span className='border-b border-slate-400 text-slate-400'>
                                    Belum punya akun? Daftar disini.
                                </span>
                            </Link>
                        </div>
                        <div className="flex justify-end pt-3">
                            <button disabled={disabled} onClick={onLogin} className="bg-orange-500 text-slate-50 font-semibold rounded-md px-10 py-2">
                                {
                                    disabled?
                                        'Loading...'
                                    :
                                        'Login'
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}