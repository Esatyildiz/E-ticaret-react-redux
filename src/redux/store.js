import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './cardSlice'
import CategorySlice from './categorySlice'
import productSlice from './productSlice'

export const store = configureStore({
    reducer: {
        categories: CategorySlice,
        products: productSlice,
        cards: cardSlice
    },
})