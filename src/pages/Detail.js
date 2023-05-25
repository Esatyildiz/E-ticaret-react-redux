import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailComp from '../components/Detail/DetailComp.js';
import Loading from '../components/Loading.js';
import { getDetailProduct } from '../redux/productSlice';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { productDetail, productsDetailStatus } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getDetailProduct(id))
    }, [dispatch, id])

    console.log(productDetail, "productDetail");

    return (
        <div>
            {
                productsDetailStatus === "LOADING" ? <Loading /> : <DetailComp productDetail={productDetail} />
            }
        </div>
    );
};

export default Detail;