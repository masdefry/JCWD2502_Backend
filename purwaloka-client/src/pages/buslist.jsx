import {VscDebugStackframeDot} from 'react-icons/vsc';
import {HiOutlineCheckCircle, HiStar} from 'react-icons/hi';
import {TbArrowRightCircle} from 'react-icons/tb';

export default function BusList(){
    return(
        <>
            {/* Banner Section */}
            <div className="bg-sky-500" style={{height: '250px'}}>
            
            </div>

            {/* Bus List Section */}
            <div className='px-60'>
                <div className='grid grid-cols-2 py-5'>
                    <div>
                        <div className='flex items-center'>
                            <h1 className='text-xl text-gray-900 font-semibold'>
                                Jakarta
                            </h1>
                            <TbArrowRightCircle className='text-xl text-sky-500 mt-1 mb-0 mx-2' />
                            <h1 className='text-xl text-gray-900 font-semibold'>
                                Bandung
                            </h1>
                        </div>
                        <div>
                            <span className='text-md text-gray-500 font-semibold flex items-center'>
                                9 Feb 2023 - 10 Feb 2023 <VscDebugStackframeDot /> 1 Seats
                            </span>
                        </div>
                    </div>
                    <div className='flex justify-end items-center'>
                        <button className="bg-sky-500 text-slate-50 font-semibold rounded-md px-4 py-1.5">
                            Change
                        </button>
                    </div>
                </div>
                
                <div className='grid grid-cols-3 gap-3'>
                    {/* Sidebar */}
                    <div className='col-span-1'>
                        <div className='bg-white rounded-md drop-shadow-xl px-10 py-5 mb-3'>
                            <h1 className='text-md text-gray-900 font-semibold'>
                                Sort Results
                            </h1>
                            <h1 className='pb-3 text-sm text-gray-500 font-semibold border-b'>
                                Sort your search results by:
                            </h1>
                            <div className='mt-3'>
                                <input id="radio" type="radio" className="w-4 h-4 bg-white border-gray-300 text-sky-500 focus:ring-sky-500 dark:focus:ring-sky-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-white dark:border-gray-600" />
                                <label for="radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Highest Price</label>
                            </div>
                        </div>
                        <div className='bg-white rounded-md drop-shadow-xl px-10 py-5 mb-3'>
                            <h1 className='text-md text-gray-900 font-semibold'>
                                Price Range
                            </h1>
                            <h1 className='pb-3 text-sm text-gray-500 font-semibold border-b'>
                                Price range per room, per night
                            </h1>
                            <div className='mt-3'>
                                <input id="radio" type="radio" className="w-4 h-4 bg-white border-gray-300 text-sky-500 focus:ring-sky-500 dark:focus:ring-sky-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-white dark:border-gray-600" />
                                <label for="radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Highest Price</label>
                            </div>
                        </div>
                    </div>

                    {/* Bus List */}
                    <div className='col-span-2'>
                        <div className='bg-white rounded-md drop-shadow-xl mb-3 px-5 py-5'>
                            <div>
                                <h1 className='text-lg text-gray-900 font-semibold'>
                                    Jackal Holiday
                                </h1>
                                <h1 className='text-sm text-gray-500'>
                                    Executive Shuttle
                                </h1>
                            </div>
                            <div className='grid grid-cols-3 py-3'>
                                <div className='col-span-2 grid grid-cols-5'>
                                    <div>
                                        <h1 className='text-md text-gray-900 font-semibold'>
                                            14:00
                                        </h1> 
                                        <h1 className='text-md text-gray-900'>
                                            Bandung
                                        </h1> 
                                    </div>
                                    <div>
                                        <TbArrowRightCircle className='text-xl text-sky-500 mt-1 mb-0 mx-2' />
                                    </div>
                                    <div>
                                        <h1 className='text-md text-gray-900 font-semibold'>
                                            16:00
                                        </h1> 
                                        <h1 className='text-md text-gray-900'>
                                            Jakarta
                                        </h1> 
                                    </div>
                                    <div className='border-x text-center'>
                                        <h1 className='text-md text-gray-900 font-semibold'>
                                            2j 0m
                                        </h1>
                                    </div>
                                </div>
                                <div className="col-span-1 text-right">
                                    <div className='py-1'>
                                        <span className='text-xl text-orange-500 font-semibold'>
                                            Rp.145.000 
                                        </span>
                                        <span className='text-gray-500 pl-1 pr-0'>
                                            /pax
                                        </span>
                                    </div>
                                    <div>
                                        <button className="bg-orange-500 text-slate-50 font-semibold rounded-md px-10">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='py-2 border-b flex'>
                                <div className='text-sky-500 font-semibold pl-0 pr-10'>
                                    Bus Details
                                </div>
                                <div className='text-gray-500 font-semibold pl-0 pr-10'>
                                    Trip Details
                                </div>
                            </div>
                            <div className='pt-5 pb-0'>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <div className='grid grid-cols-2'>
                                            <div>
                                                <h1 className='text-md text-gray-900 font-semibold'>
                                                    Total Seats
                                                </h1>
                                            </div>
                                            <div>
                                                <h1 className='text-md text-gray-900'>
                                                    : 18
                                                </h1>
                                            </div>
                                            <div>
                                                <h1 className='text-md text-gray-900 font-semibold'>
                                                    Seat Configuration
                                                </h1>
                                            </div>
                                            <div>
                                                <h1 className='text-md text-gray-900'>
                                                    : 1-1
                                                </h1>
                                            </div>
                                            <div>
                                                <h1 className='text-md text-gray-900 font-semibold'>
                                                    Facilities
                                                </h1>
                                            </div>
                                            <div>
                                                <div className='flex items-center'>
                                                    : <HiOutlineCheckCircle className='mt-1 ml-1 mr-1 text-green-600' />
                                                    <h1 className='text-md text-green-600'>
                                                        Air Conditioning
                                                    </h1>
                                                </div>
                                                <div className='flex items-center'>
                                                    : <HiOutlineCheckCircle className='mt-1 ml-1 mr-1 text-green-600' />
                                                    <h1 className='text-md text-green-600'>
                                                        Reclining Seat
                                                    </h1>
                                                </div>
                                                <div className='flex items-center'>
                                                    : <HiOutlineCheckCircle className='mt-1 ml-1 mr-1 text-green-600' />
                                                    <h1 className='text-md text-green-600'>
                                                        Rest Stop
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <img src='https://jackalholidays.com/wp-content/uploads/2021/02/3-18.jpg' className='rounded-md' style={{ minHeight: '190px', objectFit: 'cover' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}