import { configureStore } from "@reduxjs/toolkit";
import searchSuggestionsCacheSlice from "./searchSuggestionsCacheSlice";
import showSidebarSlice from "./showSidebarSlice";
const store = configureStore({
    reducer : {
        showSidebar : showSidebarSlice ,
        searchSuggestionCache : searchSuggestionsCacheSlice
    }
})

export default store