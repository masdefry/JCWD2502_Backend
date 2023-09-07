import axios from "axios"
import { useRef } from "react"
import { useParams } from "react-router-dom"

export default function Code(){

    const code = useRef()
    const {tkn} = useParams()

    const onSubmit = async() => {
        try {
            const userVerify = await axios.patch('http://localhost:5000/user', {token: tkn, code: code.current.value})
        } catch (error) {
            
        }
    }

    return(
        <div className='px-60 py-60'>
            <input type='text' ref={code} className='mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='Input Your Code Here' />
            <button onClick={onSubmit} className="bg-orange-500 text-slate-50 font-semibold rounded-md w-full px-10 py-2 mt-2 mb-0">
                Submit Code
            </button>
        </div>
    )
}