import Button from "./Button"
import { filterButtonNameList } from "../utils/constants"
const FilterButtonContainer = () => {
    
    return(
        <div className="flex overflow-x-scroll" >
            {filterButtonNameList.map((button,index)=>{
                return(
                    <Button key={index} name={button}/>
                )
            })}
        </div>
    )
}

export default FilterButtonContainer