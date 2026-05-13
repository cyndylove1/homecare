import Image from "next/image";
import Title from "../title";

const WhyUs = () => {
  const features = [
    {
      id: "01",
      title: "Compassionate & Expert Care",
      description:
        "Our team of dedicated home health aides combines years of clinical experience with a genuine commitment to providing comfort at home.",
    },
    {
      id: "02",
      title: "Patient-Centered Approach",
      description:
        "Your dignity and well-being are our top priorities. We take the time to listen to your family’s concerns and answer every question.",
    },
    {
      id: "03",
      title: "Personalized Care Plans",
      description:
        "We understand that every senior is unique. That’s why we create individualized care schedules that adapt to your evolving health needs.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto md:px-6 px-4 lg:px-20 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content Column */}

        <div className="space-y-10">
          <Title
            text="Why Choose Us"
            textColor="text-[#048b7d]"
            color="bg-[#048b7d]"
          />
          <h2 className="text-2xl md:text-5xl text-slate-900 max-w-xl leading-[1.1] tracking-tight">
            We Are Always Open For Your Home Care Needs
          </h2>

          <div className="relative space-y-6">
            {/* The Vertical Connector Line */}
            <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-[#048b7d] -z-10" />

            {features.map((feature, index) => (
              <div key={feature.id} className="relative pl-14">
                {/* Numbered Icon */}
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full border-2 border-[#048b7d] bg-white flex items-center justify-center text-[#048b7d] font-bold text-sm">
                  {feature.id}
                </div>

                <div className="space-y-3">
                  <h3 className="md:text-xl text-lg font-bold text-slate-800">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 md:text-md text-sm leading-relaxed max-w-md">
                    {feature.description}
                  </p>
                  {/* Divider Line (Except for last item) */}
                  {index !== features.length - 1 && (
                    <div className="pt-6">
                      <div className="h-[1px] w-full bg-slate-100" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Column */}
        <div className="relative group cursor-pointer">
          <div className="relative md:h-[500px] h-[300px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/patients5.png"
              alt="Home Care Professional"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
