import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCard } from '../../redux/cardSlice';

const CardComp = ({ card }) => {
    const dispatch = useDispatch();

    const handleRemoveFromCard = () => {
        dispatch(removeFromCard(card?.id));
        window.location.reload();
    };

    return (
        <div className='flex flex-col text-center justify-center p-3 rounded-2xl border border-gray-200'>
            <img className='w-[150px] h-[150px] m-auto object-contain mb-3' src={card?.image} alt='' />
            <div className='flex flex-col mb-3'>
                <div className='font-semibold line-clamp-2'>{card?.title}</div>
                <div>{card?.description}</div>
            </div>
            <span className='font-bold  mb-5 text-xl'>{card?.price} TL ({card?.quantity})</span>
            <button onClick={handleRemoveFromCard} type='button' className='bg-red-500 duration-200 ease-linear hover:bg-red-600 text-white  py-3 rounded-lg flex items-center justify-center '>Ürünü sil</button>
        </div>
    );
};

export default CardComp;