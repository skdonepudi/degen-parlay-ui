import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import BettingCard from "@/components/BettingCard";
import FootballLeagues from "@/components/FootballLeagues";
import Matches from "@/components/Matches";
import WelcomeBanner from "@/components/WelcomeBanner";
import BettingInvoice from "@/components/BettingInvoice";
import RightSidebar from "@/components/RightSidebar";
import { MdCheck, MdClear } from "react-icons/md";
import Ticket from "@/components/Ticket";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [bettingTabOpen, setBettingTabOpen] = useState(true);

  return (
    <div className="flex h-screen justify-between">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col  flex-1 overflow-y-auto overflow-x-hidden bg-white">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="w-auto lg:flex max-w-full">
            {/* Dashboard actions */}
            <div className="flex flex-col items-start px-4 sm:px-4 lg:px-4 justify-start py-6">
              {/* Left: Betting Card */}

              <BettingCard
                bet={{
                  title: "UEFA Champions League",
                  description: "Groupe stage - Matchday 2 of 6",
                }}
              />
              <div className="my-4"></div>
              {/* Football leagues */}
              <FootballLeagues />
            </div>
            <div className="flex flex-col  min-w-44 max-w-full py-6  px-4">
              <WelcomeBanner />
              <Matches />
            </div>
            <div className="flex flex-col w-auto bg-slate-100 static  z-10 right-0 top-0 lg:top-auto h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar shrink p-1 transition-all duration-200 ease-in-out border-r border-slate-200 ">
              <div className="flex justify-between items-center mx-5 py-3 ">
                <p className="text-lg font-semibold text-slate-500">
                  Invoice for Payment
                </p>
                <button className="text-2xl font-bold text-gray-500 hover:text-gray-600 rounded-full hover:bg-white p-2  transition duration-300">
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
