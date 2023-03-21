
const FilterButtonContainer = () => {
    return(
        <div className="overflow-auto" >
            {Array(13).fill(" ").map((e,index)=>(<button className="bg-gray-300 mx-5 py-1 px-2 rounded-md " key={index}>Filter</button>))}
        </div>
    )
}

export default FilterButtonContainer