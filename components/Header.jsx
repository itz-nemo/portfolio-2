import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.5, type: 'spring', stiffness: 100}}
      >
        <Image src={assets.profile_close} alt='' className='rounded-full w-32'/>
      </motion.div>
      <motion.h3 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.4, delay: 0.2}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Hey! Nimish here <Image src={assets.hand_icon} alt='' className='w-6'/></motion.h3>
    <motion.h1 
    initial={{y: -30, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 0.5, delay: 0.3}}
    className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Analyst and automation enthusiast.</motion.h1>

        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.4, delay: 0.4}}
        className='max-w-2xl mx-auto font-Ovo'>
Spent years shipping code, analytics, and AI agents across web stacks—turning messy data into decisions and repeatable systems.        </motion.p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.4, delay: 0.6}}
            href="https://github.com/itz-nemo"
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
            >Visit Github <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a>

            <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.4, delay: 0.7}}
            href="https://drive.google.com/drive/folders/12LVqW3LNNK7ejqclFb_d5pOGZDG1mPpX?usp=sharing" download 
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
                My resume <Image src={assets.download_icon} alt='' className='w-4'/></motion.a>

                { <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.4, delay: 0.6}}
            href="https://tranquil-heron-754.notion.site/Welcome-to-my-project-section-29b0f561cb02803a809ece74ea49a992"
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
            >MY PROJECTS <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a> }
        </div>
    </div>
  )
}

export default Header
