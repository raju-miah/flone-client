import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { Ri24HoursLine } from 'react-icons/ri';
import { ImCoinDollar } from 'react-icons/im';
import { CiDiscount1 } from 'react-icons/ci';

const Support = () => {
    return (
        <div className='flex flex-wrap md:w-[1170px] px-2 w-full m-auto header justify-between items-center my-12'>
            <div className='flex basis-4/4 mb-8 sm:basis-4/4 md:mb-0 m-auto md:basis-1/4 items-center justify-center gap-4'>
                <div>
                    <FaShippingFast className='text-5xl text-[#333] hover:-rotate-3 duration-100 ease-in-out hover:scale-110' />
                </div>

                <div>
                    <h3 className='text-[18px]'>Free Shipping</h3>
                    <p className='text-[14px] text-[#666]'>Free shipping on all order</p>
                </div>
            </div>

            <div className='flex basis-4/4 mb-8 sm:basis-4/4 md:mb-0 m-auto md:basis-1/4 items-center justify-center gap-4'>
                <div>
                    <Ri24HoursLine className='text-5xl text-[#333] hover:-rotate-3 duration-100 ease-in-out hover:scale-110' />
                </div>

                <div>
                    <h3 className='text-[18px]'>Support 24/7</h3>
                    <p className='text-[14px] text-[#666]'>Free shipping on all order</p>
                </div>
            </div>

            <div className='flex basis-4/4 mb-8 sm:basis-4/4 md:mb-0 m-auto md:basis-1/4 items-center justify-center gap-4'>
                <div>
                    <ImCoinDollar className='text-5xl text-[#333] hover:-rotate-3 duration-100 ease-in-out hover:scale-110' />
                </div>

                <div>
                    <h3 className='text-[18px]'>Money Return</h3>
                    <p className='text-[14px] text-[#666]'>Free shipping on all order</p>
                </div>
            </div>

            <div className='flex basis-4/4 mb-8 sm:basis-4/4 md:mb-0 m-auto md:basis-1/4 items-center justify-center gap-4'>
                <div>
                    <CiDiscount1 className='text-5xl text-[#333] hover:-rotate-3 duration-100 ease-in-out hover:scale-110' />
                </div>

                <div>
                    <h3 className='text-[18px]'>Order Discount</h3>
                    <p className='text-[14px] text-[#666]'>Free shipping on all order</p>
                </div>
            </div>
        </div>
    );
};

export default Support;