import { configureStore } from "@reduxjs/toolkit";
import showSidebarSlice from "./showSidebarSlice";
const store = configureStore({
    reducer : {
        showSidebar : showSidebarSlice 
    }
})

export default store