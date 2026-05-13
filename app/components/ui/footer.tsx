import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Button from "../button";
import Logo from "../logo";


export default function Footer() {
  return (
    <div className="relative">
      <footer className="bg-[#048b7d] text-white pt-32 pb-12 md:px-6 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-4 space-y-6">
              {/* <Logo /> */}
              <Logo
                textColor="text-white"
                color="text-white"
                className="text-white"
              />
              <p className="text-white text-sm leading-relaxed max-w-sm">
                Dedicated To Comfort, Dignity & Independence.
              </p>
              <div className="flex gap-3 pt-2">
                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/40
                  transition-all duration-300 hover:scale-110 hover:bg-[#c4f35c] hover:text-[#042a1d]"
                >
                  <FaFacebook size={16} />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/40
                  transition-all duration-300 hover:scale-110 hover:bg-[#c4f35c] hover:text-[#042a1d]"
                >
                  <FaTwitter size={16} />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/40
                  transition-all duration-300 hover:scale-110 hover:bg-[#c4f35c] hover:text-[#042a1d]"
                >
                  <FaLinkedin size={16} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-test-white text-sm">
                <li>
                  <Link href="/" className="hover:text-[#559939] transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#559939] transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-[#559939] transition"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#559939] transition"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-4 text-white text-sm">
                <li>
                  <Link href="/services">Companionship</Link>
                </li>
                <li>
                  <Link href="/services">Skilled Nursing</Link>
                </li>
                <li>
                  <Link href="/services">Dementia Care</Link>
                </li>
                <li>
                  <Link href="/services">Physical Therapy</Link>
                </li>
                <li>
                  <Link href="/services">Palliative Care</Link>
                </li>
              </ul>
            </div>

            {/* Newsletter*/}
            <div className="lg:col-span-4">
              <h4 className="text-lg font-semibold mb-6">
                Subscribe Newsletter
              </h4>
              <p className="text-white text-sm mb-6">
                Stay updated with our Health care services.
              </p>
              <div className="flex flex-col sm:flex-row items-center bg-white border border-[[#014ac7] rounded-xl p-1.5 w-full">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent text-gray-900 px-4 py-3 outline-none w-full text-sm placeholder:text-gray-400"
                />
                <Button
                  text="Subscribe"
                  className="rounded-md w-full md:w-[150px]"
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-300 uppercase tracking-widest">
            <p>
              Powered by{" "}
              <a
                href="https://edoubleone.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edoubleone.
              </a>
            </p>
            <div className="flex gap-8">
              <Link href="/privacy" className="hover:text-white transition">
                Privacy & Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
