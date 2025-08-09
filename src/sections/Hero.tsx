"use client"
import { section } from "framer-motion/client";
import Image from "next/image";
import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg"

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }]
    ]);
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [leftPointerScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5, ease: "easeInOut" }],
    ]);

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay:1.5}],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }]
    ]);
    rightPointerAnimate([
      [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
      [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }],
    ]);
  }, [])
  return (
    <section className="py-24 overflow-x-clip relative bg-black text-white" style={{
      cursor:`url(${cursorYouImage.src}),auto`
    }}>
      <div className="container relative z-10">
        {/* Background Images */}
        <motion.div ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className="absolute -left-32 top-16 hidden lg:block z-0 ">
          <Image src={designExample1Image} alt="Design example 1 image"
          draggable="false"/>
        </motion.div>
        <motion.div ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-56 top-96 hidden lg:block"
        >
          <Pointer name="Andrea" />
        </motion.div>

        {/* Pointer Badges */}
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x:100 , y: 100 }}
          drag
          className="absolute -right-72 -top-16 hidden lg:block">
          <Image src={designExample2Image} alt="Design example 2 image"
          draggable="false" />
        </motion.div>
        <motion.div ref={rightPointerScope}
         initial={{ opacity: 0, x: 275, y: 100 }} 
         className="absolute right-80 top-2 hidden lg:block z-10">  
          <Pointer name="Bryan" color="red" />
        </motion.div>

        {/* Hero Content */}
        <div className="flex justify-center z-10 relative">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            $7.5M seed round raised  b  
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold text-center mt-6 leading-tight z-10 relative">
          Impactful design, <br className="hidden md:inline" /> created effortlessly
        </h1>

        <p className="text-center text-lg md:text-xl text-white/60 max-w-2xl mx-auto mt-6 z-10 relative">
          Design tools shouldn't slow you down. Layers' combination keeps you in your creative flow.
        </p>

        {/* Email Signup */}
        <form className="flex items-center border border-white/15 rounded-full p-2 mt-8 w-full max-w-md mx-auto z-10 relative bg-black">
          <input
            type="email"
            className="bg-transparent px-4 py-2 flex-grow text-white focus:outline-none placeholder-white/60 w-full"
            placeholder="Enter your email"
          />
          <Button type="submit" variant="primary" className="whitespace-nowrap" size="sm">
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
