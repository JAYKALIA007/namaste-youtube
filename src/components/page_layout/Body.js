// import MainContainer from "./MainContainer"
import Sidebar from "./Sidebar"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
const Body = () => {

    const showSidebar = useSelector(store => store.showSidebar.show)
    return(
        <div className="m-2 p-2 flex w-full" >
            { showSidebar &&  <Sidebar/>}
            <Outlet />
        </div>
    )
}

export default Body