"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Car,
  Bus,
  MapPin,
  Navigation,
  Phone,
  Smartphone,
  Star,
  Calendar as CalendarIcon,
  ChevronDown,
  X,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { Dancing_Script, Playfair_Display, Fredoka } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // Normal, Bold, and Black
  variable: "--font-playfair", // Optional: for use with Tailwind
});

const lavishly = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
});

const juicy = Fredoka({ subsets: ["latin"], weight: ["700"] });

// Types
type TripType = "outstation" | "local" | "airport";
type OutstationType = "one-way" | "round-trip";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<"cab" | "bus">("cab");
  const [tripType, setTripType] = useState<TripType>("outstation");
  const [outstationType, setOutstationType] =
    useState<OutstationType>("one-way");
  const [activeRouteTab, setActiveRouteTab] = useState(1);

  // Carousel State
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselItems = [
    {
      title: "Get ₹200 cashback on mobile app download",
      sub: "Available on Play Store & App Store",
    },
    {
      title: "No return fare",
      sub: "One-Way fare | No hidden charges | Minimal advance",
    },
    {
      title: "No over-pricing",
      sub: "Cheapest costs | Competitive prices | Pay as you go",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-500">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-black/90 z-50 flex items-center px-4 md:px-20">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <div className="p-1 rounded">
              <span
                className={`font-bold text-white text-4xl max-[768]:text-3xl tracking-loose ${juicy.className} text-center`}
              >
                Devine Cab
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        className="relative mt-20 min-h-[600px] flex flex-col items-center pt-10 pb-20 px-4 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/retro-cab-image.avif')`,
        }}
      >
        <div className="container mx-auto flex gap-10 ">
          <div className="pt-10 w-full">
            <h1
              className={`text-8xl  mb-6 text-white ${lavishly.className} flex flex-col gap-10 text-center`}
            >
              From the pavement to the{" "}
              <span className="-rotate-1">heavens—ride into</span> the heart of
              the
              <span className="-rotate-1">Himalayan paradise</span>
            </h1>
            <div className="flex gap-6"></div>
          </div>
        </div>

        {/* BOTTOM FEATURE CAROUSEL */}
        <div className="container mx-auto mt-20">
          <div className="bg-white border border-gray-200 shadow-xl rounded-full py-6 px-10 max-w-4xl mx-auto overflow-hidden relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
            >
              {carouselItems.map((item, idx) => (
                <div
                  key={idx}
                  className="min-w-full text-center flex flex-col items-center"
                >
                  <span className="font-bold text-gray-800 text-center inline-block max-[768]:w-[250px]">{item.title}</span>
                  <span className="text-sm text-gray-500 max-[768]:w-[250px]">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 border-y border-gray-200 flex flex-col gap-20 w-full p-10 max-[1024]:justify-center max-[1024]:items-center">
        {/* BOOKING PANEL */}

        <div className="flex gap-20 max-[1024]:flex-col justify-center items-center">
          <div className="w-[50%] max-[1024]:w-full justify-center items-center">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 w-[100%]">
              <div className="bg-slate-600 py-2 text-center font-medium text-lg">
                All India Cab Service
              </div>

              <div className="p-6">
                {/* Main Tabs */}
                <div className="flex gap-2 mb-6">
                  <button
                    onClick={() => setTripType("outstation")}
                    className={`flex-1 py-3 px-4 rounded-xl font-bold transition-all ${tripType === "outstation" ? "bg-slate-600" : "bg-gray-100 hover:bg-gray-200"}`}
                  >
                    Outstation
                  </button>
                </div>

                {tripType === "outstation" && (
                  <div className="space-y-4">
                    <div className="flex gap-2 mb-4">
                      <label className="flex-1 flex items-center gap-2 p-3 bg-gray-50 rounded-xl cursor-pointer">
                        <input
                          type="radio"
                          checked={outstationType === "round-trip"}
                          onChange={() => setOutstationType("round-trip")}
                          className="accent-black"
                        />
                        <span className="text-sm">Round Trip</span>
                      </label>
                      <label className="flex-1 flex items-center gap-2 p-3 bg-gray-50 rounded-xl cursor-pointer">
                        <input
                          type="radio"
                          checked={outstationType === "one-way"}
                          onChange={() => setOutstationType("one-way")}
                          className="accent-black"
                        />
                        <span className="text-sm">One Way</span>
                      </label>
                    </div>

                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <Navigation size={18} />
                      </div>
                      <input
                        type="text"
                        placeholder="Enter pickup city"
                        defaultValue="Zirakpur, Punjab"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#fdb813] outline-none"
                      />
                    </div>

                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <MapPin size={18} />
                      </div>
                      <input
                        type="text"
                        placeholder="Enter destination city"
                        defaultValue="Manali, Himachal Pradesh"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#fdb813] outline-none"
                      />
                    </div>

                    <div className="flex gap-2 items-center">
                      <div className="flex-1 relative flex items-center bg-gray-50 rounded-xl overflow-hidden">
                        <span className="pl-4 text-gray-500 text-sm font-bold">
                          +91
                        </span>
                        <input
                          type="text"
                          placeholder="Mobile number"
                          className="w-full p-4 bg-transparent border-none focus:ring-0 outline-none"
                        />
                        <div className="pr-4 text-gray-400">
                          <Smartphone size={18} />
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-slate-600 hover:bg-black hover:text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg active:scale-95">
                      Check Price & Book Cab
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="pt-10 w-[50%] max-[1024]:w-full flex flex-col">
            <h1 className="text-5xl font-light text-center flex flex-col gap-10">
              Zirakpur to Manali cab at <span className="font-bold">₹3113</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 text-center">
              Upto 20% off on your first booking
            </p>
            <div className="flex gap-6 max-[1024]:justify-center">
              <div className="flex items-center gap-2 bg-white/80 p-3 rounded-lg border border-gray-200">
                <Star className="text-[#fdb813]" fill="#fdb813" size={20} />
                <span className="font-bold text-lg">4.2/5</span>
                <span className="text-sm text-gray-500">12,276 Reviews</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
              <Car className="text-[#fdb813]" size={32} />
            </div>
            <h3 className="text-gray-500 italic">Taxi service</h3>
            <p className="font-bold text-xl">Since 2025</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
              <Star className="text-[#fdb813]" fill="#fdb813" size={32} />
            </div>
            <h3 className="text-gray-500 italic">Customer reviews</h3>
            <p className="font-bold text-xl">Rated 4.2/5</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
              <span className="text-[#fdb813] text-2xl font-bold">₹</span>
            </div>
            <h3 className="text-gray-500 italic">Price starts from</h3>
            <p className="font-bold text-xl">₹11/km</p>
          </div>
        </div>
      </section>

      {/* PRICING TABLE SECTION */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center md:text-left">
          Zirakpur to Manali Cab Price Starts From
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              model: "AC Hatchback",
              seats: 4,
              price: "3500",
              img: "/hatchback.jpg",
            },
            {
              model: "AC Sedan",
              seats: 4,
              price: "3600",
              img: "/sedan.jpg",
            },
            {
              model: "AC SUV",
              seats: 6,
              price: "4250",
              img: "/suv.jpg",
            },
            {
              model: "AC Tempo Traveller",
              seats: 12,
              price: "11,000",
              img: "/traveller.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <Image
                src={item.img}
                alt={item.model}
                width={100}
                height={100}
                className="mx-auto h-24 object-contain mb-4"
              />
              <h3 className="font-bold text-lg mb-2">{item.model}</h3>
              <span className="inline-block bg-slate-900 px-3 py-1 rounded text-sm mb-3 text-white">
                {item.seats} seats
              </span>
              <p className="text-2xl font-bold">₹{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <h2 className="text-4xl font-light">Book Zirakpur to Manali Cab</h2>
            <div className="flex gap-4 text-sm font-bold uppercase tracking-wider text-gray-400">
              <span>Distance: 283 KM</span>
              <span>Time: 7.5 Hours</span>
            </div>
            <p>
              Manali is very popular destination for tourists as it provides
              attractions for all types of users, be it a family trip away from
              delhi heat, an adventure sports fan, a nature lover, couples on
              honeymoon, people having spiritual interests.
            </p>
            <p>
              Old Manali is my favorite spot. It has many homestays and hostels.
              People can stay for a long time. Cheap dorm beds are available.
              Devine Cab offers reliable outstation cabs. You can enjoy one-way
              drops easily. This makes your trip comfortable.
            </p>
          </div>
          <div>
            <Image
              src="/manali.jpg"
              className="w-full h-100 object-cover rounded-3xl shadow-xl border-15 border-[#fdb813]/10"
              alt="Manali"
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>

      {/* ROUTE INFO SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">
            Popular Stops & Route Information
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              {[
                {
                  name: "Timber Trail Resort",
                  desc: "Perfect for a short break with cable car rides.",
                },
                {
                  name: "Pinjore Gardens",
                  desc: "Historic Mughal-style architecture and fountains.",
                },
                {
                  name: "Nalagarh Fort",
                  desc: "30km from Zirakpur, a heritage fort with royal views.",
                },
                {
                  name: "Sundernagar Lake",
                  desc: "Serene beauty and boating facilities.",
                },
                {
                  name: "Kullu",
                  desc: "The 'Valley of Gods' with adventure sports.",
                },
              ].map((stop, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-xl border-l-4 border-[#fdb813] shadow-sm"
                >
                  <span className="font-bold block text-lg mb-1">
                    {i + 1}. {stop.name}
                  </span>
                  <p className="text-gray-600 text-sm">{stop.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm space-y-6">
              <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <details className="group border-b border-gray-100 pb-4" open>
                  <summary className="list-none flex justify-between items-center font-bold cursor-pointer group-open:text-[#fdb813]">
                    What is the distance?
                    <ChevronDown
                      size={20}
                      className="group-open:rotate-180 transition-transform"
                    />
                  </summary>
                  <p className="mt-2 text-gray-500 text-sm">
                    The distance from Zirakpur to Manali by car is 283 km.
                  </p>
                </details>
                <details className="group border-b border-gray-100 pb-4">
                  <summary className="list-none flex justify-between items-center font-bold cursor-pointer group-open:text-[#fdb813]">
                    Is toll tax included?
                    <ChevronDown
                      size={20}
                      className="group-open:rotate-180 transition-transform"
                    />
                  </summary>
                  <p className="mt-2 text-gray-500 text-sm">
                    For One way cab, you need to pay one side Toll tax only.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1e1e1e] text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div>
              <h5 className="font-bold text-[#fdb813] mb-6">CAB FROM DELHI</h5>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">
                  Taxi from Delhi to Agra
                </li>
                <li className="hover:text-white cursor-pointer">
                  Taxi from Delhi to Jaipur
                </li>
                <li className="hover:text-white cursor-pointer">
                  Taxi from Delhi to Chandigarh
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-[#fdb813] mb-6">
                CAB FROM BANGALORE
              </h5>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">
                  Taxi from Bangalore to Mysore
                </li>
                <li className="hover:text-white cursor-pointer">
                  Taxi from Bangalore to Coorg
                </li>
                <li className="hover:text-white cursor-pointer">
                  Taxi from Bangalore to Ooty
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-[#fdb813] mb-6">RESOURCES</h5>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:text-white cursor-pointer">
                  Terms of Use
                </li>
                <li className="hover:text-white cursor-pointer">Sitemap</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-[#fdb813] mb-6">CONTACT</h5>
              <p className="text-sm text-gray-400 mb-4">
                Support: support@devineCab.com
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-slate-600 hover:text-black cursor-pointer transition-colors">
                  <Phone size={18} />
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-800 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex max-[768]:flex-col items-center gap-4">
              <div className={`p-1 rounded font-bold text-white px-4 ${lavishly.className} tracking-wider text-2xl`}>
                DEVINE CAB
              </div>
              <p className="text-xs text-gray-500">
                Copyright © 2026 Devine Cab Private Limited. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE TAGLINE STICKY */}
      <div className="bottom-0 left-0 right-0 bg-slate-600 py-2 text-center text-sm font-bold z-50">
        India moves with Devine Cab !!
      </div>
    </div>
  );
}
