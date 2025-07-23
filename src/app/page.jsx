"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Coding Meaning, Designing Insight, Delivering Results.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Building Intelligent Solutions, One Line at a Time Welcome to my
            digital space, where data meets design and language becomes insight.
            As a Data Processing Specialist, Web Developer, and NLP Enthusiast,
            I craft smart, scalable, and user-focused solutions. Explore my
            portfolio to see how I blend structured thinking with creative
            engineering to solve real-world problems — from clean user
            interfaces to intelligent text analytics.
          </p>
          
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
