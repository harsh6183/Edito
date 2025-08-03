import { section } from "framer-motion/client"
import Button from "@/components/Button";

export default function Hero() {
    return (
        <section className="py-24 ">
            <div className="container">
                <div className="flex justify-center" >
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">$7.5M seed round raised</div></div>
                <h1 className="text-6xl md:text-7xl font-medum text-center mt-6">Impactful design, created effortlessly</h1>
                <p className="text-center text-xl text-white/50 max-w-2xl mt-8">Design tools shouldn't slow you down.Layers combination that keeps you in your creative flow.</p>

                <form className="flex border border-white/15 rounded-full p-2 mt-8 w-full  mx-w-lg mx-auto">
                    <input
                     type="email" 
                     className="bg-transparent px-4 focus:outline-none md:flex-1" placeholder="Enter your email" aria-placeholder="Enter your email" />
                    <Button 
                    type="submit" 
                    variant="primary" 
                    className=" whitespace-nowrap"
                    size="sm">Sign Up</Button>
                </form>
            </div>
        </section>
    );
}
