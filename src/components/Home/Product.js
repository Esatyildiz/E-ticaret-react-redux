import React from 'react';

const Product = ({ product }) => {
    return (
        <div className='w-[400px] p-2 m-2 border rounded-md relative'>
            <div className='text-3xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-1 m-1'>{product?.price} <span className='text-sm'>TL</span></div>
            <img className='object-cover' src={product?.image} width="200" height="200" alt='' />
        </div>
    );
};

export default Product;