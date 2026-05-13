"use client";

import { Users, ShieldCheck, Clock3, HeartHandshake } from "lucide-react";
import { Star, Heart } from "lucide-react";
import Title from "../title";

const staffingServices = [
  {
    icon: Users,
    title: "Certified Caregivers",
    description:
      "Experienced caregivers providing compassionate assistance with daily living and personal care needs.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed Nurses",
    description:
      "Qualified nurses delivering professional medical support, medication management, and wellness monitoring.",
  },
  {
    icon: Clock3,
    title: "24/7 Staffing Support",
    description:
      "Reliable around-the-clock staffing solutions tailored to meet the needs of families and healthcare facilities.",
  },
  {
    icon: HeartHandshake,
    title: "Companion Care",
    description:
      "Friendly companions offering emotional support, social engagement, and assistance with everyday activities.",
  },
];

const staffMembers = [
  {
    name: "Sarah Jenkins, RN",
    role: "Clinical Director",
    specialty: "Geriatric Care",
    bio: "Over 15 years of experience in managing complex home health needs and palliative care.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=1000",
  },
  {
    name: "Michael Chen",
    role: "Senior Care Coordinator",
    specialty: "Family Advocacy",
    bio: "Dedicated to creating seamless transitions from hospital to home for senior patients.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000",
  },
  {
    name: "Elena Rodriguez",
    role: "Lead Caregiver",
    specialty: "Dementia Support",
    bio: "Certified memory care specialist focused on maintaining dignity and joy for those with Alzheimer's.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000",
  },
];

const Staffing = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <Title
              text="Our Professionals"
              textColor="text-[#048b7d]"
              color="bg-[#048b7d]"
            />
            <h2 className="text-2xl md:text-5xl max-w-lg text-slate-900 tracking-tight leading-[1.1]">
              Staffed by People Who Truly Care
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-lg leading-relaxed max-w-xl">
            We don&apos;t just hire skills; we hire hearts. Every member of our
            team undergoes rigorous background checks and specialized training
            to ensure your family receives the gold standard of home care.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <ShieldCheck className="text-[#048b7d]" />,
              title: "Fully Vetted",
              desc: "100% background checked & insured.",
            },
            {
              icon: <Star className="text-[#048b7d]" />,
              title: "Expertly Trained",
              desc: "Continuous medical & empathy training.",
            },
            {
              icon: <Heart className="text-[#048b7d]" />,
              title: "Compassion First",
              desc: "Selected for their emotional intelligence.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100"
            >
              <div className="p-3 bg-white rounded-xl shadow-sm">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-800">{feature.title}</h4>
                <p className="text-sm text-slate-500">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Staff Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {staffingServices.map((service, idx) => {
            const Icon = service.icon;

            return (
              <div
                key={idx}
                className="rounded-[28px] bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#05d079]/10">
                  <Icon className="text-[#048b7d]" size={28} strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold text-[#0F172A]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Staffing;
