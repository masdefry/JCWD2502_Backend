import {VscDebugStackframeDot} from 'react-icons/vsc';
import {HiOutlineLocationMarker, HiStar} from 'react-icons/hi';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment/moment';

export default function HotelList(){
    
    const [hotels, setHotels] = useState([])

    const location = useLocation().search

    useEffect(() => {
        searchHotel()
    }, [])

    const searchHotel = async() => {
        try {
            const city = new URLSearchParams(location).get("city")
            const total_guest = new URLSearchParams(location).get("total_guest")
            const check_in = moment(new URLSearchParams(location).get("check_in")).format('YYYY-MM-DD 00:00:00')
            const check_out = moment(new URLSearchParams(location).get("check_out")).format('YYYY-MM-DD 00:00:00')
            
            const findHotel = await axios.get(`http://localhost:5000/hotel?city=${city}&total_guest=${total_guest}&check_in=${check_in}&check_out=${check_out}`)
            console.log(findHotel)
            setHotels(findHotel.data.data)
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
                                Your search results in {new URLSearchParams(location).get("city")}
                            </h1>
                        </div>
                        <div>
                            <span className='text-md text-gray-500 font-semibold flex items-center'>
                                {
                                    `${moment(new URLSearchParams(location).get("check_in")).format('YYYY-MM-DD')} - ${moment(new URLSearchParams(location).get("check_out")).format('YYYY-MM-DD')}`
                                } <VscDebugStackframeDot /> {new URLSearchParams(location).get("total_guest")} Guests
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
                        {
                            hotels.map((value, index) => {
                                if(value.totalRoom) return(
                                   
                                        <div className='grid grid-cols-4 bg-white rounded-md drop-shadow-xl mb-3'>
                                            <div>
                                                <img src={`${value.hotel_images[0].url}`} className='rounded-tl-md rounded-bl-md' style={{ minHeight: '190px', objectFit: 'cover' }} />
                                            </div>
                                            <div className='col-span-2 flex flex-col justify-between px-5 py-3'>
                                                <div>
                                                    <div>
                                                        <h1 className='text-lg text-gray-900 font-semibold'>
                                                            {value.name}
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
                                                            <HiOutlineLocationMarker className='mr-1' /> {value.location.city}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className='flex items-center text-gray-500'>
                                                        {value.totalRoom} Rooms Available
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
                                                    {/* <div className='text-gray-400'>
                                                        Rp. 1.500.000
                                                    </div> */}
                                                    <div className='text-xl text-orange-500 font-semibold'>
                                                        Rp. {value.hotel_rooms[0].minPrice.toLocaleString()}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}