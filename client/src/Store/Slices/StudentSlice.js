import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    student: null,
    internships:null,
    jobs:null,
    error: null,
};

export const StudentSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        IsLoading: (state, action) => {
            state.isLoading = true;
        },
        SetUser: (state, action) => {
            state.isAuthenticated = true;
            state.isLoading = false;
            state.student = action.payload;
            state.error = null;
            console.log(1)
            console.log(action.payload)
        },
        RemoveUser: (state, action) => {
            state = {
                isLoading: false,
                isAuthenticated: false,
                student: null,
                error: null,
            };
        },
        SetInternships: (state, action) => {
            state.internships = action.payload;
        },
        AddInternships: (state, action) => {
            state.internships = [...state.internships,...action.payload];
            console.log("added")
            console.log(state.internships)
        },
        Setjobs: (state,action) => {
            state.jobs = action.payload;
        },
        AddJobs: (state, action) => {
            const old = action.payload
            state.jobs = [...state.jobs,...old];
        },
    },
});

export const { SetUser, RemoveUser,SetInternships,Setjobs,AddInternships,AddJobs } = StudentSlice.actions;

export default StudentSlice.reducer;
