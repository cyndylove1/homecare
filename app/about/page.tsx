"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeartHandshake, ShieldPlus, TrendingUp } from "lucide-react";
import Title from "../components/title";
import Navbar from "../components/ui/navbar";
import Mission from "../components/ui/mission";
import CTA from "../components/ui/cta";
import CoreValues from "../components/ui/coreValues";
import Banner from "../components/ui/banner";

const About = () => {
  return (
    <>
      <Navbar initialTransparent={false} />
      <Banner title="About Us" currentPage="About Us" />
      <section className="min-h-screen bg-[#f8f9fb] py-20 px-4 md:px-6 lg:px-20 text-slate-900">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <Title
            text="About Us"
            textColor="text-[#048b7d]"
            color="bg-[#048b7d]"
          />
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-5xl text-gray-900 max-w-lg tracking-tight leading-[1.1]"
            >
              All Caregiving Struggles One Compassionate Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 max-w-sm text-md md:text-lg leading-relaxed pt-4"
            >
              Most families struggle with finding reliable, qualified caregivers
              and managing the complex medical needs of loved ones at home.
            </motion.p>
          </div>

          {/* Main Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Column: Problem */}
            {/* Left Column: Home Care Support */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-12 h-12 bg-[#048b7d]/10 rounded-full flex items-center justify-center text-[#048b7d]">
                <HeartHandshake
                  size={26}
                  className="text-[#048b7d]"
                  strokeWidth={2}
                />
              </div>

              <hr className="border-slate-300 w-full" />

              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl text-gray-900 max-w-lg tracking-tight leading-[1.1]">
                  Compassionate Daily Assistance
                </h3>

                <p className="text-slate-500 text-md leading-relaxed">
                  Our caregivers provide personalized support with daily
                  activities, companionship, mobility assistance, meal
                  preparation, and emotional care to help clients live
                  comfortably at home.
                </p>
              </div>
            </motion.div>

            {/* Center Column: Image & Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative bg-[#048b7d]/30 md:h-[400px] h-[300px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/patient1.png"
                  alt="Professional Home Caregiver"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Floating Stat Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-xl flex items-center justify-between"
                >
                  <div>
                    <p className="text-slate-400 text-sm font-medium">
                      Patient Recovery Rate
                    </p>
                    <p className="text-xl font-bold mt-1">98.5%</p>
                  </div>
                  <div className="w-6 h-6">
                    <TrendingUp
                      className="text-orange-500 w-full h-full"
                      strokeWidth={1.5}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column: Solution */}
            {/* Right Column: Trusted Care */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 lg:pt-32"
            >
              <div className="w-12 h-12 bg-[#048b7d]/10 rounded-full flex items-center justify-center text-green-600">
                <ShieldPlus
                  size={24}
                  className="text-[#048b7d]"
                  strokeWidth={2}
                />
              </div>

              <hr className="border-slate-300 w-full" />

              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl text-gray-900 max-w-lg tracking-tight leading-[1.1]">
                  Safe & Reliable Home Care Services
                </h3>

                <p className="text-slate-500 text-md leading-relaxed">
                  We deliver dependable home care solutions through trained
                  professionals who prioritize safety, dignity, comfort, and the
                  well-being of every individual we serve.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Mission />
      <CoreValues />
      <CTA />
    </>
  );
};

export default About;
