export default function Dashboard(){
    return(
        <div className='px-60 py-20'>
            <div className="py-2">
                <h1 className='text-4xl font-semibold'>
                    Data Hotel
                </h1>
            </div>
            <div className='py-2'>
                <input type='text' className='mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='Hotel Name' />
            </div>
            <div className='py-2'>
                <input type='text' className='mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='Address' />
            </div>
            <div className='py-2'>
                <input type='text' className='mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='Telephone' />
            </div>
            <div className='py-2'>
                <input type='text' className='mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='Email' />
            </div>
            <div className='py-2'>
                <textarea className='mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='Description' />
            </div>
            <div className='py-2'>
                <input type='file' className='mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' />
            </div>
            <button className="bg-orange-500 text-slate-50 font-semibold rounded-md w-full px-10 py-2 mt-5 mb-0">
                Save
            </button>
        </div>
    )
}