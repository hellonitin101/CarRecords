import React, { useState } from "react";

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const Records = () => {
  const [selectedMonth, setselectedMonth] = useState("October");

  const data = {
    October: [
      { id: 1, date:"13/10/2026", name: "Bahrav Singh", from: "Jaipur", to: "Local", amount: "1600", expend: "300" },
      { id: 2, date:"14/10/2026", name: "Ranjit Singh", from: "Jaipur", to: "Bhilwara", amount: "5200", expend: "1800" },
      { id: 3, date:"16/10/2026", name: "Sailendra Ji", from: "Jaipur", to: "Jin Mata", amount: "2500", expend: "600" },
    ]
  };

  const records = data[selectedMonth] || [];

  const totalAmount = records.reduce(
    (sum, item) => sum + Number(item.amount || 0), 0
  );

  const totalExpend = records.reduce(
    (sum, item) => sum + Number(item.expend || 0), 0
  );

  const totalSafe = totalAmount - totalExpend;

  return (
    <div className="min-h-screen text-white">
      <div className="flex flex-col">
        <p className="font-semibold">Records</p>
        <p className="mb-2 text-[12px] text-gray-500">
          Shree Shyam Tour and Travels / Records
        </p>
        <hr className="border-[#D6AE58]" />
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {months.map((month) => (
          <button
            key={month}
            onClick={() => setselectedMonth(month)}
            className={`rounded-xl border p-3 text-sm font-medium transition-colors duration-200 ${
              selectedMonth === month
                ? "border-[#D6AE58] bg-[#D6AE58] text-[#0D172B]"
                : "border-gray-700 bg-[#152238] text-white hover:border-[#D6AE58] hover:text-[#D6AE58]"
            }`}
          >
            {month}
          </button>
        ))}
      </div>

      <h2 className="my-5 text-lg font-semibold">
        {selectedMonth} Records
      </h2>

      <div className="overflow-x-auto rounded-xl border border-[#D6AE58]/30 shadow-lg shadow-black/10">
        <table className="w-full min-w-[650px] border-collapse bg-[#152238] text-left text-sm">
          <thead className="bg-[#0D172B] text-[#D6AE58]">
            <tr>
              {["Sr.No", "Date", "Name", "From", "To", "Amount", "Expend", "Safe"].map(
                (heading) => (
                  <th
                    key={heading}
                    className="whitespace-nowrap border-b border-[#D6AE58]/30 px-4 py-4 font-semibold"
                  >
                    {heading}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {records.length > 0 ? (
              records.map((item, index) => {
                const amount = Number(item.amount || 0);
                const expend = Number(item.expend || 0);
                const safe = amount - expend;

                return (
                  <tr
                    key={item.id}
                    className="border-b border-gray-700/60 transition-colors hover:bg-[#1C2D46]"
                  >
                    <td className="px-4 py-4 text-gray-400">{index + 1}</td>
                    <td className="px-4 py-4 text-gray-400">{item.date}</td>
                    <td className="px-4 py-4 font-medium text-white">{item.name}</td>
                    <td className="px-4 py-4 text-gray-300">{item.from}</td>
                    <td className="px-4 py-4 text-gray-300">{item.to || "-"}</td>

                    <td className="whitespace-nowrap px-4 py-4 text-green-400">
                      ₹{amount.toLocaleString("en-IN")}
                    </td>

                    <td className="whitespace-nowrap px-4 py-4 text-red-400">
                      ₹{expend.toLocaleString("en-IN")}
                    </td>

                    <td className="whitespace-nowrap px-4 py-4 font-medium text-[#D6AE58]">
                      ₹{safe.toLocaleString("en-IN")}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-gray-400">
                  No records available for {selectedMonth}
                </td>
              </tr>
            )}
          </tbody>

          <tfoot className="border-t-2 border-[#D6AE58] bg-[#0D172B] font-semibold">
            <tr>
              <td colSpan={5} className="px-4 py-4 text-[#D6AE58]">
                Total
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-green-400">
                ₹{totalAmount.toLocaleString("en-IN")}
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-red-400">
                ₹{totalExpend.toLocaleString("en-IN")}
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-[#D6AE58]">
                ₹{totalSafe.toLocaleString("en-IN")}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Records;