import MainContainer from "./MainContainer"
import Sidebar from "./Sidebar"
import { useSelector } from "react-redux"
const Body = () => {

    const showSidebar = useSelector(store => store.showSidebar.show)
    // console.log(showSidebar)
    return(
        <div className="m-2 p-2 flex" >
            { showSidebar &&  <Sidebar/>}
            <MainContainer/>
        </div>
    )
}

export default Body