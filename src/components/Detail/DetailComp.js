import React from 'react';

const DetailComp = ({ productDetail }) => {
    return (
        <div className='flex gap-10'>
            <img src={productDetail?.image} width="700" height="700" className='object-cover ' alt="" />
            <div className=''>
                <div>{productDetail?.title}</div>
            </div>
        </div>
    );
};

export default DetailComp;