
import React from "react";
import {
  CalendarDays,
  Gauge,
  Package,
} from "lucide-react";

const Other = () => {
  const data = [
    {
      id: 1,
      Date: "13/10/2026",
      Material: "Tyre",
      Rupee: 9200,
      KiloMeter: 81810,
    },
  ];

  return (
    <div className="min-h-screen text-white">

      {/* Header */}
      <div className="flex flex-col">
        <p className="font-semibold">Other Details</p>

        <p className="mb-2 text-[12px] text-gray-500">
          Shree Shyam Tour and Travels / Details
        </p>

        <hr className="border-[#D6AE58]" />
      </div>

      {/* Cards */}
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="h-fit overflow-hidden rounded-xl border border-[#D6AE58]/30 bg-[#152238] transition duration-300 hover:border-[#D6AE58]/60"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-white/10 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-[#D6AE58]/10 p-3">
                  <Package size={21} className="text-[#D6AE58]" />
                </div>

                <div>
                  <h2 className="font-semibold">{item.Material}</h2>
                  <p className="mt-1 text-xs text-gray-400">
                    Material Record
                  </p>
                </div>
              </div>

              <span className="rounded-lg border border-[#D6AE58]/20 bg-[#D6AE58]/10 px-3 py-1.5 text-xs font-semibold text-[#D6AE58]">
                #{String(item.id).padStart(3, "0")}
              </span>
            </div>

            {/* Amount */}
            <div className="mx-5 mt-5 rounded-lg border border-gray-700 bg-[#0D172B] p-4">
              <p className="text-xs text-gray-400">RUPEE</p>

              <p className="mt-2 text-2xl font-bold text-green-400">
                ₹{item.Rupee.toLocaleString("en-IN")}
              </p>
            </div>

            {/* Details */}
            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <CalendarDays
                    size={16}
                    className="text-[#D6AE58]"
                  />
                  <span className="text-sm text-gray-400">Date</span>
                </div>

                <span className="text-sm font-medium">
                  {item.Date}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Gauge
                    size={16}
                    className="text-[#D6AE58]"
                  />
                  <span className="text-sm text-gray-400">
                    Kilometer
                  </span>
                </div>

                <span className="text-sm font-medium">
                  {item.KiloMeter.toLocaleString("en-IN")} km
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-700 px-5 py-3">
              <p className="text-center text-xs text-gray-500">
                Shree Shyam Tour and Travels
              </p>
            </div>
          </div>
        ))}

        {/* Empty State */}
        {data.length === 0 && (
          <div className="rounded-xl border border-dashed border-gray-700 bg-[#152238] p-8 text-center">
            <Package
              size={32}
              className="mx-auto text-gray-500"
            />

            <p className="mt-3 font-medium">No Records Found</p>

            <p className="mt-1 text-sm text-gray-400">
              No details available right now.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Other;
