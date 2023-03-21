import { createSlice } from "@reduxjs/toolkit";
const showSidebarSlice = createSlice({
    name : 'showSidebar',
    initialState:{
        show : true
    },
    reducers:{
        toggleSidebar : (state) => {
            state.show = !state.show;
        }
    }
})

export default showSidebarSlice.reducer

export const { toggleSidebar } = showSidebarSlice.actions
