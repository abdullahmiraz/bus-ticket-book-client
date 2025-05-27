import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import PaymentMethod from './PaymentMethod';
import { Link } from 'react-router-dom';
const Checkout = () => {
  return (
    <div  className='w-full  lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] space-y-10 '>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
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
                {/* Payment method */}
                  <PaymentMethod />
                </form>
            </div>
            <div className="col-span-2 space-y-8">
                <div className="bg-neutral-200/50 dark:bg-neutral-900/70 rounded-md py-5 px-7">
               
                <h2 className="text-xl text-center text-neutral-800 dark:text-neutral-100 font-medium border-b-2 border-neutral-200 dark:border-neutral-800/40 pb-3 mb-4">
                    Your Booking Status
                </h2>
                  <div className="space-y-8 pb-3">
                      <div className="space-y-4">
                        <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                            Your Destination
                        </h6>
                          <div className="w-full flex items-center gap-x-3">
                            {/*Location 1 */}
                            <div className="w-fit text-base font-medium">
                                From:- <span className="ml-1.5">
                                    Location 1
                                </span>
                            </div>

                             <div className="flex-1">

                             <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:border-neutral-700/80"></div>

                             </div>

                            {/*Location 2 */}
                            
                            <div className="w-fit text-base font-medium">
                                To:- <span className="ml-1.5">
                                    Location 4
                                </span>
                            </div>
                          </div>

                             {/* Arrive  Section */}

                          <div className="w-full flex items-center gap-x-3">

                          <div className="w-fit text-base font-medium">
                                Arrive at:- <span className="ml-1.5">
                                    03.30 PM
                                </span>
                            </div>

                             <div className="flex-1">

                             <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:border-neutral-700/80"></div>

                             </div>

                            {/*Departure Section */}
                            
                            <div className="w-fit text-base font-medium">
                                Depart at:- <span className="ml-1.5">
                                    04.00 PM
                                </span>
                            </div>

                          </div>

                           <div className="space-y-4">
                            <div className="w-full flex items-center justify-between">
                                  <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                    Total No. of Seats
                                  </h6>

                                  <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                    10 <span className="text-x5">
                                    (Driver side)
                                    </span>
                                  </h6>

                            </div>
                           </div>
                           {/* Seat Section */}
                          
                           {/* Amount Section */}

                           <div className="space-y-4">
                            <div className="w-full flex items-center justify-between">
                                  <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                    Total Amount
                                  </h6>

                                  <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                   Taka . 5000
                                  </h6>

                            </div>
                           </div>

                      </div>
                  </div>


                </div>

                <Link to="/bus/bus/bus-details/Checkout/Finalcheckout" className="w-full px-8 h-12 bg-violet-600 text-neutral-50 text-base font-normal rounded-md flex items-center justify-center gap-x-2">
                    Processed to Pay <FaArrowRightLong />
                </Link>

            </div>
        </div>
    </div>
  )
}

export default Checkout
