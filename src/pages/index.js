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
  const handleSetbettingTab = () => {
    setBettingTabOpen(!bettingTabOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="  w-auto max-w-9xl mx-auto flex">
            {/* Dashboard actions */}
            <div className="flex flex-col items-start px-4 sm:px-6 lg:px-8 justify-between py-8">
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
            <div className="flex flex-col ml-4 w-auto py-8 ">
              <WelcomeBanner />
              <Matches />
            </div>
            <div className="flex flex-col w-fit  bg-slate-100 fixed  z-40 right-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-auto overflow-y-scroll lg:overflow-y-auto no-scrollbar shrink-0  p-4 transition-all duration-200 ease-in-out border-r border-slate-200 ">
              {/* Right: Top title */}
              <div className="flex justify-between items-center mx-5 py-3 ">
                <p className="text-lg font-semibold text-slate-500">
                  Invoice for Payment
                </p>
                <p className="text-2xl font-bold text-gray-500">
                  <MdClear />
                </p>
              </div>
              {/* Right: Betting Invoice */}
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
