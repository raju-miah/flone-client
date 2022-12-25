import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';


const Product = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://course-api.com/react-store-products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])

    return (
        <div className='md:w-[1170px] px-2 w-full m-auto my-16'>
            <h1 className='text-5xl text-center md:after:content-[""] md:after:border-b-2 md:after:border-black md:after:absolute relative md:after:top-[-23px] md:after:left-[310px] md:after:w-[100px] md:after:h-full md:before:content-[""] md:before:border-b-2 md:before:border-black md:before:absolute md:before:top-[-23px] md:before:right-[310px] md:before:w-[100px] md:before:h-full inline-block w-full m-auto
            '>DAILY DEALS!</h1>
            <div className='flex items-center justify-center flex-wrap gap-2 md:gap-12 mt-4 md:mt-6 w-full m-auto'>
                <button className='border-[1px] uppercase cursor-pointer text-[#010101] border-solid border-[#a749ff] px-12 py-4 mt-1 md:mt-4 hover:bg-[#a749ff] hover:text-white ease-in-out duration-500'>New Arrivals</button>

                <button className='border-[1px] uppercase cursor-pointer text-[#010101] border-solid border-[#a749ff] px-12 py-4 mt-1 md:mt-4 hover:bg-[#a749ff] hover:text-white ease-in-out duration-500'>Best Sellers</button>

                <button className='border-[1px] uppercase cursor-pointer text-[#010101] border-solid border-[#a749ff] px-12 py-4 mt-1 md:mt-4 hover:bg-[#a749ff] hover:text-white ease-in-out duration-500'>Sale Items</button>
            </div>

            <div className='my-12 flex justify-evenly items-center flex-wrap'>

                {
                    products.map((product, i) => <ProductCard
                        key={i}
                        product={product}
                    ></ProductCard>)
                }

            </div>


        </div>
    );
};

export default Product;