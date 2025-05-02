"use client"

import { motion } from "framer-motion"

export function AnimatedCharacter() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px]">
      {/* Head */}
      <motion.div
        className="absolute w-20 h-20 bg-amber-200 rounded-full left-1/2 -translate-x-1/2 top-0"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
      >
        {/* Eyes */}
        <motion.div
          className="absolute w-3 h-3 bg-slate-800 rounded-full left-1/4 top-1/3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        />
        <motion.div
          className="absolute w-3 h-3 bg-slate-800 rounded-full right-1/4 top-1/3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        />

        {/* Smile */}
        <motion.div
          className="absolute w-8 h-4 border-b-2 border-slate-800 rounded-full left-1/2 -translate-x-1/2 top-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.3 }}
        />
      </motion.div>

      {/* Body */}
      <motion.div
        className="absolute w-24 h-32 bg-purple-500 rounded-t-full left-1/2 -translate-x-1/2 top-[70px]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
      />

      {/* Left Arm */}
      <motion.div
        className="absolute w-8 h-24 bg-purple-500 rounded-full left-[calc(50%-30px)] top-[90px] origin-top"
        initial={{ rotate: -20, opacity: 0 }}
        animate={{ rotate: [-20, 20, -20], opacity: 1 }}
        transition={{
          rotate: {
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1,
          },
          opacity: {
            duration: 0.5,
            delay: 0.4,
          },
        }}
      />

      {/* Right Arm */}
      <motion.div
        className="absolute w-8 h-24 bg-purple-500 rounded-full right-[calc(50%-30px)] top-[90px] origin-top"
        initial={{ rotate: 20, opacity: 0 }}
        animate={{ rotate: [20, -20, 20], opacity: 1 }}
        transition={{
          rotate: {
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1,
          },
          opacity: {
            duration: 0.5,
            delay: 0.4,
          },
        }}
      />

      {/* Left Leg */}
      <motion.div
        className="absolute w-8 h-24 bg-slate-700 rounded-full left-[calc(50%-16px)] top-[190px]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
      />

      {/* Right Leg */}
      <motion.div
        className="absolute w-8 h-24 bg-slate-700 rounded-full right-[calc(50%-16px)] top-[190px]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
      />

      {/* Speech Bubble */}
      <motion.div
        className="absolute top-[-40px] right-[calc(50%-80px)] bg-white dark:bg-slate-700 p-3 rounded-xl shadow-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
      >
        <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Join our waitlist!</p>
        <div className="absolute w-4 h-4 bg-white dark:bg-slate-700 transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
      </motion.div>
    </div>
  )
}
