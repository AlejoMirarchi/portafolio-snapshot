"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import { twMerge } from "tailwind-merge"
import { NavLink } from "@/components/nav-link"
import Link from "next/link"

export const DragCards: React.FC = () => {
    return (
        <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-zinc-900/10" >
            
            <div className="absolute inset-0 -z-10  backdrop-blur-3xl pointer-events-none" />
            <h2 className="relative z-20 text-[20vw] font-black text-neutral-800 md:text-[150px]">
                JUST<span className="text-primary">CODE</span>.
            </h2>
            <motion.button 
            onClick={()=>{
                
            }

            }
            className=" top-0 p-3 border-primary-foreground inset-shadow-zinc-600 bg-primary/40 my-4 mx-2 rounded-full text-foreground  ">Volver a inicio</motion.button>
            <Cards />
        </section>
    )
}

const Cards: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    return (
        <div ref={containerRef} className="absolute inset-0 z-20">
            <Card
                src={"/escudotec.png"}
                alt="ejemplo"
                top="19%"
                left="5%"
                rotate="10deg"
                className="w-40 md:w-56"
                containerRef={containerRef}
            />

            <Card
                src="https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=702"
                alt="ejemplo"
                top="30%"
                left="80%"
                rotate="16deg"
                className="w-30 md:w-46"
                containerRef={containerRef}
            />

            <Card
                src="https://miro.medium.com/v2/resize:fit:1400/1*N6ugtpXET1pOLysSk_DWaQ.png"
                alt="ejemplo"
                top="65%"
                left="50%"
                rotate="-10deg"
                className="w-40 md:w-56"
                containerRef={containerRef}
            />

            <Card
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKj_GF6D_r8O0VG9x845HnusdJF_Iw2Y4Bw&s"
                alt="ejemplo"
                top="65%"
                left="3%"
                rotate="-15deg"
                className="w-40 md:w-76"
                containerRef={containerRef}
            />

            <Card
                src="https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332"
                alt="ejemplo"
                top="10%"
                left="60%"
                rotate="10deg"
                className="w-40 md:w-56"
                containerRef={containerRef}
            />
        </div>
    )
}

interface Props {
    src: string
    alt: string
    top: string
    left: string
    rotate: string
    className?: string
    containerRef: React.MutableRefObject<HTMLDivElement | null>
}

const Card: React.FC<Props> = ({ containerRef, className, top, left, rotate, src, alt }) => {
    const [zIndex, setZIndex] = useState(0)

    const updateZIndex = () => {
        const els = document.querySelectorAll(".drag-type")
        let maxZ = -Infinity
        els.forEach((el) => {
            const z = parseInt(window.getComputedStyle(el).getPropertyValue("z-index"))
            if (!isNaN(z) && z > maxZ) {
                maxZ = z
            }
        })
        setZIndex((Number.isFinite(maxZ) ? maxZ : 0) + 1)
    }

    return (
        <motion.img
            src={src}
            onMouseDown={updateZIndex}
            alt={alt}
            drag
            dragConstraints={containerRef}
            style={{
                top,
                left,
                rotate,
                zIndex,
            }}
            className={twMerge(
                "drag-type absolute w-48 size-56 shadow-lg rounded shadow-accent-foreground bg-neutral-300 p-1 pb-4 ",
                className
            )}
        />
    )
}