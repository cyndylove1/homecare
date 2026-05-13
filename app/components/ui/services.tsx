"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  Stethoscope,
  Brain,
  Bone,
  Activity,
  Check,
} from "lucide-react";
import Title from "../title";

const services = [
  {
    id: "companion",
    label: "Companionship",
    icon: <HeartPulse size={20} />,
    title: "Compassionate Care for Your Seniors",
    description:
      "Our dedicated companions provide emotional support and social engagement, ensuring your loved ones never feel alone and remain active in their daily lives.",
    bullets: [
      "Certified and experienced care providers",
      "Personalized social activity planning",
    ],
    image: "/assets/patients4.png",
  },
  {
    id: "nursing",
    label: "Skilled Nursing",
    icon: <Stethoscope size={20} />,
    title: "Professional Medical Support at Home",
    description:
      "Registered nurses provide clinical care including wound management, medication administration, and chronic disease monitoring in the comfort of home.",
    bullets: [
      "24/7 on-call medical supervision",
      "Coordination with primary physicians",
    ],
    image: "/assets/patients5.png",
  },
  {
    id: "dementia",
    label: "Dementia Care",
    icon: <Brain size={20} />,
    title: "Specialized Memory Support",
    description:
      "Our memory care specialists are trained in cognitive stimulation and behavioral management to support those living with Alzheimer’s or Dementia.",
    bullets: [
      "Safe and familiar home environment",
      "Cognitive exercise programs",
    ],
    image: "/assets/patients7.png",
  },
  {
    id: "mobility",
    label: "Physical Therapy",
    icon: <Bone size={20} />,
    title: "Restoring Mobility and Strength",
    description:
      "In-home physical therapy helps seniors recover from surgery or injury, focusing on balance training and fall prevention strategies.",
    bullets: [
      "Customized rehabilitation plans",
      "Progress tracking and mobility aids",
    ],
    image: "/assets/patients8.png",
  },
  {
    id: "palliative",
    label: "Palliative Care",
    icon: <Activity size={20} />,
    title: "Quality of Life & Comfort",
    description:
      "We focus on providing relief from the symptoms and stress of serious illness, improving quality of life for both the patient and the family.",
    bullets: ["Holistic pain management", "Family counseling and support"],
    image: "/assets/patients9.png",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(services[0]);

  return (
    <section className="bg-[#f8f9fb] py-20 px-4 md:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <Title
            text="Our Services"
            textColor="text-[#048b7d]"
            color="bg-[#048b7d]"
          />
          <h2 className="text-2xl md:text-5xl tracking-tight leading-[1.1] max-w-2xl text-slate-800 mb-6">
            A Pioneering Home Care Agency in Your Region
          </h2>
          <p className="text-slate-500 md:text-md text-sm max-w-2xl leading-relaxed">
            Renowned for innovations in geriatric care, personal assistance, and
            medical monitoring, our agency provides a full suite of home-based
            healthcare.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 ${
                activeTab.id === service.id
                  ? "bg-[#048b7d] text-white shadow-lg"
                  : "text-slate-500 border border-[#048b7d] hover:bg-white hover:shadow-sm"
              }`}
            >
              <span
                className={
                  activeTab.id === service.id ? "text-white" : "text-[#00838f]"
                }
              >
                {service.icon}
              </span>
              <span className="font-semibold text-sm whitespace-nowrap">
                {service.label}
              </span>
            </button>
          ))}
        </div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image Side */}
            <div className="relative md:h-[400px] h-[300px] w-full rounded-[2.5rem] overflow-hidden shadow-xl">
              <Image
                src={activeTab.image}
                alt={activeTab.label}
                fill
                className="object-cover h-full"
              />
            </div>

            {/* Text Side */}
            <div className="space-y-6">
              <h3 className="md:text-3xl text-xl font-bold text-slate-800">
                {activeTab.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm md:text-lg">
                {activeTab.description}
              </p>

              <ul className="space-y-4 pt-2">
                {activeTab.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-center md:text-md text-sm gap-3 text-[#006064] font-medium"
                  >
                    <div className="w-1.5 h-1.5 bg-[#006064] rounded-full" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
