import React, { useEffect } from 'react';
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { getCardTotal } from '../../../redux/cardSlice.js';
import { useNavigate } from 'react-router-dom';

const NavbarRight = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { itemCount } = useSelector(state => state.cards);


    useEffect(() => {
        dispatch(getCardTotal())
    }, [dispatch])
    return (
        <div className='flex items-center gap-8'>
            <div className='flex items-center border p-3 bg-gray-200 rounded-full'>
                <input type="text" className='outline-none bg-gray-200' placeholder='Arama Yapınız...' />
                <BiSearch size={28} />
            </div>
            <AiOutlineHeart size={28} />
            <button type='button' className='relative' onClick={() => navigate("card")}>
                <span className='absolute -right-3 -top-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>{itemCount}</span>
                <SlBasket size={28} />
            </button>
        </div>
    );
};

export default NavbarRight;