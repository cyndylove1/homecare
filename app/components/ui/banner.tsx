"use client";
import Link from "next/link";
import { motion } from "framer-motion";


interface BannerProps {
  title: string;
  currentPage: string;
  backgroundImage?: string;
}

const Banner = ({
  title,
  currentPage,
  backgroundImage = "/assets/caregiver2.jpg",
}: BannerProps) => {
  return (
    <section className="relative w-full overflow-hidden h-[300px] py-20 md:py-28 bg-white mt-[5rem] flex flex-col items-center justify-center text-center px-6">
      {/* BACKGROUND IMAGE (ADDED) */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="banner background"
          className="h-full w-full object-cover"
        />
        {/* optional dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 1. GRID & GRADIENT BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
        linear-gradient(#048b7d 1px, transparent 1px),
        linear-gradient(90deg, #048b7d 1px, transparent 1px)
      `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* GRADIENT GLOW BACKGROUND */}
      <div
        className="absolute top-[-10%] right-[-10%] w-[70%] h-[120%] opacity-20 blur-[120px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, #048b7d 0%, #8fffd2 60%, transparent 100%)`,
        }}
      />

      {/* 2. CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        {/* Main Title */}
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {title}
        </h1>

        {/* Breadcrumb Links */}
        <nav className="flex items-center justify-center gap-2 text-sm font-medium">
          <Link
            href="/"
            className="text-white/80 hover:text-white transition-colors"
          >
            Home
          </Link>

          <span className="text-white/50">/</span>

          {/* currentPage only */}
          <span className="text-white font-bold">{currentPage}</span>
        </nav>
      </motion.div>
    </section>
  );
};

export default Banner;
