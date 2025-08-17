import { createSlice } from "@reduxjs/toolkit"
import { loginUser, registerUser, logoutUser, currentUser, currentRefresh } from "./authOps";

const initialState = {
    name: "auth",
    email: "",
    token: "",
    isAuthenticated: false,
    error: null,
}

export const authSlice = createSlice({
    name:initialState.name,
    initialState: initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null;
        })
        .addCase(loginUser.pending, (state, action) => {
            state.error = action.payload;
            state.isAuthenticated = false;
        }).addCase(loginUser.rejected, (state) => {
            state.email = "";
            state.token = "";
            state.isAuthenticated = false;
            state.error = null;
        }).addCase(registerUser.fulfilled, (state,action)=>{
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null;
        }).addCase(registerUser.pending, (state,action)=>{
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null;
        }).addCase(registerUser.rejected, (state,action)=>{
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null;
        }).addCase(logoutUser.fulfilled, (state,action)=>{
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null;
        }).addCase(logoutUser.pending, (state,action)=>{
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null;
        }).addCase(logoutUser.rejected, (state,action)=>{
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null;
        }).addCase(currentRefresh.fulfilled, (state,action)=>{
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null;
        }).addCase(currentRefresh.pending, (state,action)=>{
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null;
        }).addCase(currentRefresh.rejected, (state,action)=>{
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null;
        }).addCase(currentUser.fulfilled, (state,action)=>{
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null;
        }).addCase(currentUser.pending, (state,action)=>{
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null;
        }).addCase(currentUser.rejected, (state,action)=>{
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null;
        })
    }
    
})

export default authSlice.reducer;
//export const {} = authSlice.actions;