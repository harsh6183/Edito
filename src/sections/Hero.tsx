import { section } from "framer-motion/client";
import Image from "next/image";
import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Pointer from "@/components/Pointer";

export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip relative bg-black text-white">
      <div className="container relative z-10">
        {/* Background Images */}
        <div className="absolute -left-56 top-16 hidden lg:block z-0">
          <Image src={designExample1Image} alt="Design example 1 image" />
        </div>
        <div className="absolute -right-72 -top-16 hidden lg:block z-0">
          <Image src={designExample2Image} alt="Design example 2 image" />
        </div>

        {/* Pointer Badges */}
        <div className="absolute left-56 top-[28rem] hidden lg:block z-10">
          <Pointer name="Andrea" />
        </div>
        <div className="absolute right-80 top-2 hidden lg:block z-10">
          <Pointer name="Bryan" color="red" />
        </div>

        {/* Hero Content */}
        <div className="flex justify-center z-10 relative">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            $7.5M seed round raised
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
