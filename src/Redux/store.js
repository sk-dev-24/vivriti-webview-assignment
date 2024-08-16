import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import accountReducer from './accountSlice';

export const store = configureStore({
    reducer: {
        product: productReducer,
        account: accountReducer
    },
})