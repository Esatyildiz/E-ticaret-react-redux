import React from 'react';
import Slider from 'react-slick';

const SliderComp = () => {
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>
                <div className='!flex items-center bg-gray-100 px-6'>
                    <div className='flex flex-col items-start'>
                        <span className='text-5xl font-bold'>En Kaliteli Ayakkabılar Burada</span>
                        <span className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, lestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</span>
                        <span className='border cursor-pointer rounded-full w-52 flex items-center justify-center py-3 bg-gray-200 duration-200 ease-linear hover:bg-gray-100 text-2xl'>İncele</span>
                    </div>
                    <img src='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_521,c_limit/1f477cc7-9604-473c-9561-74ce55d5d740/air-monarch-4-antrenman-ayakkab%C4%B1s%C4%B1-VrTWXJJn.png' width="520" height="520" alt='' />
                </div>
                <div className='!flex items-center bg-gray-100 px-6'>
                    <div className='flex flex-col items-start'>
                        <span className='text-5xl font-bold'>En Kaliteli Ayakkabılar Burada</span>
                        <span className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, lestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</span>
                        <span className='border cursor-pointer rounded-full w-52 flex items-center justify-center py-3 bg-gray-200 duration-200 ease-linear hover:bg-gray-100 text-2xl'>İncele</span>
                    </div>
                    <img src='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_521,c_limit/60d2e87c-9eaa-46a0-b9aa-0f730291262b/air-force-1-07-ayakkab%C4%B1s%C4%B1-SqKG2H.png' width="520" height="520" alt='' />
                </div>
            </Slider>
        </div>
    );
};

export default SliderComp;