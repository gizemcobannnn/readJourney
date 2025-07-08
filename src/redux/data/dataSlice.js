import { createSlice } from "@reduxjs/toolkit"

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