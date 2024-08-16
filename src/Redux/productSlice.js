import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorite: [],
    basket: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addFavoriteItem: (state, action) => {
            state.favorite.push(action.payload);
        },
        deleteFavoriteItem: (state, action) => {
            const index = state.favorite.findIndex(dt => dt.id === action.payload.id);
            state.favorite.splice(index, 1);
        },
        addBasketItem: (state, action) => {
            state.basket.push(action.payload);
        }
    },
})

export const { addFavoriteItem, addBasketItem, deleteFavoriteItem } = productSlice.actions;

export default productSlice.reducer;