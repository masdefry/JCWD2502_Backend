import axios from "axios"
import { useState } from "react"

export default function Dashboard(){

    const [input, setInput] = useState({
        name: '', 
        address: '', 
        telephone: '', 
        email: '', 
        description: ''
    })
    const [images, setImages] = useState([])

    const onSetInput = (event) => {
        var tempInput = {...input}
        tempInput = {...tempInput, [`${event.target.name}`]: event.target.value}
        setInput(tempInput)
    }

    const onSelectImages = (event) => {
        try {
            const files = [...event.target.files]
            files.forEach(value => {
                if(value.size > 1000000 || value.type.split('/')[0] !== 'image') throw {message: `${value.name} Size Too Large / File Must be Image`}
            })

            setImages(files)
        } catch (error) {
            alert(error.message)
        }
    }

    const onSubmit = async() => {
        try {
            const fd = new FormData()
            fd.append('data', JSON.stringify(input))
            images.forEach(value => {
                fd.append('images', value)
            })
            
            await axios.post('http://localhost:5000/hotel', fd)

            alert('Data Created!')
        } catch (error) {
            alert(error.message)
        }
    }

    return(
        <div className='px-60 py-20'>
            <div className="py-2">
                <h1 className='text-4xl font-semibold'>
                    Data Hotel
                </h1>
            </div>
            <div className='py-2'>
                <input type='text' name="name" onChange={(e) => onSetInput(e)} className='mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='Hotel Name' />
            </div>
            <div className='py-2'>
                <input type='text' name="address" onChange={(e) => onSetInput(e)} className='mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='Address' />
            </div>
            <div className='py-2'>
                <input type='text' name="telephone" onChange={(e) => onSetInput(e)} className='mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='Telephone' />
            </div>
            <div className='py-2'>
                <input type='text' name="email" onChange={(e) => onSetInput(e)} className='mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='Email' />
            </div>
            <div className='py-2'>
                <textarea name="description" onChange={(e) => onSetInput(e)} className='mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='Description' />
            </div>
            <div className='py-2'>
                <input type='file' multiple='multiple' onChange={(e) => onSelectImages(e)} className='mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' />
            </div>
            <button onClick={onSubmit} className="bg-orange-500 text-slate-50 font-semibold rounded-md w-full px-10 py-2 mt-5 mb-0">
                Save
            </button>
        </div>
    )
}