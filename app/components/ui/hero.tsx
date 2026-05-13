"use client";
import { ImPlus } from "react-icons/im";
import { motion } from "framer-motion";
import Button from "../button";
import Navbar from "./navbar";
import Link from "next/link";
import GradientHero from "./herogradient";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white selection:bg-[#00A9A5] selection:text-white">
      {/* GRADIENT BACKGROUND */}
      <GradientHero />

      {/* --- NAVBAR--- */}
      <Navbar initialTransparent={true} />

      {/* --- HERO CONTENT --- */}
      <main className="relative z-10 mx-auto grid max-w-7xl items-center px-4 lg:grid-cols-2 md:px-6 lg:px-20 pb-14 pt-[9rem] min-h-[calc(100vh-100px)]">
        <div className="space-y-8">
          <h1 className="text-4xl leading-[1.1] text-[#1E293B] tracking-tight md:text-6xl">
            Expert <span className="text-[#048b7d]">Care</span> <br />
            Compassionate <br />
            Service
          </h1>

          <p className="max-w-lg text-md md:text-lg font-medium leading-relaxed text-gray-500">
            Providing comprehensive, compassionate care with a focus on
            prevention, diagnosis, and treatment, ensuring your long-term health
            and well-being.
          </p>

          <div className="flex items-center flex-wrap gap-4 pt-4">
            <Link href="/contact">
              <Button text="Schedule Care" />
            </Link>
            <Link href="/services">
              <Button text="Explore Our Services" variant="outline" />
            </Link>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="relative hidden justify-center md:flex lg:justify-end">
          {/* Medical Plus */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-[-5rem] right-[25%] z-0 hidden h-24 w-24 items-center justify-center rounded-full border-4 border-dashed border-black opacity-80 lg:flex"
          >
            <ImPlus size={34} className="text-black" />
          </motion.div>

          {/* image*/}
          <div className="relative z-20 mt-12 lg:mt-0">
            {/* Gradient Background Image */}
            <div
              className="absolute inset-0 -z-10 rounded-[40px] opacity-30 blur-[20px]"
              style={{
                background:
                  "radial-gradient(circle at center, #048b7d 0%, #8fffd2 60%, transparent 100%)",
              }}
            />

            <img
              src="/assets/doctor2.png"
              alt="CareOnline Medical Team"
              className="relative z-10 w-full max-w-2xl object-contain drop-shadow-2xl"
            />

            {/* Semi-Circle */}
            <div className="absolute bottom-0 right-0 h-[80%] w-full rounded-t-full bg-[#048b7d]/20 -z-10" />

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[15%] left-0 z-30 flex items-center gap-4 rounded-xl border border-white bg-white/90 p-6 shadow-2xl backdrop-blur-sm"
            >
              <div className="space-y-1">
                <p className="text-3xl font-black text-[#1E293B]">50+</p>
                <p className="text-sm font-bold text-gray-500">
                  Expert Doctors
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
