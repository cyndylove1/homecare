"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
// @ts-ignore
import "swiper/css";
import Title from "../title";

export default function Testimonial() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const testimonials = [
    {
      text: "Home care Services provided exceptional in-home care for my mother. Their caregivers were compassionate, professional, and treated her like family while ensuring her daily needs were met with dignity and respect.",
      name: "Sarah Johnson",
      title: "Family Member",
      avatar: "https://i.pravatar.cc/150?u=sarah",
    },

    {
      text: "The caregivers from home care Services brought peace of mind to our family. From medication reminders to companionship, their support helped my father remain comfortable and independent at home.",
      name: "Michael Brown",
      title: "Private Home Care Client",
      avatar: "https://i.pravatar.cc/150?u=michael",
    },

    {
      text: "We are grateful for the reliable and compassionate care provided by home care Services. Their staff consistently demonstrated patience, kindness, and professionalism while caring for our elderly aunt.",
      name: "Emily Davis",
      title: "Client Family Representative",
      avatar: "https://i.pravatar.cc/150?u=emily",
    },

    {
      text: "Finding trustworthy caregivers was challenging until we discovered home care Services. Their team provided personalized home care that improved my grandfather’s comfort, safety, and quality of life.",
      name: "Daniel Wilson",
      title: "Home Care Client",
      avatar: "https://i.pravatar.cc/150?u=daniel",
    },
  ];

  return (
    <section className="bg-white text-white py-24 px-4 md:px-12 relative overflow-hidden">
      <div className="absolute left-[-5%] top-1/4 h-1/2 w-1/4 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M-100 0C-100 100 -50 200 100 300C250 400 300 500 300 600"
            stroke="white"
            strokeWidth="80"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          {/* text */}
          <div>
            <Title
              text="Testimonial"
              textColor="text-[#048b7d]"
              color="bg-[#048b7d]"
            />
            <h2 className="text-2xl md:text-5xl text-slate-900 max-w-xl leading-[1.1] tracking-tight">
              Stories From Our Client.
            </h2>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="flex gap-4 mt-8 md:mt-0">
            <button
              ref={prevRef}
              className="w-12 h-12 rounded-full bg-[#048b7d] flex items-center justify-center text-white transition-all active:scale-95 disabled:opacity-50"
            >
              <ChevronLeft size={24} strokeWidth={3} />
            </button>
            <button
              ref={nextRef}
              className="w-12 h-12 rounded-full bg-[#048b7d] flex items-center justify-center text-white transition-all active:scale-95 disabled:opacity-50"
            >
              <ChevronRight size={24} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          loop={true}
          onInit={(swiper) => {
            // Link custom buttons to Swiper
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-2xl p-8 md:p-10 text-gray-900 flex flex-col justify-between h-[420px] border-[1px] border-gray-200">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < 5
                            ? "fill-[#FFD700] text-[#FFD700]"
                            : "text-gray-200 fill-gray-200"
                        }
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base italic">
                    "{item.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-xs mt-1">{item.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
