import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
const SearchBarSuggestionContainer = ({suggestion}) => {
  if(!suggestion) return null
  return (
    <div>
        <Link to={`/results?search_query=${suggestion}`}>
        <p 
            className="p-1 px-2 hover:bg-gray-300 
            rounded-md cursor-pointer" 
            >
                <FaSearch className="inline mr-2 font-thin text-sm text-gray-600"/> 
                {suggestion}
        </p>
        </Link>
    </div>
  )
}

export default SearchBarSuggestionContainer