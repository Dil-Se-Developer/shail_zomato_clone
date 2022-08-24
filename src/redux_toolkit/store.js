import { configureStore } from "@reduxjs/toolkit";
import collectionDataReducer from "./slices/collectionDataSlice";
import userDataReducer from "./slices/userDataSlice";

const store = configureStore({
  reducer: {
    collectionsData: collectionDataReducer,
    userData: userDataReducer,
  },
});

export default store;
