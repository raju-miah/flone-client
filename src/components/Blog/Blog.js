import React from 'react';

const Blog = () => {
    return (
        <div className='md:w-[1170px] px-2 w-full m-auto my-16'>
            <h1 className='text-5xl text-center md:after:content-[""] md:after:border-b-2 md:after:border-black md:after:absolute relative md:after:top-[-23px] md:after:left-[310px] md:after:w-[100px] md:after:h-full md:before:content-[""] md:before:border-b-2 md:before:border-black md:before:absolute md:before:top-[-23px] md:before:right-[310px] md:before:w-[100px] md:before:h-full inline-block w-full m-auto
            '>OUR BLOG!</h1>

            <div className='flex items-center justify-center flex-wrap gap-4'>
                <div className='w-[370px] relative mt-12'>
                    <div className='overflow-hidden'>
                        <img src="https://flone.jamstacktemplates.dev/assets/img/blog/blog-1.jpg" alt="" />
                    </div>

                    <div className='m-auto text-center absolute bottom-[-64px] left-0 w-full'>
                        <div className='px-[44px] py-[14px] bg-white w-[300px] m-auto rounded-sm'>
                            <h3 className='text-[20px] font-medium'>A guide to latest trends</h3>
                            <p className='text-[14px] text-[#666]'>By Admin</p>
                        </div>
                    </div>
                </div>

                <div className='w-[370px] relative mt-12'>
                    <div className='overflow-hidden'>
                        <img src="https://flone.jamstacktemplates.dev/assets/img/blog/blog-1.jpg" alt="" />
                    </div>

                    <div className='m-auto text-center absolute bottom-[-64px] left-0 w-full'>
                        <div className='px-[44px] py-[14px] bg-white w-[300px] m-auto rounded-sm'>
                            <h3 className='text-[20px] font-medium'>A guide to latest trends</h3>
                            <p className='text-[14px] text-[#666]'>By Admin</p>
                        </div>
                    </div>
                </div>

                <div className='w-[370px] relative mt-12'>
                    <div className='overflow-hidden'>
                        <img src="https://flone.jamstacktemplates.dev/assets/img/blog/blog-1.jpg" alt="" />
                    </div>

                    <div className='m-auto text-center absolute bottom-[-64px] left-0 w-full'>
                        <div className='px-[44px] py-[14px] bg-white w-[300px] m-auto rounded-sm'>
                            <h3 className='text-[20px] font-medium'>A guide to latest trends</h3>
                            <p className='text-[14px] text-[#666]'>By Admin</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;