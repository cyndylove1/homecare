"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../title";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What home care services do you offer?",
      answer:
        "We provide compassionate home care services including personal care, companionship, medication reminders, meal preparation, mobility assistance, dementia care, respite care, and daily living support for seniors and individuals who need assistance at home.",
    },
    {
      question: "Who can benefit from your home care services?",
      answer:
        "Our services are ideal for seniors, individuals recovering from illness or surgery, people living with disabilities, and families who need reliable in-home support for their loved ones.",
    },
    {
      question: "Are your caregivers trained and experienced?",
      answer:
        "Yes, all of our caregivers are carefully screened, trained, and experienced in providing professional and compassionate in-home care. We are committed to delivering safe, respectful, and high-quality support.",
    },
    {
      question: "Do you provide 24-hour home care?",
      answer:
        "Yes, we offer flexible care schedules including hourly visits, overnight care, and 24/7 live-in support depending on each client’s needs and lifestyle.",
    },
    {
      question: "How do I start care services for my loved one?",
      answer:
        "Getting started is simple. Contact our team to schedule a free consultation. We’ll discuss your needs, assess the level of care required, and create a personalized home care plan.",
    },
    {
      question: "Can care plans be personalized?",
      answer:
        "Absolutely. Every client receives a customized care plan designed around their health needs, daily routine, preferences, and personal goals.",
    },
    {
      question: "Do you provide short-term and long-term care?",
      answer:
        "Yes, we offer both short-term care for temporary recovery and long-term care for ongoing assistance and companionship at home.",
    },
  ];

  return (
    <>
      <section className="pt-40 pb-24 md:px-6 px-4 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Title
              align="justify-center"
              text=" Frequently Asked Questions"
              textColor="text-[#048b7d]"
              color="bg-[#048b7d]"
            />
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-3xl transition-all duration-300 ${
                  openIndex === index
                    ? "bg-[#05d079]/10 border-gray-300"
                    : "bg-white/5 border-gray-300"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <div>
                    {/* 
                        Logic: If openIndex matches, use the dark green color. 
                        Otherwise, default to white.
                    */}
                    <h3
                      className={`text-md md:text-xl font-bold transition-colors duration-300 ${
                        openIndex === index ? "text-[#042a1d]" : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index
                        ? "bg-[#042a1d] text-white"
                        : "bg-[#05d079]/20 text-[#048b7d]"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8">
                        <p className="text-sm md:text-base text-[#042a1d]/80 leading-relaxed max-w-2xl border-t border-[#042a1d]/10 pt-6 font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
