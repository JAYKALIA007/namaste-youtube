import { AiOutlineHome , 
         AiOutlineVideoCameraAdd, 
         AiOutlineScissor, 
         AiOutlineUser, 
         AiOutlineFire,
         AiOutlineShopping,
         AiOutlineTrophy,
         AiOutlineBulb,
         AiOutlineShop
        } from "react-icons/ai";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { RiVideoLine } from "react-icons/ri";
import { BiTimeFive, BiMovie} from "react-icons/bi";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { TbLivePhoto } from "react-icons/tb";
import { SiYoutubegaming } from "react-icons/si";
import { BsNewspaper } from "react-icons/bs";
import { Link } from "react-router-dom";



const Sidebar = () => {
    return(
        <div className="w-1/6 border border-gray-400 shadow-lg rounded-lg m-2 p-2 text-lg" >
            <ul className="py-2">
                <li className="py-1"><Link to="/"><AiOutlineHome className="inline mr-2" />Home</Link></li>
                <li className="py-1"><AiOutlineVideoCameraAdd className="inline mr-2" />Shorts</li>
                <li className="py-1"><MdOutlineSubscriptions className="inline mr-2"  />Subscriptions</li>
            </ul>
            <hr/>
            <ul>
                <li className="py-1"><MdOutlineVideoLibrary className="inline mr-2" />Library</li>
                <li className="py-1"><VscHistory className="inline mr-2"/>History</li>
                <li className="py-1"><RiVideoLine className="inline mr-2"/>Your Videos</li>
                <li className="py-1"><BiTimeFive className="inline mr-2"/>Watch Later</li>
                <li className="py-1"><AiOutlineScissor className="inline mr-2"/>Your clips</li>
            </ul>
            <hr/>
            <h3 className="text-xl font-bold py-4 " >Subscriptions</h3>
            <ul>
                <li className="py-1"><AiOutlineUser className="inline mr-2"/>Channel 1</li>
                <li className="py-1"><AiOutlineUser className="inline mr-2"/>Channel 2</li>
                <li className="py-1"><AiOutlineUser className="inline mr-2"/>Channel 3</li>
                <li className="py-1"><AiOutlineUser className="inline mr-2"/>Channel 4</li>
                <li className="py-1"><AiOutlineUser className="inline mr-2"/>Channel 5</li>
            </ul>
            <hr/>
            <h3 className="text-xl font-bold py-4 " >Explore</h3>
            <ul>
                <li className="py-1"><AiOutlineFire className="inline mr-2"/>Trending</li>
                <li className="py-1"><AiOutlineShopping className="inline mr-2"/>Shopping</li>
                <li className="py-1"><IoMusicalNoteOutline className="inline mr-2"/>Music</li>
                <li className="py-1"><BiMovie className="inline mr-2"/>Movies</li>
                <li className="py-1"><TbLivePhoto className="inline mr-2"/>Live</li>
                <li className="py-1"><SiYoutubegaming className="inline mr-2"/>Gaming</li>
                <li className="py-1"><BsNewspaper className="inline mr-2"/>News</li>
                <li className="py-1"><AiOutlineTrophy className="inline mr-2"/>Sports</li>
                <li className="py-1"><AiOutlineBulb className="inline mr-2"/>Learning</li>
                <li className="py-1"><AiOutlineShop className="inline mr-2"/>Fashion & Beauty</li>
            </ul>
        </div>
    )
}

export default Sidebar