import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/categorySlice';

const Category = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories)

    console.log(categories, "categories");

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    return (
        <div className='w-1/6 bg-gray-100 p-4'>
            <div className='border-b pb-1 mb-2 text-xl font-bold'>KATEGORİ</div>
            {
                categories?.map((category, index) => (
                    <div key={index} className="text-lg font-medium px-2 duration-200 ease-linear rounded cursor-pointer hover:bg-slate-200 p-2">{category}</div>
                ))
            }
        </div>
    );
};

export default Category;