import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "./Slices/StudentSlice";
import EmployeSlice from "./Slices/EmployeSlice";

export const Store = configureStore({
    reducer: { 
        StudentSlice,
        EmployeSlice
     },
});
