import {VscDebugStackframeDot} from 'react-icons/vsc';
import {HiOutlineLocationMarker, HiStar} from 'react-icons/hi';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export default function HotelList(){
    
    const location = useLocation().search

    useEffect(() => {
        searchHotel()
    }, [])

    const searchHotel = async() => {
        try {
            console.log('RUN')
        const city = new URLSearchParams(location).get("city")
        const total_guest = new URLSearchParams(location).get("total_guest")
        const check_in = new URLSearchParams(location).get("check_in")
        const check_out = new URLSearchParams(location).get("check_out")
            const findHotel = await axios.get(`http://localhost:5000/hotel?city=${city}&total_guest=${total_guest}`)
            console.log(findHotel)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
            {/* Banner Section */}
            <div className="bg-sky-500" style={{height: '250px'}}>
            
            </div>

            {/* Hotel List Section */}
            <div className='px-60'>
                <div className='grid grid-cols-2 py-5'>
                    <div>
                        <div>
                            <h1 className='text-2xl text-gray-900 font-semibold'>
                                Your search results in Jakarta
                            </h1>
                        </div>
                        <div>
                            <span className='text-md text-gray-500 font-semibold flex items-center'>
                                9 Feb 2023 - 10 Feb 2023 <VscDebugStackframeDot /> 1 Rooms
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

                    {/* Hotel List */}
                    <div className='col-span-2'>
                        <div className='grid grid-cols-4 bg-white rounded-md drop-shadow-xl mb-3'>
                            <div>
                                <img src='https://www.hotelscombined.co.id/himg/75/c8/84/revato-275450-12292942-924181.jpg' className='rounded-tl-md rounded-bl-md' style={{ minHeight: '190px', objectFit: 'cover' }} />
                            </div>
                            <div className='col-span-2 flex flex-col justify-between px-5 py-3'>
                                <div>
                                    <div>
                                        <h1 className='text-lg text-gray-900 font-semibold'>
                                            Trans Studio Hotel
                                        </h1>
                                    </div>
                                    <div className='py-2'>
                                        <span className='bg-sky-500 text-white px-2 py-1 rounded-full'>
                                            Hotel
                                        </span>
                                    </div>
                                    <div>
                                        <span className='flex items-center text-yellow-300'>
                                            <HiStar className='mr-1' />
                                            <HiStar className='mr-1' />
                                            <HiStar className='mr-1' />
                                            <HiStar className='mr-1' />
                                            <HiStar className='mr-1' />
                                        </span>
                                    </div>
                                    <div>
                                        <span className='flex items-center text-gray-500'>
                                            <HiOutlineLocationMarker className='mr-1' /> Jakarta
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <span className='flex items-center text-gray-500'>
                                        10 Rooms Available
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-between px-3 py-3 border-l'>
                                <div className='flex justify-end'>
                                    <h1 className='text-sm text-sky-500 font-semibold'>
                                        8,5 (250)
                                    </h1>
                                </div>
                                <div>
                                    <div className='text-gray-400'>
                                        Rp. 1.500.000
                                    </div>
                                    <div className='text-xl text-orange-500 font-semibold'>
                                        Rp. 1.500.000
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