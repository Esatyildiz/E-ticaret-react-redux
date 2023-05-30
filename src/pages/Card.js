import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardComp from '../components/Card/CardComp';
import { getCardTotal } from '../redux/cardSlice';

const Card = () => {
    const dispatch = useDispatch();
    const { cards, totalAmount, itemCount } = useSelector(state => state.cards);

    console.log(cards, totalAmount, itemCount, "cards");

    useEffect(() => {
        dispatch(getCardTotal())
    }, [dispatch])
    return (
        <>
            {
                cards?.length > 0 ? <div>
                    <div className='grid grid-cols-4 gap-7 mt-14 mb-10'>
                        {
                            cards.map((card, index) => (
                                <CardComp key={index} card={card} />
                            ))
                        }
                    </div>
                    <div className='font-medium flex items-center justify-center text-center gap-x-3'>TOPLAM TUTAR : <span className='font-bold text-2xl'>{totalAmount} TL</span></div>
                </div>
                    :
                    <div>Kartınız boş</div>
            }
        </>
    );
};

export default Card;