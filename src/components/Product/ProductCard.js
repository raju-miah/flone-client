import React from 'react';
import { GiSelfLove } from 'react-icons/gi';
import { AiFillEye } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

const ProductCard = ({ product }) => {
    const { name, image, price } = product;

    return (
        <div>
            <div className='text-center w-[270px] extraClass mb-12'>
                <div className='relative overflow-hidden h-[200px] object-fill'>
                    <img src={image} alt="" />

                    <div className='absolute w-full flex bottom-0 items-center justify-center left-0'>

                        <div className={`basis-[20%] extraOne w-full text-center py-3 flex items-center justify-center text-[24px] bg-[#a749ff] text-white mb-[-100px] opacity-[0] ease-in-out duration-500 hover:bg-black`}>
                            <button>
                                <GiSelfLove />
                            </button>
                        </div>

                        <div className={`basis-[60%] extraTwo w-full uppercase text-center py-3 bg-[#a749ff] text-white border-r border-l border-[#fcfcfc] border-solid mb-[-100px] opacity-[0] ease-in-out duration-700 hover:bg-black`}>
                            <button>Add to cart</button>
                        </div>

                        <div className={`basis-[20%] extraThree w-full text-center py-3 flex items-center justify-center text-[24px] bg-[#a749ff] text-white mb-[-100px] opacity-[0] ease-in-out duration-1000 hover:bg-black`}>
                            <button>
                                <AiFillEye />
                            </button>
                        </div>

                    </div>
                </div>
                <div className='mt-5'>
                    <h4 className='font-medium'>{name}</h4>
                    <p className='py-2 flex items-center justify-center gap-1 text-[#ffa900]'>
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </p>
                    <p className='text-[22px] text-black font-bold'>${price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;