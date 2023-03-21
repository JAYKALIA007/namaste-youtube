import VideoCard from "./VideoCard"
const VideoContainer = () => {
    return(
        <div className="p-2" >
            {Array(10).fill("").map((e,index)=>(<VideoCard key={index}/>))}
        </div>
    )
}

export default VideoContainer