import {TbHeartHandshake} from 'react-icons/tb';
import {IoMdArrowDropdown} from 'react-icons/io';

import Logo from './../supports/logo.png'
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <div>
            <div className="bg-sky-500" style={{height: '5px'}}>
            
            </div>
            <div className="bg-slate-50 grid grid-cols-2 px-32 py-2">
                <div className='flex items-center'>
                    <img src={Logo} style={{ width: '30px' }} />
                    <Link to='/'>
                        <h1 className="text-gray-700 text-3xl font-semibold">
                            purwaloka
                        </h1>
                    </Link>
                </div>
                <div>
                    <div className="flex justify-end items-center h-full">
                        <span className="text-gray-700 font-semibold flex items-center mr-5">
                            <TbHeartHandshake className="text-gray-700 text-lg text-center mr-1" /> Jadi Partner Kami!
                        </span>
                        <span className="text-gray-700 font-semibold mr-5">
                            Elite Rewards
                        </span>
                        <span className="text-gray-700 font-semibold mr-5">
                            Cek Order
                        </span>
                        <Link to='/register'>
                            <button className="bg-sky-500 text-slate-50 font-semibold rounded-md px-4 py-1.5">
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-slate-300 flex px-32 py-2">
                <span className="text-gray-700 font-semibold flex items-center mr-5">
                    Transport <IoMdArrowDropdown className="text-gray-700 text-md text-center ml-1" />
                </span>
                <span className="text-gray-700 font-semibold flex items-center mr-5">
                    Accomodation <IoMdArrowDropdown className="text-gray-700 text-md text-center ml-1" />
                </span>
            </div>
        </div>
    )
}