"use client"
import Image from "next/image";
import { Hero } from "../../../Types/Hero";
import { PortableText } from '@portabletext/react'
import { motion } from 'framer-motion'

interface prop {
    data: Hero[]
}

const HeroSection = ({data} : prop) => {
  return (
    <main className="mb-[50px] mt-[100px]" >
    {data.map((i)=>(
        <div key={i._id} className="  mx-auto flex flex-col-reverse items-center bg-gray-200 dark:bg-background h-auto mt-0 md:mt-8 md:flex md:flex-row">
            <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
            className="flex flex-col md:justify-center md:items-start p-8 w-2/3">
                <div className=" text-2xl md:text-5xl lg:text-8xl py-4 md:py-8 font-extrabold tracking-tight ">{i.heroText}</div>
                <div className="text-sm md:text-lg py-3 md:py-6  mb-4"><PortableText value={i.details} /></div>

            </motion.div>
            <motion.div
             initial={{ x: 1000 }}
             animate={{ x: 0 }}
             transition={{ duration: 1.5 }}
            className="md:w-1/3 ">
          
                <Image src={i.heroImages[0]}
                alt="hero"
                width={350}
                height={350}
                decoding="async"
      loading="lazy"
      className="h-[650px] transition hidden md:block  duration-300 ease-out-in hover:scale-105 overflow-hidden"/>
       <Image src={i.heroImages[0]}
                alt="hero"
                width={150}
                height={150}
                decoding="async"
      loading="lazy"
      className=" md:hidden w-[150px] h-[300px] flex items-center"/>
              
            </motion.div>

            

        </div>

    ))}
</main>
  )
}

export default HeroSection