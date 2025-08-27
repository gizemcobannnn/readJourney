import api, {setToken} from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk("users/signin",async ({email,password}, thunkAPI) => {
  try {
    const response = await api.post("/users/signin", {email,password});
    setToken(response.data.token);
    return response.data;
  }catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }});

export const registerUser = createAsyncThunk("users/signup",async({name,email,password},thunkAPI)=>{
    try{
        const response = await setToken.post("/users/signup", {name,email,password});
        return response.data;
    }catch (e) {
        thunkAPI.rejectWithValue(e.message)
    }
})

export const logoutUser = createAsyncThunk("users/signout",async(thunkAPI)=>{
    try{
        const response = await setToken.post("/users/signout");
        return response.data;
    }catch(e){
        thunkAPI.rejectWithValue(e.message)
    }
})

export const currentUser = createAsyncThunk("users/current",async(thunkAPI)=>{
    try{
        const response = await setToken.get("/users/current");
        return response.data;
    }catch(e){
        thunkAPI.rejectWithValue(e.message)
    }
})

export const currentRefresh = createAsyncThunk("users/refresh",async(thunkAPI)=>{
    try{
        const response = await setToken.get("/users/current/refresh");
        return response.data;
    }catch(e){
        thunkAPI.rejectWithValue(e.message)
    }
})

