import React, { useState } from "react";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import BettingCard from "@/components/BettingCard";
import FootballLeagues from "@/components/FootballLeagues";
import Matches from "@/components/Matches";
import WelcomeBanner from "@/components/WelcomeBanner";
import { MdClear } from "react-icons/md";
import Ticket from "@/components/Ticket";
import { useEffect } from "react";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [bettingTabOpen, setBettingTabOpen] = useState<boolean>(false);
  function toggle() {
    setBettingTabOpen(false);
  }

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (bettingTabOpen) {
        body.classList.add("bettingtab-expanded");
      } else {
        body.classList.remove("bettingtab-expanded");
      }
    }
  }, [bettingTabOpen]);

  return (
    <div className="flex h-screen justify-between">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col  flex-1 overflow-y-auto overflow-x-hidden bg-white">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="w-auto lg:flex max-w-full transition-all duration-300 ease-in-out">
            {/* Dashboard actions */}
            <div className="flex flex-col items-start px-4 sm:px-4 lg:px-4 justify-center py-6 transition-all">
              {/* Left: Betting Card */}

              <BettingCard
                setBettingTabOpen={setBettingTabOpen}
                bet={{
                  title: "UEFA Champions League",
                  description: "Groupe stage - Matchday 2 of 6",
                }}
              />
              <div className="my-4"></div>
              {/* Football leagues */}
              <FootballLeagues />
            </div>

            <div className="flex flex-col min-w-44 max-w-full py-6 px-4 flex-grow transition-all duration-300 ease-in-out">
              <WelcomeBanner />
              <Matches />
            </div>

            {/* Betting Tab width auto */}

            <div
              className={`flex flex-col bg-slate-100 fixed lg:static right-0 top-0 lg:top-auto h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar shrink-0 p-1 transition-all duration-300 ease-in-out border-r border-slate-200  ${
                bettingTabOpen
                  ? "translate-x-0 "
                  : "translate-x-full opacity-0 w-0 overflow-hidden hidden lg:block"
              }`}
            >
              <div className="flex justify-between items-center mx-5 py-3">
                <p className="text-lg font-semibold text-slate-500">
                  Invoice for Payment
                </p>
                <button
                  className="text-2xl font-bold text-gray-500 hover:text-gray-600 rounded-full hover:bg-white p-2  transition-all duration-300 hover:border border-gray-300"
                  onClick={toggle}
                >
                  <MdClear />
                </button>
              </div>
              <div>
                <Ticket />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
