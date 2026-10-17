
import React from "react";
import carvid from "../assets/carvid.mp4";
import {
  ArrowBigRightDash,
  CalendarRange,
  LocationEdit,
} from "lucide-react";
import { Link } from "react-router-dom";
import Records from "./Records";

const Hero = () => {
  return (
    <div className="flex min-w-0 flex-col gap-6 sm:gap-8">
      {/* Dashboard Header */}
      <div className="flex flex-col">
        <p className="text-xl font-bold text-white sm:text-2xl">
          Dashboard
        </p>

        <p className="mb-3 mt-1 text-xs text-gray-500 sm:text-[12px]">
          Shree Shyam Tour and Travels / Dashboard
        </p>

        <hr className="border-white/10" />
      </div>

      {/* Hero Video */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 sm:rounded-3xl">
        <video
          src={carvid}
          autoPlay
          loop
          playsInline
          preload="auto"
          className="h-[360px] w-full object-cover sm:h-[420px] lg:h-[480px]"
        />

        {/* Black Shadow Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080D1B]/90 via-[#080D1B]/65 to-black/20" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 p-5 sm:gap-5 sm:p-8 md:p-10 lg:p-12">
          {/* Location */}
          <p className="flex w-fit items-center gap-2 rounded-full border border-[#DAB765]/20 bg-[#000613]/80 px-3 py-2 text-xs font-medium text-[#DAB765] sm:text-sm">
            <LocationEdit size={18} />
            JAIPUR, RAJASTHAN
          </p>

          {/* Heading */}
          <h1 className="flex flex-col text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Every Trip,
            <span className="mt-1 text-[#DAB765]">
              Properly Recorded.
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-md text-sm leading-6 text-gray-300 sm:text-base sm:leading-7">
            Your business trips, monthly records and invoices — organized
            in one place.
          </p>

          {/* Monthly Records Button */}
          <Link
            to="/records"
            className="group mt-1 flex w-fit items-center gap-2 rounded-xl bg-[#D6AE58] px-3 py-3 text-xs font-semibold text-black transition duration-300 hover:bg-[#f5d185] sm:px-5 sm:text-sm"
          >
            <CalendarRange size={18} />
            <span>Explore Monthly Records</span>
            <ArrowBigRightDash
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      <Records/>
    </div>
  );
};

export default Hero;