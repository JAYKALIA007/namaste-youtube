import { configureStore } from "@reduxjs/toolkit";
import liveChatSlice from "./liveChatSlice";
import searchSuggestionsCacheSlice from "./searchSuggestionsCacheSlice";
import showSidebarSlice from "./showSidebarSlice";
const store = configureStore({
    reducer : {
        showSidebar : showSidebarSlice ,
        searchSuggestionCache : searchSuggestionsCacheSlice,
        liveChat : liveChatSlice
    }
})

export default store