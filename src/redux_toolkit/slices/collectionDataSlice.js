import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCollectionsData = createAsyncThunk(
    "zomato/fetchCollectionsData",
    async () => {
        const response = await axios.get(`http://localhost:5000/collections`);
        return response.data;
    }
);

export const fetchPlacesData = createAsyncThunk(
    "zomato/fetchPlacesData",
    async () => {
        const response = await axios.get(`http://localhost:5000/places`);
        return response.data;
    }
);

const defaultCollectionDataState = {
    collectionsData: [],
    placesData: []
};

const collectionDataSlice = createSlice({
    name: 'collectionData',
    initialState: defaultCollectionDataState,
    reducers: {},
    extraReducers: {
        [fetchCollectionsData.fulfilled]: (state, { payload }) => {
            // console.log('Fetched data!');
            state.collectionsData = [...payload];
        },
        [fetchPlacesData.fulfilled]: (state, { payload }) => {
            // console.log('Fetched data!');
            state.placesData = [...payload];
        }
    }
})

export default collectionDataSlice.reducer;