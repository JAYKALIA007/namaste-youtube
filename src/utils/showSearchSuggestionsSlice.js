import {  createSlice } from '@reduxjs/toolkit'
const showSearchSuggestionsSlice = createSlice({
    name : 'showSearchSuggestions',
    initialState : {
        show : false
    },
    reducers : {
        showSuggestionsContainer : (state,action) => {
            state.show = action.payload
        }
    }
})

export default showSearchSuggestionsSlice.reducer

export const { showSuggestionsContainer } = showSearchSuggestionsSlice.actions