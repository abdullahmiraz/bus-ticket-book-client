import React from 'react'

const Bookingstatus = () => {
  return (
    <div className='w-full col-span-3 sticky top-20 space-y-7'>
      <div className="w-full bg-neutral-50 rounded-xl py-4 px-6 border-neutral-200 shadow-sm space-y-5">
        <h1 className="text-lg text-neutral-700 font-bold text-center border-b border-neutral-200 pb-4">
            Your Ticket Report Status
        </h1>
        <div className="space-y-5">

          <div className="space-y-2 w-full">
            <h1 className=" text-base text-neutral-700 font-medium">
                  Your Destination
            </h1>
          </div>

          <div className="space-y-2 w-full">
            <h1 className=" text-base text-neutral-700 font-medium">
                  Your Seats
            </h1>
          </div>

          <div className="space-y-2 w-full">
            <h1 className=" text-base text-neutral-700 font-medium">
                  Fare Details
            </h1>
          </div>


        </div>
      </div>
    
      <div className="w-full px-1 5"></div>
    </div>
  )
}

export default Bookingstatus
