import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  Receipt,
  Menu,
  X,
  List,
} from "lucide-react";
import { Link } from "react-router-dom";
import car from "../assets/car.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile & Tablet Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-4 top-4 z-40 rounded-xl border border-[#D6AE58]/40 bg-[#0D172B] p-3 text-[#D6AE58] shadow-lg transition hover:bg-[#17243B] lg:hidden"
        aria-label="Open sidebar"
      >
        <Menu size={26} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-dvh w-64 flex-col overflow-y-auto bg-[#0D172B] p-4 text-white shadow-2xl transition-transform duration-300 lg:sticky lg:z-30 lg:h-screen lg:w-60 lg:shrink-0 lg:translate-x-0 lg:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-[#D6AE58]">
          <div className="flex items-center gap-3">
            <img src={car} alt="Car" className="h-10 w-10 object-contain" />

            <div>
              <h2 className="font-bold text-[#D6AE58]">Shree Shyam</h2>
              <p className="text-xs text-gray-400">Tour and Travels</p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 text-[#D6AE58] hover:bg-white/10 lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={22} />
          </button>
        </div>

        {/* Main Menu */}
        <div className="flex flex-1 flex-col justify-between gap-6 py-6">
          <nav className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-widest text-gray-400">
              MAIN MENU
            </p>

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 rounded-xl bg-[#D6AE58] p-3 font-semibold text-black hover:bg-[#f5d185]"
            >
              <LayoutDashboard size={20} />
              Dashboard
            </Link>

            <Link
              to="/records"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 rounded-xl bg-[#D6AE58] p-3 font-semibold text-black hover:bg-[#f5d185]"
            >
              <FileText size={20} />
              Records
            </Link>

            <Link
              to="/invoice"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 rounded-xl bg-[#D6AE58] p-3 font-semibold text-black hover:bg-[#f5d185]"
            >
              <Receipt size={20} />
              Generate Invoice
            </Link>

            <Link
              to="/details"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 rounded-xl bg-[#D6AE58] p-3 font-semibold text-black hover:bg-[#f5d185]"
            >
              <List size={20}/>
              Other Details
            </Link>
          </nav>

          {/* Business Card */}
          <div className="rounded-2xl border border-[#D6AE58]/40 bg-[#171F2D] p-3">
            <p className="mb-2 text-sm font-semibold text-[#f5d185]">
              Your Business
            </p>

            <p className="text-xs leading-relaxed text-gray-400">
              Manage your trips, bills and monthly records in one place.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="shrink-0 border-t border-[#D6AE58]/30 pt-4 text-center text-[11px] leading-relaxed text-gray-500">
          © {new Date().getFullYear()} Shree Shyam Tour and Travels
          <p className="mt-1">All rights reserved.</p>
        </footer>
      </aside>
    </>
  );
};

export default Sidebar;