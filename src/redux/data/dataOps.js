import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";


const API_BASE_URL = "https://readjourney.b.goit.study/api";

export const fetchRecommendedBooks = createAsyncThunk(
  "books/recommended",
  async (_, thunkAPI) => {
    try {
      const response = await api.get(`${API_BASE_URL}/books/recommend`);
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
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addRecommendedBook = createAsyncThunk(
  "books/addrecommended",
  async (_, thunkAPI) => {
    try {
      const response = await api.post("/books/add/{id}");
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteUserBook = createAsyncThunk(
  "books/deletebook",
  async (_, thunkAPI) => {
    try {
      const response = await api.delete("/books/remove/{id}");
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
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
      thunkAPI.rejectWithValue(e.message);
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
      thunkAPI.rejectWithValue(e.message);
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
      thunkAPI.rejectWithValue(e.message);
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
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchInfo = createAsyncThunk(
  "books/info",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/books/{id}");
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);