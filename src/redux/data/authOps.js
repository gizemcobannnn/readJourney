import  api,{ setTokenA } from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToken } from "./authSlice";

//sign in: login user and keep tokens, mail,name in redux store in auth 
export const loginUser = createAsyncThunk("users/signin",async ({email,password}, thunkAPI) => {
  try {
    const response = await api.post("/users/signin", {email,password});
    const token = response.data.token;
    console.log("LOGIN RESPONSE:", response.data);


    console.log("token in authOps:",token);
    await thunkAPI.dispatch(setToken(token));
    setTokenA(token);
    console.log(api.defaults.headers.common["Authorization"]);
    console.log("AUTH HEADER:", api.defaults.headers.common["Authorization"]);
    return response.data;
  }catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }});

//sign up: register user and keep tokens, mail,name in redux store in auth 
export const registerUser = createAsyncThunk("users/signup",async({name,email,password},thunkAPI)=>{
    try {
      const response = await api.post("/users/signup", {
        name,
        email,
        password,
      });
      const token = response.data.token;
      await thunkAPI.dispatch(setToken(token));
      setTokenA(token);
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
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

