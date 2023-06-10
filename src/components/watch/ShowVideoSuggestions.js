import { useState, useEffect } from 'react'
import { MY_API_KEY } from '../../utils/constants'
import SuggestedVideoCard from './SuggestedVideoCard'

const ShowVideoSuggestions = ({ tags }) => {
    const [ suggestionsList , setSuggestionsList ] = useState([])
    useEffect(()=>{
        fetchVideoSuggestions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[tags])
    // console.log(tags[0])
    
    const fetchVideoSuggestions = async () => {
        const YOUTUBE_GET_SUGGESTIONS_INFO_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${tags[0]}&key=${MY_API_KEY}`
        const data  = await fetch(YOUTUBE_GET_SUGGESTIONS_INFO_URL,{credentials: 'omit'})
        const jsonData = await data.json()
        // console.log(jsonData?.items)
        setSuggestionsList(jsonData?.items)
    }
    if(!suggestionsList) return null
    // console.log(tags)
  return (
    <div>
        {suggestionsList.map(suggestion =>{
            return(
                <SuggestedVideoCard key={suggestion?.id?.videoId ? suggestion?.id?.videoId : suggestion?.id?.channelId } data={suggestion} />
                // console.log(suggestion?.id?.videoId)
            )})}
    </div>
  )
}

export default ShowVideoSuggestions