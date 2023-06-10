import React from 'react'
import ShimmerVideoCard from './ShimmerVideoCard'

const ShimmerVideoCardContainer = () => {
  return (
    <div className='p-2 flex flex-wrap' >
        {Array(20).fill(" ").map( (e,index) => (
            <ShimmerVideoCard key={index}  />
        ))}
    </div>
  )
}

export default ShimmerVideoCardContainer