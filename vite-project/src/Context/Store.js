import {configureStore} from '@reduxjs/toolkit';
import StudentReducer from "./StudentSlice";

const store = configureStore({
    reducer:{
        students:StudentReducer,
    },
})

export default store;