import React from 'react'
import {delay, motion} from 'framer-motion'
import Bus3 from "../../../assets/bus3.png"
const Hero = () => {
    // Animation variants for the image
    const imageVariants = {
        initial: { 
           x: "100%",
        }, 
        animate:{
          x:"20%",
          transition: {
            duration: 3,
            ease: "easeInOut",
          
          },
        },
    };
  return (
    <div className='w-full h-[calc(100vh-80px)] lg:px-28 md:px-16 sm:px-7 px-4 mt-[8ch] flex items-center justify-center flex-col hero relative'>
        <div className="flex-1 w-full flex items-stretch justify-between gap-12 pb-10">
    <motion.div
        className="w-[35%] h-auto rounded-md flex justify-center flex-col space-y-14"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'linear', delay: 0.2 }}
>
        <motion.div
    className="space-y-5"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'linear', delay: 0.2 }}
  >
    <motion.h1 className="text-7xl font-bold text-neutral-50 leading-[1.15]"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: 'linear', delay: 0.6 }}
    >
     Reserve your BUS
      <span className="text-violet-400 tracking-wider"> Tickets </span> 
      Now
    </motion.h1>

    <motion.p className="text-lg font-normal text-neutral-300 line-clamp-3 text-elipses"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: 'linear', delay: 0.6 }}
    >
        Find and book your bus tickets easily with just a few clicks.We offer a wide range of bus routes 
    </motion.p>
        </motion.div>
        <motion.button className="w-fit bg-violet-700 hover:bg-violet-800 text-neutral-50 font-medium py-3 px-6 rounded-md ease-in-out duration-300 ">
        Reserve Seat Now
        </motion.button> 
    </motion.div>
        <div className="w-[70%] h-full rounded-md flex items-end justify-end absolute top-0 right-48">
            <motion.img src={Bus3} alt="bus img" className="w-full aspect-[4/2] object-contain "
                initial= "initial"
                animate= "animate"
                variants= {imageVariants}
            />
        </div>
        </div>
    </div>
  )
}

export default Hero
