import { AiOutlineMenu , AiOutlineUser } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { MdOutlineNotifications } from "react-icons/md";
import SearchBar from "../search/SearchBar";
import { useDispatch } from 'react-redux'
import { toggleSidebar } from "../../utils/showSidebarSlice";
import { Link } from 'react-router-dom'
const Header = () => {
    const dispatch = useDispatch()
    return(
        // <div className="mb-2 p-2 grid grid-flow-col shadow-xl" >
        <div className="mb-2 p-2 grid grid-flow-col sticky top-0  z-10 h-20 bg-white" >
            <div className="col-span-1" >
                <button className="mx-4" onClick={()=>{ dispatch(toggleSidebar()) }}  ><AiOutlineMenu className="text-2xl relative top-2"/></button>
                <Link to="/"><img className="inline-block ml-2 bg-white h-16 " src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-700x394.png" alt="youtube logo" /></Link>
            </div>
            <div className="col-span-10 text-center" >
                <SearchBar />
            </div>
            <div className="col-span-1 text-right mr-4" >
                <RiVideoAddLine className="inline-block text-3xl mx-2 relative top-4 cursor-pointer"/>
                <MdOutlineNotifications  className="inline-block text-3xl mx-2 relative top-4 cursor-pointer"/>
                <AiOutlineUser  className="inline-block text-3xl mx-2 relative top-4 cursor-pointer"/>
            </div>
        </div>
    )
}
export default Header