import Button from "./Button"
import { filterButtonNameList } from "../../../utils/constants"
import { Link } from "react-router-dom"

const FilterButtonContainer = () => {
    
    return(
        <div className="flex overflow-x-scroll" >
            <Link to={`/live`}>
                <button className="bg-gray-300 mx-5 py-1 px-2 rounded-md mb-8 w-20">Live</button>
            </Link>
            {filterButtonNameList.map((button,index)=>{
                return(
                    <Button key={index} name={button}/>
                )
            })}
        </div>
    )
}

export default FilterButtonContainer