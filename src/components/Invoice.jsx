import React, { useState } from "react";

const Invoice = () => {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [expend, setExpend] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString("en-GB"));

  const safe = Number(amount || 0) - Number(expend || 0);

  const formatMoney = (value) => Number(value || 0).toLocaleString("en-IN");

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <div className="flex flex-col">
        <p className="font-semibold">Invoice</p>

        <p className="mb-2 text-[12px] text-gray-500">
          Shree Shyam Tour and Travels / Invoice
        </p>

        <hr className="border-[#D6AE58]" />
      </div>

      {/* Main Content */}
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Invoice Form */}
        <div className="rounded-xl border border-[#D6AE58]/30 bg-[#152238] p-5">
          <h2 className="mb-5 text-lg font-semibold text-[#D6AE58]">
            Invoice Details
          </h2>

          <form className="flex flex-col gap-4">
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Customer Name
              </label>

              <input
                type="text"
                placeholder="Enter customer name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-700 bg-[#0D172B] p-3 text-white outline-none focus:border-[#D6AE58]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">Date</label>

              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-lg border border-gray-700 bg-[#0D172B] p-3 text-white outline-none focus:border-[#D6AE58]"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-gray-300">From</label>

                <input
                  type="text"
                  placeholder="Starting location"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full rounded-lg border border-gray-700 bg-[#0D172B] p-3 text-white outline-none focus:border-[#D6AE58]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">To</label>

                <input
                  type="text"
                  placeholder="Destination"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full rounded-lg border border-gray-700 bg-[#0D172B] p-3 text-white outline-none focus:border-[#D6AE58]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Amount (₹)
                </label>

                <input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full rounded-lg border border-gray-700 bg-[#0D172B] p-3 text-white outline-none focus:border-[#D6AE58]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Expense (₹)
                </label>

                <input
                  type="number"
                  placeholder="Enter expense"
                  value={expend}
                  onChange={(e) => setExpend(e.target.value)}
                  className="w-full rounded-lg border border-gray-700 bg-[#0D172B] p-3 text-white outline-none focus:border-[#D6AE58]"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Receipt Preview */}
        <div className="h-fit rounded-xl border border-[#D6AE58]/30 bg-[#152238] p-5 sm:p-7">
          <div className="text-center">
            <h2 className="text-xl font-bold tracking-wide text-[#D6AE58]">
              SHREE SHYAM
            </h2>

            <p className="text-sm font-medium tracking-[3px]">
              TOUR AND TRAVELS
            </p>

            <p className="mt-2 text-xs text-gray-400">TRAVEL RECEIPT</p>
          </div>

          <hr className="my-5 border-dashed border-[#D6AE58]/50" />

          <div className="flex justify-between gap-3 text-sm">
            <span className="text-gray-400">Receipt Date</span>
            <span>{date || "-"}</span>
          </div>

          <div className="mt-5 rounded-lg border border-gray-700 bg-[#0D172B] p-4">
            <p className="mb-3 text-xs text-gray-400">CUSTOMER DETAILS</p>

            <p className="font-medium">{name || "Customer Name"}</p>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="mb-1 text-xs text-gray-400">From</p>
                <p className="break-words text-sm">{from || "-"}</p>
              </div>

              <div>
                <p className="mb-1 text-xs text-gray-400">To</p>
                <p className="break-words text-sm">{to || "-"}</p>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <div className="flex justify-between gap-3 text-sm">
              <span className="text-gray-400">Total Amount</span>
              <span className="font-medium text-green-400">
                ₹{formatMoney(amount)}
              </span>
            </div>

            <div className="flex justify-between gap-3 text-sm">
              <span className="text-gray-400">Total Expense</span>
              <span className="font-medium text-red-400">
                ₹{formatMoney(expend)}
              </span>
            </div>
          </div>

          <div className="mt-5 rounded-lg border border-[#D6AE58]/40 bg-[#0D172B] p-4">
            <p className="text-xs text-gray-400">Net Profit / Safe</p>

            <p className="mt-2 text-2xl font-bold text-[#D6AE58]">
              ₹{formatMoney(safe)}
            </p>
          </div>

          <hr className="my-5 border-dashed border-[#D6AE58]/50" />

          <p className="text-center text-sm text-gray-300">
            Thank you for travelling with us!
          </p>

          <p className="mt-1 text-center text-xs text-gray-500">
            Have a safe and happy journey.
          </p>
          <p className="mb-2 font-serif mt-2 text-center text-2xl italic text-[#D6AE58]">
            Mukesh Singh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;