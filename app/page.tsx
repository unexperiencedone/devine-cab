"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  MapPin,
  Navigation,
  Phone,
  Star,
  Clock,
  ChevronRight,
  Twitter, // New
  Instagram, // New
  Linkedin, // New
  Facebook, // New
  Mail,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
const script = Dancing_Script({ subsets: ["latin"], weight: ["400"] });

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function PremiumLandingPage() {
  const [tripType, setTripType] = useState<"outstation" | "local">(
    "outstation",
  );
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen bg-[#FDFDFD] ${inter.className} text-slate-900 selection:bg-amber-100 selection:text-amber-900`}
    >
      {/* --- REFINED NAV --- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`${playfair.className} text-2xl font-black tracking-tighter`}
          >
            BANSAL<span className="text-amber-600">.</span>TRAVELS
          </motion.div>
          <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
            <button
              onClick={() => setTripType("outstation")}
              className={`hover:text-amber-600 transition-colors ${tripType === "outstation" && "text-slate-950 underline underline-offset-8"}`}
            >
              Outstation
            </button>
            <button
              onClick={() => setTripType("local")}
              className={`hover:text-amber-600 transition-colors ${tripType === "local" && "text-slate-950 underline underline-offset-8"}`}
            >
              Local Rental
            </button>
            <a href="#" className="hover:text-amber-600 transition-colors">
              Fleet
            </a>
          </div>
          <button className="bg-slate-950 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-amber-600 transition-all shadow-xl shadow-slate-200 active:scale-95 max-[485]:px-2 max-[485]:py-2 max-[485]:text-[8px] max-[485]:ml-5">
            Call Assistant
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      {/* --- UPDATED HERO SECTION --- */}
      <section className="relative pt-40 pb-32 overflow-hidden min-h-[90vh] flex items-center isolate">
        {/* Background Image with Parallax & Overlay */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
          <Image
            src="/retro-cab-image.avif" // Option 2
            alt="Premium Travel Experience"
            fill
            className="object-cover object-center grayscale-[50%] opacity-20"
            priority
          />
        </motion.div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-20"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block mb-6 text-amber-600 font-bold text-xs uppercase tracking-[0.3em]"
            >
              Premium Chauffeur Service
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className={`${playfair.className} text-7xl md:text-8xl font-black leading-[0.95] text-slate-950 mb-8`}
            >
              Luxury in <br />
              <span
                className={`${script.className} text-amber-600 capitalize text-6xl md:text-7xl font-normal`}
              >
                Every Mile
              </span>
            </motion.h1>
            {/* ... rest of your text ... */}
          </motion.div>

          {/* Booking Panel stays the same as your previous code */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* --- INTERACTIVE BOOKING PANEL --- */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-white rounded-[2rem] p-2 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-50">
                <div className="flex p-1 bg-slate-50 rounded-[1.8rem]">
                  <button
                    onClick={() => setTripType("outstation")}
                    className={`flex-1 py-4 rounded-[1.5rem] text-xs font-bold uppercase tracking-widest transition-all duration-300 ${tripType === "outstation" ? "bg-white text-slate-950 shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
                  >
                    Outstation
                  </button>
                  <button
                    onClick={() => setTripType("local")}
                    className={`flex-1 py-4 rounded-[1.5rem] text-xs font-bold uppercase tracking-widest transition-all duration-300 ${tripType === "local" ? "bg-white text-slate-950 shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
                  >
                    Local Rental
                  </button>
                </div>

                <div className="p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={tripType}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <div className="group relative">
                          <Navigation
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-amber-500 transition-colors"
                            size={18}
                          />
                          <input
                            className="w-full pl-12 pr-4 py-5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-amber-500/20 outline-none text-sm font-semibold"
                            placeholder="Enter Pickup City"
                            defaultValue="Zirakpur"
                          />
                        </div>

                        {tripType === "outstation" ? (
                          <div className="group relative">
                            <MapPin
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-amber-500 transition-colors"
                              size={18}
                            />
                            <input
                              className="w-full pl-12 pr-4 py-5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-amber-500/20 outline-none text-sm font-semibold"
                              placeholder="Enter Destination"
                              defaultValue="Manali"
                            />
                          </div>
                        ) : (
                          <div className="group relative">
                            <Clock
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-amber-500 transition-colors"
                              size={18}
                            />
                            <select className="w-full pl-12 pr-4 py-5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-amber-500/20 outline-none text-sm font-semibold appearance-none">
                              <option>4 Hours / 40 KM</option>
                              <option>8 Hours / 80 KM</option>
                              <option>12 Hours / 120 KM</option>
                            </select>
                          </div>
                        )}

                        <div className="group relative">
                          <Calendar
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-amber-500 transition-colors"
                            size={18}
                          />
                          <input
                            type="date"
                            className="w-full pl-12 pr-4 py-5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-amber-500/20 outline-none text-sm font-semibold"
                          />
                        </div>
                      </div>

                      <button className="w-full group bg-slate-950 text-white py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] shadow-2xl shadow-slate-200 hover:bg-amber-600 transition-all flex items-center justify-center gap-2">
                        Check Premium Fleet{" "}
                        <ChevronRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* --- ROUTE TO MANALI: THE SCENIC MIND MAP --- */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-24"
          >
            <motion.span
              variants={fadeInUp}
              className="text-amber-600 font-bold text-xs uppercase tracking-[0.3em] mb-4 block"
            >
              The Grand Journey
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className={`${playfair.className} text-5xl md:text-6xl font-black text-slate-950`}
            >
              Route to{" "}
              <span
                className={`${script.className} text-amber-600 capitalize font-normal text-6xl`}
              >
                Paradise
              </span>
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Central Connecting Path (The Mind Map "Stem") */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent hidden lg:block" />

            <div className="space-y-32 relative">
              {[
                {
                  stop: "Timber Trail, Parwanoo",
                  feel: "Suspended Serenity",
                  desc: "Glide over deep gorges in a cable car. The air turns crisp as the plains vanish beneath you.",
                  align: "left",
                  img: "/timber-trail.jpg",
                },
                {
                  stop: "Sunder Nagar Lake",
                  feel: "Azure Reflections",
                  desc: "A man-made marvel where the sky meets the water. Perfect for a quiet, reflective espresso break.",
                  align: "right",
                  img: "/sunder-nagar.jpg",
                },
                {
                  stop: "Pandoh Dam",
                  feel: "Emerald Majesty",
                  desc: "The Beas river takes a dramatic turn here. The roaring water creates a mist that feels like a cold silk veil.",
                  align: "left",
                  img: "/pandoh-1.jpg",
                },
                {
                  stop: "Kullu Valley",
                  feel: "The Valley of Gods",
                  desc: "Woven shawls and ancient pine forests. The scent of cedar signals you've finally entered the high realm.",
                  align: "right",
                  img: "/kullu-1.jpg",
                },
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: point.align === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${point.align === "right" ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Image Placeholder */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group shadow-2xl shadow-slate-200">
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <div className="w-full h-full bg-slate-100 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60 mix-blend-overlay pointer-events-none z-10" />
                        <div className="absolute inset-0 bg-slate-900/10  pointer-events-none z-10" />
                        {/* Placeholder Icon if Image fails */}
                        <MapPin
                          className="text-slate-200 absolute"
                          size={80}
                          strokeWidth={1}
                        />
                        {/* Image tag - replace src with your actual route images */}
                        <Image
                          src={point.img}
                          alt={point.stop}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={`w-full lg:w-1/2 space-y-4 ${point.align === "left" ? "lg:pl-12" : "lg:pr-12 text-right lg:text-right"}`}
                  >
                    <div
                      className={`flex items-center gap-4 mb-2 ${point.align === "right" ? "justify-end" : ""}`}
                    >
                      <span className="w-8 h-px bg-amber-500" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600">
                        {point.feel}
                      </span>
                    </div>
                    <h3
                      className={`${playfair.className} text-3xl font-bold text-slate-950`}
                    >
                      {point.stop}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-md inline-block">
                      {point.desc}
                    </p>
                    <div
                      className={`pt-4 flex ${point.align === "right" ? "justify-end" : ""}`}
                    >
                      <motion.button
                        whileHover={{ gap: "1.5rem" }}
                        className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-amber-600 transition-all"
                      >
                        Explore Vibe <ChevronRight size={14} />
                      </motion.button>
                    </div>
                  </div>

                  {/* Mind Map Node Dot */}
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-amber-500 z-20 shadow-[0_0_15px_rgba(217,119,6,0.3)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- THE CHAUFFEUR STANDARD --- */}
      <section className="py-32 bg-[#FDFDFD]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="/human-hero.jpg" // Use a high-quality image of a professional driver
                alt="Bansal Travels Professional Chauffeur"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </motion.div>

            <div className="space-y-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.span
                  variants={fadeInUp}
                  className="text-amber-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4"
                >
                  The Human Element
                </motion.span>
                <motion.h2
                  variants={fadeInUp}
                  className={`${playfair.className} text-5xl font-black text-slate-950 mb-6`}
                >
                  Guided by{" "}
                  <span
                    className={`${script.className} text-amber-600 capitalize font-normal text-6xl`}
                  >
                    Professionals
                  </span>
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="text-slate-500 text-lg leading-relaxed mb-8"
                >
                  An Elite journey requires more than a luxury car. It requires
                  a guardian of the road.
                </motion.p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  {
                    icon: <ShieldCheck className="text-amber-600" />,
                    title: "Elite Vetting",
                    desc: "Rigorous 5-step background and skill verification.",
                  },
                  {
                    icon: <Clock className="text-amber-600" />,
                    title: "Zero Delay",
                    desc: "Punctuality is our silent promise to you.",
                  },
                  {
                    icon: <Star className="text-amber-600" />,
                    title: "Concierge Skill",
                    desc: "Beyond driving; our chauffeurs assist with your vibe.",
                  },
                  {
                    icon: <MapPin className="text-amber-600" />,
                    title: "Local Insight",
                    desc: "Discover the path less traveled with expert guides.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-slate-950">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- FLEET SECTION --- */}
      <section className="py-32 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className={`${playfair.className} text-5xl font-bold mb-6`}
            >
              Our Curated Fleet
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-500">
              From executive sedans to luxury transporters, every vehicle is
              sanitized and maintained to the highest standards.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Executive Sedan",
                price: "11/km",
                desc: "Dzire, Etios or similar",
                img: "/sedan.jpg",
              },
              {
                name: "Premium SUV",
                price: "15/km",
                desc: "Ertiga, Marazzo or similar",
                img: "/suv.jpg",
              },
              {
                name: "Luxury MPV",
                price: "22/km",
                desc: "Innova Crysta",
                img: "/hatchback.jpg",
              },
            ].map((car, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group"
              >
                <div className="h-40 flex items-center justify-center mb-8">
                  <Image
                    src={car.img}
                    alt={car.name}
                    width={220}
                    height={120}
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{car.desc}</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <span className="text-slate-950 font-black text-lg">
                    ₹{car.price}
                  </span>
                  <button className="text-amber-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                    Book <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <span className="text-amber-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4">
                Assistance
              </span>
              <h2
                className={`${playfair.className} text-4xl font-black text-slate-950 mb-6`}
              >
                Frequently Asked <br /> Questions
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Everything you need to know about your journey from Zirakpur to
                Manali. For specific requirements, our 24/7 concierge is just a
                call away.
              </p>
            </div>

            <div className="md:w-2/3 space-y-4">
              {[
                {
                  q: "What is the distance and travel time?",
                  a: "The distance from Zirakpur to Manali is 283 km, taking approximately 6.5 to 8.5 hours depending on traffic and seasonal conditions.",
                },
                {
                  q: "What are the taxi fares for Sedan and SUV?",
                  a: "Zirakpur to Manali taxi fare starts at approx. ₹3,113 for a premium sedan (Etios, Dzire) and approx. ₹4,245 for an SUV. Innova Crysta starts at approx. ₹5,245.",
                },
                {
                  q: "Are driver and night charges included?",
                  a: "Yes, our transparent pricing includes all Driver and Night charges for the Zirakpur to Manali route.",
                },
                {
                  q: "Is local sightseeing included?",
                  a: "Sightseeing is included for Round Trips and One-Way Multi-stop bookings. For standard One-Way point-to-point transfers, sightseeing is not included.",
                },
                {
                  q: "Can I travel with my pets?",
                  a: "Absolutely. We are pet-friendly. Please select the 'Pet Allowed' add-on during booking (additional charges apply).",
                },
                {
                  q: "Do I need to pay the full amount in advance?",
                  a: "No, you only need to pay a 10-20% confirmation deposit to secure your premium vehicle.",
                },
                {
                  q: "How are toll taxes handled for one-way trips?",
                  a: "For one-way journeys, you are only required to pay the one-side toll tax, ensuring you don't pay for the return leg.",
                },
                {
                  q: "How long does it take from Zirakpur to Manali by road?",
                  a: "It takes approx. 6.5 to 8.5 hours depending on traffic."
                },
                {
                  q: "Can I book cab for Zirakpur to Manali by calling customer support?",
                  a: "We are happy to provide you any clarifications required through customer support team but Zirakpur to Manali cab booking has to be done either through our website or through our android and iOS mobile app 'CabBazar - Outstation taxi'."
                },
                {
                  q: "Do I need to pay both side Toll tax for Zirakpur to Manali one way cab?",
                  a: "For Zirakpur to Manali One way cab, you need to pay one side Toll tax only."
                },
                {
                  q: "Can we pickup additional passengers on the way in Zirakpur to Manali one way taxi?",
                  a: "You may book Zirakpur to Manali One way multi-stop cab by adding additional stops in itinerary.For Zirakpur to Manali One way taxi with only Zirakpur and Manali in itinerary, Additional pickup or drop will incur additional charges."
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group border-b border-slate-100 pb-4"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none py-4">
                    <span className="font-bold text-slate-950 text-sm">
                      {faq.q}
                    </span>
                    <span className="text-amber-600 transition-transform group-open:rotate-180">
                      <ChevronRight size={18} />
                    </span>
                  </summary>
                  <p className="text-slate-500 text-sm leading-relaxed pb-4 px-2">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE DIRECTORY CARDS --- */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`${playfair.className} text-4xl font-bold mb-4`}>
              Explore Our Network
            </h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="font-black text-xs uppercase tracking-widest text-amber-600 mb-6 flex items-center gap-2">
                <Navigation size={14} /> From Zirakpur
              </h3>
              <div className="grid grid-cols-1 gap-3 text-[11px] font-bold text-slate-600">
                {[
                  "Bhiwadi",
                  "Anandpur-sahib",
                  "Jagraon",
                  "Kot-kapura",
                  "Lohaghat",
                  "Chopta",
                  "Kotdwar",
                  "Panna",
                  "Joshimath",
                ].map((city) => (
                  <a
                    key={city}
                    href="#"
                    className="hover:text-amber-600 border-b border-slate-50 pb-1"
                  >
                    Zirakpur to {city}
                  </a>
                ))}
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="font-black text-xs uppercase tracking-widest text-amber-600 mb-6 flex items-center gap-2">
                <MapPin size={14} /> To Manali
              </h3>
              <div className="grid grid-cols-1 gap-3 text-[11px] font-bold text-slate-600">
                {[
                  "Aligarh",
                  "Karnal",
                  "Kanpur",
                  "Gwalior",
                  "Pushkar",
                  "Etawah",
                  "Pauri",
                  "Fazilka",
                  "Naura",
                ].map((city) => (
                  <a
                    key={city}
                    href="#"
                    className="hover:text-amber-600 border-b border-slate-50 pb-1"
                  >
                    {city} to Manali
                  </a>
                ))}
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="font-black text-xs uppercase tracking-widest text-amber-600 mb-6 flex items-center gap-2">
                <Clock size={14} /> Hourly Rentals
              </h3>
              <div className="grid grid-cols-1 gap-3 text-[11px] font-bold text-slate-600">
                {[
                  "Zirakpur",
                  "Nagpur",
                  "Ooty",
                  "Kolkata",
                  "Noida",
                  "Jaipur",
                  "Rishikesh",
                  "Shirdi",
                  "Vellore",
                ].map((city) => (
                  <a
                    key={city}
                    href="#"
                    className="hover:text-amber-600 border-b border-slate-50 pb-1"
                  >
                    Hourly Rental in {city}
                  </a>
                ))}
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="font-black text-xs uppercase tracking-widest text-amber-600 mb-6 flex items-center gap-2">
                <ShieldCheck size={14} /> Other Cities
              </h3>
              <div className="grid grid-cols-1 gap-3 text-[11px] font-bold text-slate-600">
                {[
                  "Tumkur",
                  "Kedarnath",
                  "Indore",
                  "Panjim",
                  "Sangla",
                  "Aurangabad",
                  "Baga",
                  "Ballabgarh",
                ].map((city) => (
                  <a
                    key={city}
                    href="#"
                    className="hover:text-amber-600 border-b border-slate-50 pb-1"
                  >
                    Taxi Service in {city}
                  </a>
                ))}
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="font-black text-xs uppercase tracking-widest text-amber-600 mb-6 flex items-center gap-2">
                <Car size={14} /> Airport Cabs
              </h3>
              <div className="grid grid-cols-1 gap-3 text-[11px] font-bold text-slate-600">
                {[
                  "Chandigarh",
                  "Amritsar",
                  "Indore",
                  "Goa",
                  "Bangalore",
                  "Hyderabad",
                  "Jaipur",
                  "Kochi",
                ].map((city) => (
                  <a
                    key={city}
                    href="#"
                    className="hover:text-amber-600 border-b border-slate-50 pb-1"
                  >
                    {city} Airport Cabs
                  </a>
                ))}
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="font-black text-xs uppercase tracking-widest text-amber-600 mb-6 flex items-center gap-2">
                <Navigation size={14} /> From Chandigarh Airport
              </h3>
              <div className="grid grid-cols-1 gap-3 text-[11px] font-bold text-slate-600">
                {[
                  "Uttarkashi",
                  "Ratlam",
                  "Vijaypur",
                  "Sumerpur",
                  "Samdhan",
                ].map((city) => (
                  <a
                    key={city}
                    href="#"
                    className="hover:text-amber-600 border-b border-slate-50 pb-1"
                  >
                    Chd Airport to {city}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      {/* --- PREMIUM FOOTER --- */}
      {/* --- LIGHT PREMIUM FOOTER --- */}
      <footer className="bg-white border-t border-slate-100 pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Main Grid: 4 Columns on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* 1. Brand & Mission */}
            <div className="space-y-8">
              <div>
                <h3
                  className={`${playfair.className} text-3xl font-black tracking-tighter mb-6 text-slate-950`}
                >
                  BANSAL<span className="text-amber-600">.</span>TRAVELS
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
                  Redefining luxury road travel in Northern India. From local
                  commutes to Himalayan expeditions, we ensure elegance in every
                  mile.
                </p>
              </div>
              <div className="flex gap-4">
                {[
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Linkedin, label: "LinkedIn" },
                  { Icon: Facebook, label: "Facebook" },
                ].map(({ Icon, label }, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    aria-label={label}
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300"
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* 2. Services List */}
            <div>
              <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-8">
                Our Services
              </h4>
              <ul className="space-y-4 text-slate-600 text-sm font-semibold">
                {[
                  "One Way Outstation",
                  "Round Trip Journeys",
                  "Airport Transfers",
                  "Corporate Fleet",
                ].map((service) => (
                  <li
                    key={service}
                    className="hover:text-amber-600 transition-colors cursor-pointer flex items-center gap-2 group"
                  >
                    <ChevronRight
                      size={12}
                      className="text-slate-300 group-hover:text-amber-600 group-hover:translate-x-1 transition-all"
                    />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Reach Us & Trust */}
            <div className="space-y-8">
              <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-8">
                Reach Us
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-amber-50 transition-colors">
                    <Phone
                      size={18}
                      className="text-slate-400 group-hover:text-amber-600"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                      24/7 Concierge
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-amber-50 transition-colors">
                    <ShieldCheck
                      size={18}
                      className="text-slate-400 group-hover:text-amber-600"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                      Verified Safety
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Elite Protocol
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. One specific Top Destination Column to fill the 4th slot on desktop */}
            <div>
              <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-8">
                Top Destinations
              </h4>
              <ul className="space-y-4 text-slate-600 text-sm font-semibold">
                {[
                  "Zirakpur to Manali",
                  "Chandigarh to Delhi",
                  "Delhi to Jaipur",
                  "Shimla Executive",
                ].map((route) => (
                  <li
                    key={route}
                    className="hover:text-amber-600 transition-colors cursor-pointer"
                  >
                    {route}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* --- DYNAMIC SEO LINKS SECTION (Full Width Grid) --- */}
          <div className="pt-16 border-t border-slate-100 mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  title: "North India Routes",
                  links: [
                    "Chandigarh to Delhi",
                    "Chandigarh to Amritsar",
                    "Chandigarh to Manali",
                    "Ludhiana to Delhi",
                    "Ludhiana to Manali",
                  ],
                },
                {
                  title: "South & West",
                  links: [
                    "Bangalore to Coorg",
                    "Bangalore to Ooty",
                    "Mumbai to Shirdi",
                    "Mumbai to Mahabaleshwar",
                    "Chennai to Pondicherry",
                  ],
                },
                {
                  title: "Popular Cabs",
                  links: [
                    "Delhi to Agra",
                    "Delhi to Jaipur",
                    "Jaipur to Udaipur",
                    "Lucknow to Varanasi",
                    "Lucknow to Agra",
                  ],
                },
              ].map((col, i) => (
                <div key={i} className="space-y-6">
                  <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-slate-400 border-l-2 border-amber-600 pl-4">
                    {col.title}
                  </h4>
                  <ul className="space-y-3 text-slate-600 text-[11px] font-bold">
                    {col.links.map((link) => (
                      <li
                        key={link}
                        className="hover:text-amber-600 transition-colors cursor-pointer flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-slate-200 group-hover:bg-amber-600 rounded-full transition-colors"></span>
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <div className="flex flex-wrap justify-center gap-8">
              <a href="#" className="hover:text-amber-600 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-amber-600 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-amber-600 transition-colors">
                Sitemap
              </a>
            </div>
            <p className="text-center font-medium">
              © 2026 Bansal Travels.{" "}
              <span className="text-slate-200 mx-2">|</span> Crafted for the{" "}
              <span className="text-slate-900">Elite</span>.
            </p>
          </div>
        </div>
      </footer>
      {/* Floating Mobile Tagline - Updated to be more subtle */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-slate-100 text-slate-900 py-3 text-center text-[9px] font-black uppercase tracking-[0.4em] z-[100]">
        India moves with <span className="text-amber-600">Bansal Travels</span>{" "}
        — A Premium Journey Awaits
      </div>
    </div>
  );
}
