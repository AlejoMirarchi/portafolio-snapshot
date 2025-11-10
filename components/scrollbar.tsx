"use client"
import React from 'react'
import {motion,useScroll} from "framer-motion"

function Scrollbar() {
  return (
   <ScrollbarView />
  )
}
const ScrollbarView = () => {
    const {scrollYProgress} = useScroll();
    return (
        <motion.div
        style={{
            scaleX: scrollYProgress,
            x:"-50%",
            y:"-50%",
        }}
        className="fixed bottom-0 left-1/2  h-4 w-screen bg-primary/60">
            
        </motion.div>
    );
}

export default Scrollbar