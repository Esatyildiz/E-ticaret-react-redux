import { configureStore } from '@reduxjs/toolkit'
import CategorySlice from './categorySlice'
import productSlice from './productSlice'

export const store = configureStore({
    reducer: {
        categories: CategorySlice,
        products: productSlice
    },
})