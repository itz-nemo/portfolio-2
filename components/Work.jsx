import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.3 }}
      className='text-center mb-2 text-lg font-Ovo'>
      My portfolio</motion.h4>

      <motion.h2
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.3 }}
      className='text-center text-5xl font-Ovo'>
      My latest work</motion.h2>

      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.3 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
      Welcome to my analytics portfolio! Explore a collection of projects showcasing my expertise in analytics and automations.</motion.p>

    {/* PROJECT GRID - COMMENTED OUT */}
    {/* All projects have been moved to the new dedicated projects webpage */}
    {/* <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.4 }}
    className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
        {workData.map((project, index)=>(
            <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            style={{backgroundImage: `url(${project.bgImage})`}}>
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className='block w-full h-full'>
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-300 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                            <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                        </div>
                    </div>
                </Link>
            </motion.div>
        ))}
    </motion.div> */}

    {/* BIG MESSAGE - PROJECTS MOVED */}
    <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    className='flex items-center justify-center my-2 py-3'>
      <div className='text-center bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg p-6 max-w-2xl'>
        <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className='text-4xl font-bold mb-4 text-gray-900 dark:text-white'>
          Projects Moved! 
        </motion.h2>
        <motion.p 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className='text-lg text-gray-700 dark:text-gray-200'>
          All my projects have been shifted to a new dedicated webpage. 
          <br />
          <span className='font-semibold'>Click the "View all projects" button below to see them!</span>
        </motion.p>
      </div>
    </motion.div>

    <motion.a 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.3 }}
    href="https://tranquil-heron-754.notion.site/Welcome-to-my-project-section-29b0f561cb02803a809ece74ea49a992?pvs=74" target="_blank" rel="noopener noreferrer" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-300 dark:text-white dark:border-white dark:hover:bg-darkHover'>
        View all projects
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
    </motion.a>

    </motion.div>
  )
}

export default Work
