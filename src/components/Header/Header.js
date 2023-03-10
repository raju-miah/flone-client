import React, { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { GiSelfLove } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {

    const { user, logOut, loading } = useContext(AuthContext);

    const handelLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }


    if (loading) {
        return <p>llllll</p>
    }


    return (
        <div className="drop-shadow-md sticky top-0 left-0 bg-white z-[99999999]">
            <div className='flex md:w-[1170px] px-2 w-full m-auto header justify-between items-center py-8'>
                <div>
                    <img src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png" alt="" className='cursor-pointer' />
                </div>

                <div>
                    <ul className='lg:flex gap-6 text-[#555252] font-medium text-[18px] ease-in-out duration-500 cursor-pointer hidden md:block'>

                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>Shop</li>
                        <li>Collection</li>
                        <li>Blog</li>
                        <li>Contact Us</li>

                    </ul>
                </div>

                <div>
                    <ul className='flex gap-6 text-3xl text-[#555252] font-medium ease-in-out duration-500 cursor-pointer'>
                        <li>
                            <BsSearch />
                        </li>
                        <li>
                            <Link to="/login">
                                <BiUserCircle />
                            </Link>

                        </li>
                        <li className='relative'>
                            <GiSelfLove>

                            </GiSelfLove>
                            <span className='flex items-center justify-center absolute top-[-10px] right-[-10px] bg-black text-white p-2 rounded-full h-[22px] w-[22px] text-sm'>0</span>
                        </li>
                        <li className='relative'>
                            <AiOutlineShoppingCart />
                            <span className='flex items-center justify-center absolute top-[-10px] right-[-10px] bg-black text-white p-2 rounded-full h-[22px] w-[22px] text-sm'>0</span>
                        </li>
                        <li>
                            <FaBars className='block md:hidden' />
                        </li>

                        {
                            user?.uid ?
                                <>
                                    <button onClick={handelLogout}
                                        className='border-[1px] text-[18px] uppercase cursor-pointer text-[#010101] border-solid border-[#a749ff] px-6 py-2 hover:bg-[#a749ff] hover:text-white ease-in-out duration-500'
                                    >Logout</button>

                                </>
                                :
                                <>
                                    <button>Login</button>
                                </>
                        }
                    </ul>


                </div>
            </div>
        </div>
    );
};

export default Header;