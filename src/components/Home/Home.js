import React from 'react';

const Home = () => {
    return (
        <div className='bg-[#f0e0ff] pt-[20px]'>
            <div className='flex justify-evenly items-center flex-wrap md:w-[1170px] px-2 w-full m-auto'>
                <div className='text-center md:text-left md:basis-[50%] basis-[100%] mb-6 md:mb-0'>
                    <h2 className='text-[18px] md:text-[24px]'>Smart Product</h2>
                    <h1 className='text-[48px] md:text-[72px] text-[#010101]'>Winter Offer 2024 Collection</h1>
                    <button className='border-[1px] uppercase cursor-pointer text-[#010101] border-solid border-[#a749ff] px-12 py-4 mt-4 hover:bg-[#a749ff] hover:text-white ease-in-out duration-500'>Shop Now</button>
                </div>

                <div className='md:basis-[50%] basis-[100%]'>
                    <img src="https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-hm1-2.png" alt="" className='w-[800px]' />
                </div>
            </div>
        </div>
    );
};

export default Home;