import React from 'react'
import ShimmerSearchCard from './ShimmerSearchCard'

const ShimmerSearchCardContainer = () => {
  return (
    <div className='w-full' >
        {Array(10).fill(" ").map((e,index) =>(
        <ShimmerSearchCard key={index}  />
    ))}
    </div>
  )
}

export default ShimmerSearchCardContainer