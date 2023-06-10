import { useSelector } from "react-redux"
import VideoContainer from "./VideoContainer"
import FilterButtonContainer from "./FilterButtonContainer"

const MainContainer = () => {
    const  showSidebar  = useSelector(store => store.showSidebar.show)
    return(
        <div className={`${showSidebar ? 'w-5/6' : 'w-full'}  shadow-lg rounded-lg m-2 p-2`} >
            <FilterButtonContainer />
            <VideoContainer />
        </div>
    )
}

export default MainContainer