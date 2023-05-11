import React from 'react';

const Sorting = () => {
    return (
        <div className='bg-gray-100 my-5 p-5 flex items-center justify-end'>
            <select className='bg-white rounded py-3 px-5 outline-none' name='' id=''>
                <option disabled value="">SEÇİNİZ</option>
                <option value="inc">Artan</option>
                <option value="dec">Azalan</option>

            </select>
        </div>
    );
};

export default Sorting;