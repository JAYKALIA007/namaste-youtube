import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="relative top-4" >
        <input className="border border-gray-400 w-1/2 h-9 rounded-l-full pl-4" type="text" id="search" name="search" placeholder="Search" />
        <div className="border border-gray-400  inline p-2 px-4 rounded-r-full text-white bg-gray-400">
            <FaSearch className="inline text-xl relative right-1"  />
        </div>
    </div>
  )
}

export default SearchBar