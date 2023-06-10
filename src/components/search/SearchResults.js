import { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { MY_API_KEY } from '../../utils/constants';
import SearchResultCard from './SearchResultCard';
import { useDispatch } from 'react-redux'; 
import { showSuggestionsContainer } from '../../utils/showSearchSuggestionsSlice';
import ShimmerSearchCardContainer from '../shimmer/ShimmerSearchCardContainer';
const SearchResults = () => {
    const [ searchParams ] = useSearchParams()
    const [ searchResults , setSearchResults ] = useState([])
    const dispatch = useDispatch()
    const query = searchParams.get('search_query')
    useEffect(()=>{
        const SEARCH_RESULTS_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&safeSearch=moderate&key=${MY_API_KEY}`
        fetchSearchResults(SEARCH_RESULTS_URL)
        window.scrollTo(0,0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])
    const fetchSearchResults = async (SEARCH_RESULTS_URL) => {
        const data = await fetch(SEARCH_RESULTS_URL)
        const jsonData = await data.json()
        setSearchResults(jsonData?.items)
        dispatch(showSuggestionsContainer(false))
    }

    //early return
    if(!searchResults) return null
  return searchResults.length === 0 ? <ShimmerSearchCardContainer /> : (
    <div className='w-10/12' >
        {searchResults.map(result => (
            <SearchResultCard key={result?.id?.videoId ? result?.id?.videoId : result?.id?.channelId} data={result} isChannel={result?.id?.kind === 'youtube#channel' ? true : false} />
        ))}
    </div>
  )
}

export default SearchResults