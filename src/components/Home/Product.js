import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`products/${product?.id}}`)} className=' p-2 m-2 border rounded-md relative flex flex-col items-center justify-center cursor-pointer'>
            <div className='text-3xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-1 m-1'>{product?.price} <span className='text-sm'>TL</span></div>
            <img className='object-cover' src={product?.image} width="200" height="200" alt='' />
            <div className='text-center text-xl font-bold px-3 mt-3'>{product?.title}</div>
        </div>
    );
};

export default Product;