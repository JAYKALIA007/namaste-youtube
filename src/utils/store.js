import { configureStore } from "@reduxjs/toolkit";
import liveChatSlice from "./liveChatSlice";
import searchSuggestionsCacheSlice from "./searchSuggestionsCacheSlice";
import showSearchSuggestionsSlice from "./showSearchSuggestionsSlice";
import showSidebarSlice from "./showSidebarSlice";
const store = configureStore({
    reducer : {
        showSidebar : showSidebarSlice ,
        searchSuggestionCache : searchSuggestionsCacheSlice,
        liveChat : liveChatSlice,
        showSearchSuggestions : showSearchSuggestionsSlice
    }
})

export default store