import React from 'react'

const ShimmerVideoCard = () => {

  return (
    <div>
        <div className="inline-block shadow-lg shadow-slate-300 rounded-md p-4 my-4 mx-4 relative left-12 w-[270px]">
            <div className="rounded-lg bg-slate-100 w-full h-[180px] "></div>
            <div className="rounded-lg bg-slate-100 w-full h-[20px] mt-5 "></div>
            <div className="rounded-lg bg-slate-100 w-full h-[20px] mt-2 "></div>
            <div className="rounded-lg bg-slate-100 w-full h-[20px] mt-2 "></div>
            <div className="rounded-lg bg-slate-100 w-full h-[20px] mt-2 "></div>
            <div className="rounded-lg bg-slate-100 w-full h-[10px] mt-5 "></div>
        </div>
    </div>
  )
}

export default ShimmerVideoCard