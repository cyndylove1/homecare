"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Banner from "../components/ui/banner";
import Title from "../components/title";
import FormSection from "../components/formSection";
import Navbar from "../components/ui/navbar";

const Contact = () => {
  const [service, setService] = React.useState("");

  const services = [
    { value: "nursing", label: "Companionship" },
    { value: "elderly", label: "Skilled Nursing" },
    { value: "surgery", label: "Dementia Care" },
  ];

  return (
    <>
      <Navbar initialTransparent={false} />
      <section className="bg-gray-50">
        <Banner title="Contact Us" currentPage="Contact Us" />;
        <div className=" py-24 px-4 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* LEFT COLUMN: INFO */}
              <div className="space-y-8">
                <div>
                  {/* text */}
                  <Title
                    text="Contact Us"
                    textColor="text-[#048b7d]"
                    color="bg-[#048b7d]"
                  />

                  <p className="text-gray-500 mt-6 text-base md:text-lg leading-relaxed">
                    Have questions about our home care services? Reach out today
                    for a personalized consultation.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Phone size={20} />,
                      label: "Call Us",
                      val: "+44 20 7946 3281",
                    },
                    {
                      icon: <Mail size={20} />,
                      label: "Email Us",
                      val: "care@evergreenhomecare.com",
                    },
                    {
                      icon: <MapPin size={20} />,
                      label: "Visit Us",
                      val: "1180 Peachtree Street NESuite 2200 Atlanta, GA 30309 United States",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-5 group">
                      <div className="w-12 h-12 rounded-full bg-[#048b7d] flex items-center justify-center text-white group-hover:scale-110 transition-transform shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                          {item.label}
                        </p>
                        <p className="text-[#042a1d] font-bold text-sm md:text-lg">
                          {item.val}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN: FORM CARD */}
              <FormSection />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
