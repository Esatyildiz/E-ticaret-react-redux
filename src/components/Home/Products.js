import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/productSlice';
import Loading from '../Loading';
import Product from './Product';

const Products = () => {
    const dispatch = useDispatch();
    const { products, productsStatue } = useSelector(state => state.products);

    console.log(products, "products");

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <div>
            {
                productsStatue == "LOADİNG" ? <Loading /> :
                    <div>
                        {
                            products?.map((product, index) => (
                                <Product key={index} product={product} />
                            ))
                        }
                    </div>
            }
        </div>
    );
};

export default Products;