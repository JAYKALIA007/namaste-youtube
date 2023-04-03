import React from 'react'

const ShimmerSearchCard = () => {
  return (
        <div className='flex flex-row  m-1 my-2 p-2 shadow-md rounded-md w-full h-[280px] shadow-slate-300 ' >
            <div className='h-full w-1/3 shadow-sm rounded-md bg-slate-100 '></div>
            <div className='w-2/3 mx-4 ' >
                <div className="rounded-lg bg-slate-100 w-1/4 h-[40px] "></div>
                <div className="rounded-lg bg-slate-100 w-1/2 h-[32px] mt-5 "></div>
                <div className="rounded-lg bg-slate-100 w-2/3 h-[20px] mt-5 "></div>
                <div className="rounded-lg bg-slate-100 w-2/3 h-[20px] mt-2 "></div>
                <div className="rounded-lg bg-slate-100 w-full h-[10px] mt-10 "></div>
            </div>
        </div>
  )
}

export default ShimmerSearchCard