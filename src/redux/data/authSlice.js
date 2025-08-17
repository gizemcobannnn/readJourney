import { createSlice } from "@reduxjs/toolkit"


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
        builder.addCase("auth/login/fulfilled", (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null;
        })
        .addCase("auth/login/rejected", (state, action) => {
            state.error = action.payload;
            state.isAuthenticated = false;
        }).addCase("auth/logout/fulfilled", (state) => {
            state.email = "";
            state.token = "";
            state.isAuthenticated = false;
            state.error = null;
        })
    }
    
})

export default authSlice.reducer;
//export const {} = authSlice.actions;