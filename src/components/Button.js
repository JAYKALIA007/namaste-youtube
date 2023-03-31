import { Link } from "react-router-dom"
const Button = ( {name} ) => {
  return (
    <Link to={`/results?search_query=${name}`}>
      <button className="bg-gray-300 mx-5 py-1 px-2 rounded-md mb-8 w-20">{name}</button>
    </Link>
  )
}

export default Button