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
    <main >
    {data.map((i)=>(
        <div key={i._id} className="bg-gray-200 h-auto mt-0 md:mt-8 flex">
            <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
            className="flex flex-col md:justify-center md:items-start p-8 w-2/3">
                <div className=" text-4xl md:text-5xl lg:text-8xl py-8 font-extrabold tracking-tight ">{i.heroText}</div>
                <div className="text-sm md:text-lg py-6  mb-4"><PortableText value={i.details} /></div>

            </motion.div>
            <motion.div
             initial={{ x: 1000 }}
             animate={{ x: 0 }}
             transition={{ duration: 1.5 }}
            className="w-1/3 hidden md:block ">
          
                <Image src={i.heroImages[0]}
                alt="hero"
                width={350}
                height={350}
                decoding="async"
      loading="lazy"
      className="h-[650px] transition duration-300 ease-out-in hover:scale-105 overflow-hidden"/>
              
            </motion.div>

            

        </div>

    ))}
</main>
  )
}

export default HeroSection