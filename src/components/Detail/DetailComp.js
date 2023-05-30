import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCard } from '../../redux/cardSlice';

const DetailComp = ({ productDetail }) => {
    const [quanty, setQuanty] = useState(0);
    const dispatch = useDispatch();

    const increment = () => {
        if (quanty > 0) {
            setQuanty(quanty - 1)
        }

    }

    const decrement = () => {
        if (quanty < productDetail?.rating?.count) {
            setQuanty(quanty + 1)
        }
    }

    const addBasket = () => {
        dispatch(addToCard({ id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, price: productDetail?.price, quanty: quanty }))
    }

    return (
        <div className='flex gap-10'>
            <img src={productDetail?.image} width="500" height="500" className='object-contain' alt="" />
            <div className=''>
                <div className='font-bold text-5xl'>{productDetail?.title}</div>
                <div className='font-normal my-4'>{productDetail?.description}</div>
                <div className='flex items-center'>
                    <span>Rate : </span><span>{productDetail?.rating?.rate}</span>
                </div>
                <div className='flex items-center'>
                    <span>Count : </span><span>{productDetail?.rating?.count}</span>
                </div>
                <span className='text-4xl font-bold'>{productDetail?.price} ₺</span>
                <div className='flex items-center gap-5'>
                    <div onClick={increment} className='text-5xl select-none cursor-pointer'>-</div>
                    <input className='w-36 text-center text-4xl font-bold select-none outline-none' type="text" readOnly value={quanty} />
                    <div onClick={decrement} className='text-4xl select-none cursor-pointer'>+</div>
                </div>

                <div onClick={addBasket} className='border rounded-lg cursor-pointer my-6  w-[200px] text-2xl font-semibold bg-gray-300 h-16 flex items-center justify-center'>Sepete Ekle</div>
            </div>
        </div>
    );
};

export default DetailComp;