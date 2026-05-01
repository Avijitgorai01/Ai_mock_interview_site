import React from 'react'
import { FaBrain } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { motion } from "motion/react"
import { FcGoogle } from "react-icons/fc";



function Auth() {
  return (
    <div className='w-full min-h-screen bg-[#d6fbdc] flex items-center justify-center px-6 py-20'>
      <motion.div 
      initial= {{opacity:0, y:-40}}
      animate= {{opacity:1, y:0}}
      transition={{duration:1.05}}
      className='w-full max-w-md p-8 rounded-3xl bg-[rgb(195,255,201)] shadow-2xl border border-[rgb(119,255,114)]'>
        <div className='flex items-center justify-center gap-3 mb-6'>
          <div className='bg-black text-white p-2 rounded-lg'>
            <FaBrain size={18} />
          </div>
          <h2 className='font-semibold text-lg'>MOCK INTERVIEW</h2>
        </div>
        <h1 className='text-2xl md:text-3xl font-semibold text-center leading-snug mb-4'>
          Continue with {"  "}
          <span className='bg-[#8ffa98] text-[#05630b] px-3 py-1 rounded-full inline-flex items-center gap-2'>
            <IoSparkles size={16}/>
            AI Smart Interview
          </span>
        </h1>
        <p className='text-grey-500 text-center textsm md:text-base leading-relaxed mb-8'>
          Sign in to AI powerd mock interviews,
          track your progress and unlock detailed performance insights.
        </p>

          <motion.button 
          whileHover={{opacity:0.9, scale:1.03}}
          whileTap={{opacity:1, scale:0.98}}
          className='w-full flex items-center justify-center gap-3 py-3 bg-black text-white rounded-full shadow-md'>
            <FcGoogle size={20}/>
            Continue with Google
          </motion.button>

      </motion.div>
    </div>
  )
}

export default Auth