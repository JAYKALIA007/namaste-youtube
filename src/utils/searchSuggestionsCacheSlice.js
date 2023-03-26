import { createSlice } from "@reduxjs/toolkit";
const searchSuggestionCacheSlice = createSlice({
    name: `searchSuggestionCache`,
    initialState : {
        cache:{}
    },
    reducers : {
        addToCache : ( state, action ) =>{
            const key = Object.keys(action.payload)[0]
            state.cache[key] = action.payload[key]
        }
    }
})

export default searchSuggestionCacheSlice.reducer

export const { addToCache } = searchSuggestionCacheSlice.actions