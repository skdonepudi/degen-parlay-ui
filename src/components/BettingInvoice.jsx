import React, { useState, useEffect } from "react";
import { MdPrint, MdFileDownload } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function BettingInvoice({ bettingTabOpen, setBettingTabOpen }) {
  const storedBettingTabExpanded = true;
  const [bettingTabExpanded, setBettingTabExpanded] = useState(
    storedBettingTabExpanded === null
      ? false
      : storedBettingTabExpanded === "true"
  );

  useEffect(() => {
    localStorage.setItem("bettingtab-expanded", bettingTabExpanded);
    if (bettingTabExpanded) {
      document.querySelector("body").classList.add("bettingtab-expanded");
    } else {
      document.querySelector("body").classList.remove("bettingtab-expanded");
    }
  }, [bettingTabExpanded]);
  return (
    <div
      id="sidebar"
      className={`flex flex-col absolute z-40 right-0 top-0 lg:static lg:right-auto lg:top-auto lg:translate-x-0 h-full overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:betting-expanded:!w-64  shrink-0 bg-white p-4 transition-all duration-200 ease-in-out border-r border-slate-200 ${
        bettingTabOpen ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <h1 className="text-2xl font-bold text-gray-800">Betting Invoice</h1>
      <div className="flex flex-col mt-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-gray-600 text-sm">Total Odd</span>
            <span className="text-gray-800 text-lg font-bold">2</span>
          </div>
          <div className="flex justify-start mb-10 pr-3 sm:px-2 ">
            {/* Close button */}
            <button
              className="lg:hidden text-slate-500 hover:text-slate-400"
              onClick={() => setBettingTabOpen(!bettingTabOpen)}
              aria-controls="sidebar"
              aria-expanded={bettingTabOpen}
            >
              <span className="sr-only">Close sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
              </svg>
            </button>
            {/* Logo */}
            <button onClick={() => setBettingTabOpen(!bettingTabOpen)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-7 h-7 hidden lg:block text-slate-400 text-xl fill-current sidebar-expanded:rotate-180 transition-transform duration-300"
              >
                <path
                  fill="currentColor"
                  className="font-bold"
                  d="M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z"
                ></path>
              </svg>
            </button>
            <p className="lg:text-2xl sm:text-lg  font-bold text-indigo-600 ml-6 transition-opacity duration-500 truncate ">
              Degen Parlay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
