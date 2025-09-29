import { createSlice } from "@reduxjs/toolkit"
//import {fetchRecommendedBooks,addBook, addRecommendedBook, deleteUserBook,fetchOwnBook,saveReadingStart,saveReadingFinish,deleteReading,fetchInfo} from "./dataOps"
import {fetchRecommendedBooks,addBook, fetchOwnBook} from "./dataOps"
const initialState={
    name:"journey",
    mylibrary:[],
    myfavorites:[],
    recommended:[],
    journeys:[],
    journey:{},
    filters:{},
}
export const journeySlice= createSlice({
    initialState:initialState,
    name:initialState.name,
    reducers:{
        setFavorites: (state,action)=>{
            const idfav=action.id;
            if(state.myfavorites.includes(idfav)){
                state.myfavorites=state.myfavorites.filter(id=>id!==idfav)
            }else{
                state.myfavorites.push(idfav)
            }
        },
        setRecommended: (state,action)=>{
            state.recommended=action.payload;
        }
    },
    extraReducers:(builder)=>{builder
        .addCase(fetchRecommendedBooks.fulfilled,(state,action)=>{
            state.recommended=action.payload.results;
        })
        .addCase(fetchRecommendedBooks.rejected,(state,action)=>{
            console.log("Failed to fetch recommended books:", action);
        }) 
        // eslint-disable-next-line no-unused-vars
        .addCase(fetchRecommendedBooks.pending,(state)=>{
            console.log("Fetching recommended books...", );
        })
        .addCase(addBook.fulfilled,(state,action)=>{
            state.mylibrary.push(action.payload);
        })
        .addCase(addBook.pending)
        .addCase(addBook.rejected)
        .addCase(fetchOwnBook.fulfilled,(state,action)=>{
            state.mylibrary=action.payload;
        })
        .addCase(fetchOwnBook.pending)
        .addCase(fetchOwnBook.rejected,(state)=>{
            state.mylibrary=[];
        })
    }
})

export default journeySlice.reducer;
export const {setFavorites,setRecommended}= journeySlice.actions;