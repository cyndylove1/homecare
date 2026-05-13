import Button from "../button";
import Link from "next/link";

const CTA: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-6 py-12 bg-white">
      <div className="relative overflow-hidden max-w-5xl mx-auto bg-[#05d079]/15 rounded-[2rem] p-8 md:p-16 text-center border border-gray-200">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/patients8.png')",
          }}
        />

        {/* Gradient overlay*/}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#048b7d]/5 to-transparent pointer-events-none" />

        <div className="relative z-10">
          {/* Heading */}
          <h2 className="text-xl md:text-4xl font-bold max-w-lg mx-auto text-[#2d3748] mb-4">
            Compassionate Home Care Is Just One Step Away
          </h2>

          {/* Description */}
          <p className="text-gray-500 max-w-xl md:text-lg text-sm mx-auto mb-6 leading-relaxed">
            Whether you need daily assistance, post-hospital care, or long-term
            support for your loved ones — our trained caregivers are ready to
            help you bring comfort and dignity home.
          </p>

          {/* button */}
          <div className="flex justify-center">
            <Link href="/contact">
              <Button text=" Speak to a Specialist" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
