"use client";

import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, Users, Clock3 } from "lucide-react";
import Title from "../title";

const CoreValues = () => {
  const values = [
    {
      icon: HeartHandshake,
      title: "Compassionate Care",
      description:
        "We treat every client with kindness, empathy, and respect while providing personalized home care support.",
    },
    {
      icon: ShieldCheck,
      title: "Integrity & Trust",
      description:
        "We are committed to honest communication, professionalism, and dependable care families can rely on.",
    },
    {
      icon: Users,
      title: "Client-Centered Support",
      description:
        "Our services are tailored to meet the unique physical, emotional, and personal needs of every individual.",
    },
    {
      icon: Clock3,
      title: "Reliable Service",
      description:
        "We provide consistent, high-quality care and staffing solutions to ensure comfort and peace of mind.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8f9fb] py-24 px-6 md:px-12 lg:px-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-80 w-80 rounded-full" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <Title
            text=" Our Core Values"
            textColor="text-[#048b7d]"
            color="bg-[#048b7d]"
            align="justify-center"
          />

          <h2 className="mt-6 text-2xl md:text-5xl max-w-xl leading-[1.1] mx-auto tracking-tight text-[#0F172A]">
            The Values That Guide Our Care
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm md:text-lg leading-relaxed text-slate-500">
            We are dedicated to delivering compassionate and dependable home
            care services guided by integrity, professionalism, and a deep
            commitment to improving lives.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[30px] border border-slate-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Background Number */}
                <h1 className="absolute right-4 top-2 text-[70px] font-black text-[#048b7d]/5">
                  0{index + 1}
                </h1>

                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#05d079]/10 transition-all duration-300 group-hover:bg-[#048b7d]">
                  <Icon
                    size={30}
                    className="text-[#048b7d] transition-all duration-300 group-hover:text-white"
                    strokeWidth={2}
                  />
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="text-xl text-2xl font-bold text-[#0F172A]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-500">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
