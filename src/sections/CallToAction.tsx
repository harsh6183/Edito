"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);
  const [scope, animate] = useAnimate();
  const animation = useRef<AnimationPlaybackControls>();

  useEffect(() => {
    if (scope.current) {
      animation.current = animate(
        scope.current,
        { x: "-50%" },
        { duration: 30, ease: "linear", repeat: Infinity }
      );
    }
  }, [animate, scope]);

  useEffect(()=>{
    if(animation.current){
        if(isHovered){
            animation.current.speed=0.5;
        }else{
            animation.current.speed=1;
        }
    }
  },[isHovered]);

  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4 flex group cursor-pointer">
        <motion.div
          ref={scope}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex flex-none pr-16 gap-16 text-7xl md:text-8xl font-medium"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-lime-400 group-hover:text-white">Try it for free</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
