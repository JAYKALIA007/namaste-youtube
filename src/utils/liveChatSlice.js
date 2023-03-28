import { createSlice } from "@reduxjs/toolkit"
const liveChatSlice = createSlice({
    name: `liveChat`,
    initialState : {
        messages : []
    },
    reducers : {
        addMessages : (state,action)=>{
            state.messages.unshift(action.payload)
            state.messages.splice(20,1)
        }
    }
})

export default liveChatSlice.reducer

export const { addMessages } = liveChatSlice.actions