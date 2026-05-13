"use client";
import { motion } from "framer-motion";
import { HeartHandshake, Eye, ArrowRight, ShieldCheck } from "lucide-react";
import Title from "../title";

const Mission = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28 px-4 md:px-6 lg:px-20">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-white" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}

        <div className="mb-20 max-w-3xl">
          <Title
            text=" Mission & Vision"
            textColor="text-[#048b7d]"
            color="bg-[#048b7d]"
          />

          <h2 className="mt-6 text-2xl md:text-5xl leading-[1.1] tracking-tight max-w-xl text-[#0F172A]">
            Caring Beyond Medical Support
          </h2>

          <p className="mt-6 md:text-lg text-sm leading-relaxed text-slate-500">
            Our commitment is to provide compassionate and dependable home care
            services that improve quality of life while supporting independence,
            dignity, and comfort for every individual and family we serve.
          </p>
        </div>

        {/* Main Grid */}
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[32px] border border-slate-100 bg-[#F8FCFC] p-7 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Large Background Number */}
            <h1 className="absolute right-4 top-0 text-[90px] font-black text-[#048b7d]/5">
              01
            </h1>

            {/* Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#05d079]/10">
              <HeartHandshake
                size={30}
                className="text-[#048b7d]"
                strokeWidth={2}
              />
            </div>

            {/* Content */}
            <div className="mt-7">
              <h3 className="md:text-3xl text-xl font-bold text-[#0F172A]">
                Our Mission
              </h3>

              <p className="mt-4 md:text-base text-sm leading-relaxed text-slate-500">
                To provide compassionate, personalized, and high-quality home
                care services that empower individuals to live safely,
                independently, and comfortably in their homes.
              </p>
            </div>

            {/* Bottom */}
            <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#048b7d]" />

                <p className="text-xs font-medium text-slate-600">
                  Compassion • Dignity • Respect
                </p>
              </div>

              <ArrowRight
                size={18}
                className="text-[#048b7d] transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[32px] bg-[#048b7d] p-7 text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(4,139,125,0.25)]"
          >
            {/* Large Background Number */}
            <h1 className="absolute right-4 top-0 text-[90px] font-black text-white/5">
              02
            </h1>

            {/* Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <Eye size={30} className="text-white" strokeWidth={2} />
            </div>

            {/* Content */}
            <div className="mt-7">
              <h3 className="md:text-3xl text-xl text-white font-bold">
                Our Vision
              </h3>

              <p className="mt-4 md:text-base text-sm leading-relaxed text-white/80">
                To become a trusted leader in home healthcare by delivering
                reliable and innovative care solutions that enrich lives and
                strengthen families.
              </p>
            </div>

            {/* Bottom */}
            <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-white" />

                <p className="text-xs font-medium text-white/70">
                  Trusted • Reliable • Professional
                </p>
              </div>

              <ArrowRight
                size={18}
                className="text-white transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
