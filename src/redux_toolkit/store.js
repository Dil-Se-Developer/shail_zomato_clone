import { configureStore } from "@reduxjs/toolkit";
import collectionDataReducer from './slices/collectionDataSlice';

const store = configureStore({
    reducer: {
        collectionsData : collectionDataReducer
    }
});

export default store;
