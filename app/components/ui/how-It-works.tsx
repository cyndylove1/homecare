"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  PhoneCall,
  UserCheck,
  HeartHandshake,
} from "lucide-react";
import Title from "../title";

const steps = [
  {
    icon: PhoneCall,
    title: "Initial Consultation",
    desc: "We begin with a friendly call to understand your loved one’s care needs, lifestyle, and preferences.",
  },
  {
    icon: ClipboardCheck,
    title: "Personal Care Plan",
    desc: "Our care coordinators design a personalized home care plan tailored to medical and daily living needs.",
  },
  {
    icon: UserCheck,
    title: "Caregiver Matching",
    desc: "We carefully match you with trained, background-checked caregivers who fit your requirements.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    desc: "We provide continuous monitoring and support to ensure comfort, safety, and peace of mind.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative w-full bg-white py-24 px-4 md:px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <Title
          text="How It Works"
          textColor="text-[#048b7d]"
          color="bg-[#048b7d]"
          align="justify-center"
        />
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-2xl md:text-5xl max-w-xl text-gray-900 tracking-tight leading-[1.1]">
            How Our Home Care Process Works
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-lg leading-relaxed">
            Getting quality home care for your loved ones is simple, safe, and
            stress-free with our step-by-step approach.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-6 bg-[#048b7d] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Step {idx + 1}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#048b7d]/10 text-[#048b7d] mb-5">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1E293B] mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
