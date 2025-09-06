import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";



export const fetchRecommendedBooks = createAsyncThunk(
  "books/recommended",
  async ({ title, author, page = 1, limit = 10 } = {}, thunkAPI) => {
    try {
      const response = await api.get("/books/recommend",{
        params: { title, author, page, limit },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const addBook = createAsyncThunk(
  "books/addbook",
  async (_, thunkAPI) => {
    try {
      const response = await api.post("/books/add");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addRecommendedBook = createAsyncThunk(
  "books/addrecommended",
  async (id, thunkAPI) => {
    try {
      const response = await api.post(`/books/add/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteUserBook = createAsyncThunk(
  "books/deletebook",
  async (id, thunkAPI) => {
    try {
      const response = await api.delete(`/books/remove/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchOwnBook = createAsyncThunk(
  "books/ownbook",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/books/own");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const saveReadingStart = createAsyncThunk(
  "books/saveReading",
  async (_, thunkAPI) => {
    try {
      const response = await api.post("/books/reading/start");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const saveReadingFinish = createAsyncThunk(
  "books/saveReading",
  async (_, thunkAPI) => {
    try {
      const response = await api.post("/books/reading/finish");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteReading = createAsyncThunk(
  "books/deleteReading",
  async (_, thunkAPI) => {
    try {
      const response = await api.delete("/books/reading");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchInfo = createAsyncThunk(
  "books/info",
  async (id, thunkAPI) => {
    try {
      const response = await api.get(`/books/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);