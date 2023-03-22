import { createSlice } from "@reduxjs/toolkit";
const showSidebarSlice = createSlice({
    name : 'showSidebar',
    initialState:{
        show : true
    },
    reducers:{
        toggleSidebar : (state) => {
            state.show = !state.show;
        },
        openSidebar : (state) => {
            state.show = true
        },
        closeSidebar : (state) => {
            state.show=false
        }
    }
})

export default showSidebarSlice.reducer

export const { toggleSidebar, openSidebar, closeSidebar } = showSidebarSlice.actions
