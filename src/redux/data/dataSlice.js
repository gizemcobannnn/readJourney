import { createSlice } from "@reduxjs/toolkit"
import {fetchRecommendedBooks,addBook, addRecommendedBook, deleteUserBook,fetchOwnBook,saveReadingStart,saveReadingFinish,deleteReading,fetchInfo} from "./dataOps"
const initialState={
    name:"journey",
    mylibrary:[],
    myfavorites:[],
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
        }
    }
})

export default journeySlice.reducer;
export const {setFavorites}= journeySlice.actions;