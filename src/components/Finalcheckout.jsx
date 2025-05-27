import React from 'react'
import Bookingstatus from './Bookingstatus'
import InvoiceTicket from './InvoiceTicket'

const Finalcheckout = () => {
  return (
    <div className='w-full  lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] space-y-10 '>
      <div className="grid grid-cols-5 gap-16 items-start">
      <div className="col-span-3 space-y-7 pr-20">
                <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
                    Passenger Information
                </h2>
                <form  className="space-y-6">
                {/* Name Section */}
                <div className="">
                     <label htmlFor="fullname" className="block mb-2 font-semibold ">
                        Fullname
                      </label>
                    <input type="text" name="fullname" placeholder='e.g. Rizve Ahamed ' id="fullname" className="w-full appearence-none  text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark: bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
                </div>
                {/* Email Section */}
                <div className="">
                      <label htmlFor="email" className="block mb-2 font-semibold ">
                         Email Address
                      </label>
                     <input type="email" name="email" placeholder='e.g. rayhan3487@gmail.com ' id="email" className="w-full appearence-none  text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark: bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />

                     <small className="block mt-1 text-xs text-neutral-500 dark:text-neutral-600 font-normal">
                        You will get your ticket in your email address.
                     </small>
                </div>
                {/* Phone Section */}
                <div className="">
                     <label htmlFor="phone" className="block mb-2 font-semibold ">
                        Phone Nbr.
                      </label>
                    <input type="number" name="phone" placeholder='e.g. +880 1782064867 ' id="phone" className="w-full appearence-none  text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark: bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
                </div>
                {/* AltPhone Section */}
                <div className="">
                     <label htmlFor="altphone" className="block mb-2 font-semibold ">
                        Alternative Phone Nbr.
                      </label>
                    <input type="number" name="altphone" placeholder='e.g. +880 1994762892 ' id="altphone" className="w-full appearence-none  text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark: bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
                </div>
                
                 
                </form>
            </div>
            <div className='col-span-2 space-y-8'>
                
            {/* Booking Status  */}
            <Bookingstatus />
            <InvoiceTicket />
            </div>

      </div>
    </div>
  )
}

export default Finalcheckout
