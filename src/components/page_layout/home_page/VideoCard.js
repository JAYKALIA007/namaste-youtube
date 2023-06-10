import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { convertToInternationalCurrencySystem } from "../../../utils/helper"

const VideoCard = ({items}) => {
    const  showSidebar  = useSelector(store => store.showSidebar.show)
    // console.log(showSidebar)
    const { snippet , statistics, contentDetails} = items 
    const { channelTitle , title, thumbnails } = snippet
    const { viewCount, likeCount } = statistics
    const { duration } = contentDetails
    const timestamp = duration.slice(2).replace('M',':').replace('S',"")
    const viewCountInInternationalCurrencySystem = convertToInternationalCurrencySystem(viewCount)
    const likeCountInInternationalCurrencySystem = convertToInternationalCurrencySystem(likeCount)

    return(
        <div className={`inline-block shadow-lg shadow-slate-300 rounded-md p-4 my-4 ${showSidebar ? 'w-1/5 mx-4  relative left-12' : 'w-1/5 mx-8'} `} >
            <Link to={`/watch?v=${items.id}`}>
                <img className="rounded-lg" src={thumbnails.high.url}  alt="thumbnail"/>
                <p className="text-right relative bottom-7 right-3 text-white text-sm " >{timestamp}</p>
                <p className="text-md font-bold text-gray-700" >{title}</p>
                <p className="text-sm font-bold my-2 text-gray-700" >{channelTitle}</p>
                <div className="flex font-xs text-gray-600" >
                    <p className="mr-2" >{viewCountInInternationalCurrencySystem} views</p>
                    <p className="text-3xl mr-1">°{" "}</p>
                    <p className="" >{likeCountInInternationalCurrencySystem} likes</p>
                </div>
            </Link>
        </div>
    )
}

export default VideoCard