import api from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk("users/signin",async (credentials, thunkAPI) => {
  try {
    const response = await api.post("/users/signin", credentials);
    return response.data;
  }catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }});

export const registerUser = createAsyncThunk("users/signup",async(userData,thunkAPI)=>{
    try{
        const response = await api.post("/users/signup", userData);
        return response.data;
    }catch (e) {
        thunkAPI.rejectWithValue(e.message)
    }
})

export const logoutUser = createAsyncThunk("users/signout",async(thunkAPI)=>{
    try{
        const response = await api.post("/users/signout");
        return response.data;
    }catch(e){
        thunkAPI.rejectWithValue(e.message)
    }
})

export const currentUser = createAsyncThunk("users/current",async(thunkAPI)=>{
    try{
        const response = await api.get("/users/current");
        return response.data;
    }catch(e){
        thunkAPI.rejectWithValue(e.message)
    }
})

export const currentRefresh = createAsyncThunk("users/refresh",async(thunkAPI)=>{
    try{
        const response = await api.get("/users/current/refresh");
        return response.data;
    }catch(e){
        thunkAPI.rejectWithValue(e.message)
    }
})

