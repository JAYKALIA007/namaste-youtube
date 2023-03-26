import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from 'react'
import { SEARCH_QUERY_URL } from "../utils/constants";
import { useSelector , useDispatch } from 'react-redux'
import { addToCache } from "../utils/searchSuggestionsCacheSlice";
const SearchBar = () => {
  const [ searchQuery , setSearchQuery ] = useState("")
  const [ suggestions , setSuggestions ] = useState()
  const [ showSuggestions , setShowSuggestions ] = useState(false)
  const dispatch = useDispatch()
  const cache = useSelector(store => store.searchSuggestionCache.cache)
  useEffect(()=>{

    const timer = setTimeout(()=>{fetchSearchSuggestions(searchQuery)},200)

    return()=>{
      clearTimeout(timer)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchQuery])

  const fetchSearchSuggestions = async (searchQuery) => {

    //check if sugegstions are in cache for this search query
    if(searchQuery in cache){
      setSuggestions(cache[searchQuery])
    }
    else{
      const data = await fetch(`${SEARCH_QUERY_URL}${searchQuery}`)
      const jsonData = await data.json()
      setSuggestions(jsonData[1])
  
      //add to cache 
      const obj = {}
      obj[searchQuery] = jsonData[1]
      dispatch(addToCache(obj))
    }

  }

  if(searchQuery!=="" && !suggestions) return null

  // console.log(suggestions)

  return (
    <div className="relative top-4" >
        <input 
          className="border border-gray-400 w-1/2 h-9 rounded-l-full pl-4" 
          type="text" 
          id="search" 
          name="search" 
          placeholder="Search" 
          value={searchQuery}
          onChange={(e)=>{setSearchQuery(e.target.value)}}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>setShowSuggestions(false)}
          />
        <div className="border border-gray-400  inline p-2 px-4 rounded-r-full text-white bg-gray-400">
            <FaSearch className="inline text-xl relative right-1"  />
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className=" z-10	 text-left  w-1/2 relative left-60 rounded-lg border border-gray-100 p-4 bg-gray-100 shadow-lg" >
              {suggestions.map((suggestion)=>{
                return(
                  <p className="p-1 px-2 hover:bg-gray-300 rounded-md cursor-pointer" key={suggestion}><FaSearch className="inline mr-2 font-thin text-sm text-gray-600"/> {suggestion}</p>
                  )
              })}
          </div>
        )}
    </div>
  )
}

export default SearchBar