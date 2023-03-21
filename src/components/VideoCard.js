const VideoCard = () => {
    return(
        <div className="border border-black rounded-md p-2 m-4 mx-12 w-1/4 inline-block" >
            <img className="border border-black w-full"  style={{"height":"200px"}} src="https://camo.githubusercontent.com/5ebc638bb3e5113c5a87a5462197c35f40f7185ea9940e7723846b6e403f8a6b/68747470733a2f2f6372656174652d72656163742d6170702e6465762f696d672f6c6f676f2e737667"  alt="dummy"/>
            <p className="text-right relative bottom-7 right-3 " >2:25</p>
            <p className="text-xl font-bold " >Title</p>
            <p className="text-s" >ChannelName</p>
            <div className="flex" >
                <p className="mr-2" >ViewCount</p>
                <p className="" >UploadDate</p>
            </div>
        </div>
    )
}

export default VideoCard