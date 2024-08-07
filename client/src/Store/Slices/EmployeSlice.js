import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  employe: null,
  error: null,
  resumes: null,
};

export const EmployeSlice = createSlice({
  name: "emploucounter",
  initialState,
  reducers: {
    IsLoading: (state, action) => {
      state.isLoading = true;
    },
    SetEmploye: (state, action) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.employe = action.payload;
      state.error = null;
      console.log(`action ${action.payload}`);
    },
    RemoveEmploye: (state, action) => {
      state = {
        isLoading: false,
        isAuthenticated: false,
        employe: null,
        error: null,
      };
    },
    SetResumes: (state,action) => {
      state.resumes = action.payload;
    },
    RemoveResumes: (state,action) => {
      state.resumes = null;
    }
  },
});

export const { SetEmploye, RemoveEmploye , SetResumes , RemoveResumes} = EmployeSlice.actions;

export default EmployeSlice.reducer;
