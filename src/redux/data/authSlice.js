import { createSlice } from "@reduxjs/toolkit"
import { loginUser, registerUser, logoutUser, currentUser, currentRefresh } from "./authOps";

const initialState = {
    name: "auth",
    email: "",
    token: "",
    refreshToken: "",
    isAuthenticated: false,
    error: null,
    message: "",
}

export const authSlice = createSlice({
    name:initialState.name,
    initialState: initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null;
            state.refreshToken = action.payload.refreshToken;
            state.name = action.payload.name;
        })
        .addCase(loginUser.pending, (state) => {
            state.error = null;
            state.isAuthenticated = false;
            
        }).addCase(loginUser.rejected, (state,action) => {
            state.token = "";
            state.email = "";
            state.refreshToken="";
            state.name = "";
            state.isAuthenticated = false;
            state.error = action.payload || action.error.message;
        }).addCase(registerUser.fulfilled, (state,action)=>{
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.name = action.payload.name;
            state.refreshToken = action.payload.refreshToken;
            state.isAuthenticated = true;
            state.error = null;
        }).addCase(registerUser.pending, (state,)=>{
            state.isAuthenticated = false;
            state.error = null;
        }).addCase(registerUser.rejected, (state,action)=>{
            state.email = "";
            state.token = "";
            state.refreshToken="";
            state.name = "";
            state.isAuthenticated = false;
            state.error = action.payload || action.error.message;
        }).addCase(logoutUser.fulfilled, (state,action)=>{
            state.email = "";
            state.token = "";
            state.refreshToken="";
            state.name = "";
            state.isAuthenticated = false;
            state.message = action.payload.message;
            state.error = null;
        }).addCase(logoutUser.pending, (state)=>{
            state.isAuthenticated = true;
            state.error = null;
        }).addCase(logoutUser.rejected, (state,action)=>{
            state.isAuthenticated = true;
            state.error = action.payload || action.error.message;
        }).addCase(currentRefresh.fulfilled, (state,action)=>{
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.refreshToken = action.payload.refreshToken;
            state.error = null;
        }).addCase(currentRefresh.pending, (state)=>{
            state.isAuthenticated = true;
            state.error = null;
        }).addCase(currentRefresh.rejected, (state,action)=>{
            state.token = "";
            state.refreshToken = "";
            state.isAuthenticated = false;
            state.error = action.payload || action.error.message;
        }).addCase(currentUser.fulfilled, (state,action)=>{
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.refreshToken = action.payload.refreshToken;
            state.isAuthenticated = true;
            state.error = null;
        }).addCase(currentUser.pending, (state)=>{
            state.isAuthenticated = true;
            state.error = null;
        }).addCase(currentUser.rejected, (state,action)=>{
            state.isAuthenticated = true;
            state.error = action.payload || action.error.message;
        })
    }
    
})

export default authSlice.reducer;
//export const {} = authSlice.actions;