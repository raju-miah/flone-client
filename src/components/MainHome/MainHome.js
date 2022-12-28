import React from 'react';
import Blog from '../Blog/Blog';
import Home from '../Home/Home';
import Product from '../Product/Product';
import Support from '../Support/Support';

const MainHome = () => {
    return (
        <div>
            <Home></Home>
            <Support></Support>
            <Product></Product>
            <Blog></Blog>
        </div>
    );
};

export default MainHome;