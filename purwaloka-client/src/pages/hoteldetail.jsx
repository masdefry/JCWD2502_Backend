import {HiOutlineLocationMarker, HiStar, HiOutlineWifi} from 'react-icons/hi';
import {MdOutlineComment, MdOutlineFreeCancellation} from 'react-icons/md';
import {FaSwimmingPool, FaParking, FaWifi} from 'react-icons/fa';
import {CiForkAndKnife} from 'react-icons/ci';
import {BsPeople} from 'react-icons/bs';

export default function HotelDetail(){
    return(
        <>
            <div className='px-60 py-10'>
                <div className='bg-white rounded-md drop-shadow-xl px-10 py-5 mb-3'>
                    {/* Hotel Information */}
                    <div className='border-b pb-3'>
                        <div>
                            <h1 className='text-2xl text-gray-900 font-semibold'>
                                Trans Studio Hotel
                            </h1>
                        </div>
                        <div className='flex items-center py-2'>
                            <span className='bg-sky-500 text-white mr-1 px-2 py-1 rounded-full'>
                                Hotel
                            </span>
                            <HiStar className='text-xl text-yellow-300' />
                            <HiStar className='text-xl text-yellow-300' />
                            <HiStar className='text-xl text-yellow-300' />
                            <HiStar className='text-xl text-yellow-300' />
                            <HiStar className='text-xl text-yellow-300' />
                        </div>
                        <div className='flex items-center text-gray-500'>
                            <HiOutlineLocationMarker className='text-xl' />
                            Jl Asia Afrika No8, GELORA BUNG KARNO, Kebayoran Baru, Senayan, Jakarta, Indonesia, 10270
                        </div>
                    </div>

                    {/* Hotel Images */}
                    <div className='grid grid-cols-5 gap-3 py-5'>
                        <div className='col-span-4'>
                            <img src='https://www.hotelscombined.co.id/himg/75/c8/84/revato-275450-12292942-924181.jpg' className='rounded-md' style={{ minHeight: '190px', objectFit: 'cover' }} />
                        </div>
                        <div className='col-span-1'>
                            <img src='https://www.hotelscombined.co.id/himg/75/c8/84/revato-275450-12292942-924181.jpg' className='rounded-md' style={{ minHeight: '190px', objectFit: 'cover' }} />
                            <img src='https://www.hotelscombined.co.id/himg/75/c8/84/revato-275450-12292942-924181.jpg' className='rounded-md' style={{ minHeight: '190px', objectFit: 'cover' }} />
                            <img src='https://www.hotelscombined.co.id/himg/75/c8/84/revato-275450-12292942-924181.jpg' className='rounded-md' style={{ minHeight: '190px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-span-5 flex justify-between mt-3">
                            <div>
                                <div>
                                    <h1 className='text-2xl text-black-500 font-semibold'>
                                        Rating
                                    </h1>
                                </div>
                                <div className='flex items-center text-2xl text-sky-500 font-semibold pt-2'>
                                    <MdOutlineComment className='mr-1' />
                                    <h1>
                                        8,5
                                    </h1>
                                </div>
                                <div>
                                    <h1 className='text-md text-gray-500 font-semibold'>
                                        From 250 Reviews
                                    </h1>
                                </div>
                            </div>
                            <div>
                                <div className='text-right'>
                                    <h1 className='text-md text-black-500 font-semibold'>
                                        Price/room/night starts from
                                    </h1>
                                </div>
                                <div className='text-right pt-1 pb-2'>
                                    <h1 className='text-3xl text-orange-500 font-semibold'>
                                        Rp.1.500.000
                                    </h1>
                                </div>
                                <div className='text-right'>
                                    <button className="bg-orange-500 text-slate-50 font-semibold rounded-md px-20 py-2">
                                        Select Room
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hotel Facilities */}
                    <div className='py-3'>
                        <div>
                            <div>
                                <h1 className='text-2xl text-black-500 font-semibold'>
                                    Facilities
                                </h1>
                            </div>
                            <div className='grid grid-cols-10 py-3'>
                                <div className='col-span-2 flex flex-col items-center pt-2'>
                                    <FaSwimmingPool className='text-sky-500  text-3xl' />
                                    <h1 className='text-xl text-black-500 font-semibold'>
                                        Swimming Pool
                                    </h1>
                                </div>
                                <div className='col-span-2 flex flex-col items-center pt-2'>
                                    <FaParking className='text-sky-500  text-3xl' />
                                    <h1 className='text-xl text-black-500 font-semibold'>
                                        Parking Area
                                    </h1>
                                </div>
                                <div className='col-span-2 flex flex-col justify-center items-center pt-2'>
                                    <FaWifi className='text-sky-500  text-3xl' />
                                    <h1 className='text-xl text-black-500 font-semibold'>
                                        Wifi 
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Room List */}
                    <div className='py-8'>
                        <div>
                            <div className='py-5'>
                                <h1 className='text-2xl text-black-500 font-semibold'>
                                    Available Rooms Types 
                                </h1>
                            </div>
                            <div>
                                <div className='py-3'>
                                    <div className='flex flex-row justify-between bg-gray-100 rounded-md drop-shadow-md px-3 py-3'>
                                        <div className='flex flex-row'>
                                            <div>
                                                <div>
                                                    <img src='https://www.hotelscombined.co.id/himg/75/c8/84/revato-275450-12292942-924181.jpg' className='rounded-md' style={{ maxHeight: '230px', objectFit: 'cover' }} />
                                                </div>
                                            </div>
                                            <div className='px-5'>
                                                <div className='py-2'>
                                                    <h1 className='text-xl text-gray-900 font-semibold'>
                                                        Executive Single Bed
                                                    </h1>
                                                </div>
                                                <div>
                                                    <div>
                                                        <div className='flex items-center py-2'>
                                                            <div className='bg-green-500 text-lg text-white rounded-full px-2 py-2'>
                                                                <BsPeople /> 
                                                            </div>
                                                            <div className='px-2'>
                                                                <h1 className='text-md text-green-500 font-semibold'>
                                                                    2 People/Room
                                                                </h1>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center py-2'>
                                                            <div className='bg-green-500 text-lg text-white rounded-full px-2 py-2'>
                                                                <CiForkAndKnife /> 
                                                            </div>
                                                            <div className='px-2'>
                                                                <h1 className='text-md text-green-500 font-semibold'>
                                                                    Free Breakfast
                                                                </h1>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center py-2'>
                                                            <div className='bg-green-500 text-lg text-white rounded-full px-2 py-2'>
                                                                <HiOutlineWifi /> 
                                                            </div>
                                                            <div className='px-2'>
                                                                <h1 className='text-md text-green-500 font-semibold'>
                                                                    Free Wifi
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='py-1'>
                                                    <h1 className='text-sm text-white bg-red-500 rounded-full px-1 py-1 text-center font-semibold'>
                                                        1 Room Available
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-between items-end px-3 py-3'>
                                            <div className='flex items-center'>
                                                <h1 className='text-sm text-gray-500 font-medium px-1'>
                                                    Free Cancellation
                                                </h1>
                                                <div className='bg-gray-300 px-1 py-1 rounded-full text-lg text-gray-500 font-medium'>
                                                    <MdOutlineFreeCancellation />
                                                </div>
                                            </div>
                                            <div>
                                                <div className='text-right'>
                                                    <h1 className='text-sm text-gray-500 font-semibold'>
                                                        Rp.2.500.000
                                                    </h1>
                                                </div>
                                                <div className='text-right pt-1 pb-2'>
                                                    <h1 className='text-xl text-orange-500 font-semibold'>
                                                        Rp.1.500.000
                                                    </h1>
                                                </div>
                                                <div className='text-right'>
                                                    <button className="bg-orange-500 text-slate-50 font-semibold rounded-md px-5 py-2">
                                                        Book Now!
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
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