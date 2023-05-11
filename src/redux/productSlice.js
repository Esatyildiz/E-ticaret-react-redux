import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
    products: [],
    productStatus: STATUS.IDLE,
    productDetail: [],
    productsDetailStatus: STATUS.IDLE
}

export const getProducts = createAsyncThunk('getproducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data;
})

export const getDetailProduct = createAsyncThunk('getproduct', async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products${id}`)
    const data = await response.json()
    return data;
})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.productStatus = STATUS.LOADING
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.productStatus = STATUS.SUCCESS;
                state.products = action.payload
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.productStatus = STATUS.FAIL
            })
            .addCase(getDetailProduct.pending, (state, action) => {
                state.productsDetailStatus = STATUS.LOADING
            })
            .addCase(getDetailProduct.fulfilled, (state, action) => {
                state.productsDetailStatus = STATUS.SUCCESS;
                state.productsDetail = action.payload
            })
            .addCase(getDetailProduct.rejected, (state, action) => {
                state.productsDetailStatus = STATUS.FAIL
            })
    }
})

export default productSlice.reducer



// PENDİNG ---> sayfaya yükleme durumu belirler
// REJECTED --> hata olması durumu