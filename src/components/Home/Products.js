import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryProducts, getProducts } from '../../redux/productSlice';
import Loading from '../Loading';
import Product from './Product';

const Products = ({ category, sort }) => {

    const dispatch = useDispatch();
    const { products, productsStatue } = useSelector(state => state.products);


    console.log(sort, "sort");

    useEffect(() => {
        if (category) {
            dispatch(getCategoryProducts(category))
        } else {
            dispatch(getProducts())
        }

    }, [dispatch, category])

    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 6;
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };



    return (
        <div>
            {
                productsStatue === "LOADİNG" ? <Loading /> :
                    <>
                        <div className='grid grid-cols-3 mb-6'>
                            {
                                currentItems?.sort((a, b) => sort === "inc" ? a.price - b.price : sort === "dec" ? b.price - a.price : null).map((product, index) => (
                                    <Product key={index} product={product} />
                                ))
                            }
                        </div>
                        <ReactPaginate
                            className='paginate'
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="<"
                            renderOnZeroPageCount={null}
                        />
                    </>
            }
        </div>
    );
};

export default Products;