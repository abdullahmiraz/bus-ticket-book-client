import React from 'react';
import bus from "../../assets/bus.png";
import { FaStairs, FaStarHalfStroke } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Destination from '../Destination';
import DeparTime from '../Departime/DeparTime';
import Seat from '../Seat/Seat';
const Detail = () => {
  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[10ch]'>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="col-span-1 space-y-8">
          <img 
            src={bus} 
            alt="detail img" 
            className="w-full aspect-[3/2] object-contain rounded-md" 
          />

          <div className="space-y-4">
             <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
                Luxury Bus Service
                <span className="text-base font-normal text-neutral-400 dark:text-neutral-500 ml-3">
                    (Bus Number Plate)
                </span>
             </h1>
             <div className="flex items-center gap-x-2">
                <div className="flex items-center gap-x-1 text-sm text-yellow-500 dark:text-yellow-600">
                    <FaStarHalfStroke />
                    <FaStarHalfStroke />
                    <FaStarHalfStroke />
                    <FaStarHalfStroke />
                    <FaStarHalfStroke />
                 
                </div>
                <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                    (4.5)
                </p>
             </div>

             <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quod accusantium qui impedit facilis eligendi nulla assumenda eos ipsa nemo.
                </p>
          </div>
        </div>

        <div className="col-span-1 space-y-10">
           <div className="space-y-6">
            {/* Destination Card */}
            <Destination />
            {/* Departure Card */}
            <DeparTime />
            </div> 

            {/* Seat Selection */}
            <Seat />
            {/* Checkout Btn */}
            <div className="flex">
            <Link to="/bus/bus/bus-details/Checkout" className="w-fit bg-violet-600 text-neytral-50 font-medium text-base px-6 py-3  rounded-md hover:bg-violet-700 ease-in-out duration-300">
                 Process to Checkout
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
