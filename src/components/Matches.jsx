import React from "react";
import {
  MdOutlineMoreHoriz,
  MdAnalytics,
  MdCalendarToday,
} from "react-icons/md";
import Image from "next/image";
export default function Matches() {
  const matches = [
    {
      time: "12:00",
      status: "Live",
      homeTeam: "Villarreal",
      awayTeam: "NK Maribor",
      homeTeamLogo:
        "https://ssl.gstatic.com/onebox/media/sports/logos/WKH7Ak5cYD6Qm1EEqXzmVw_48x48.png",
      awayTeamLogo:
        "https://ssl.gstatic.com/onebox/media/sports/logos/RnYaRw_k05CV-qhVouSEMA_48x48.png",
      score: "1 : 0",
      x1: "1.25",
      x2: "1.25",
      x3: "1.25",
    },
    {
      time: "10:00",
      status: "Live",
      homeTeam: "Girona FC",
      awayTeam: "Real Madrid",
      homeTeamLogo:
        "https://ssl.gstatic.com/onebox/media/sports/logos/Tyy5rCdiLCw2_8z04DM-GQ_48x48.png",
      awayTeamLogo:
        "https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_48x48.png",
      score: "4 : 3",
      x1: "1.25",
      x2: "1.25",
      x3: "1.25",
    },
    {
      time: "12:45",
      status: "Cancelled",
      homeTeam: "Arsenal",
      awayTeam: "Chelsea",
      homeTeamLogo:
        "https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_48x48.png",
      awayTeamLogo:
        "https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_48x48.png",
      score: "1 : 0",
      x1: "1.25",
      x2: "1.25",
      x3: "1.25",
    },
    {
      time: "12:00",
      status: "Live",
      homeTeam: "Liverpool",
      awayTeam: "Qarabag FK",
      homeTeamLogo:
        "https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png",
      awayTeamLogo:
        "https://ssl.gstatic.com/onebox/media/sports/logos/k-Mu0SCwDQG4SFQBxmettA_48x48.png",
      score: "1 : 0",
      x1: "1.25",
      x2: "1.25",
      x3: "1.25",
    },
    {
      time: "17:00",
      status: "Completed",
      homeTeam: "Everton",
      awayTeam: "Villarreal",
      homeTeamLogo:
        "https://ssl.gstatic.com/onebox/media/sports/logos/C3J47ea36cMBc4XPbp9aaA_48x48.png",
      awayTeamLogo:
        "https://ssl.gstatic.com/onebox/media/sports/logos/WKH7Ak5cYD6Qm1EEqXzmVw_48x48.png",
      score: "1 : 0",
      x1: "1.25",
      x2: "1.25",
      x3: "1.25",
    },
    {
      time: "12:00",
      status: "Completed",
      homeTeam: "Real Valladolid",
      awayTeam: "Girona FC",
      homeTeamLogo:
        "https://ssl.gstatic.com/onebox/media/sports/logos/HlIrXZRP96tv0H1uiiN0Jg_48x48.png",
      awayTeamLogo:
        "https://ssl.gstatic.com/onebox/media/sports/logos/Tyy5rCdiLCw2_8z04DM-GQ_48x48.png",
      score: "1 : 0",
      x1: "1.25",
      x2: "1.25",
      x3: "1.25",
    },
  ];

  return (
    <div className="flex flex-col w-full transition-all duration-300">
      <div className="flex justify-between items-center">
        <h3 className="text-lg leading-6 font-bold text-gray-900">Matches</h3>
        <div className="flex items-center">
          <button className="hover:bg-gray-200 text-sm font-semibold text-gray-400 ml-4 px-2 py-2 rounded-full  transition duration-200">
            <MdOutlineMoreHoriz className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="mt-4  col-span-full xl:col-span-8 bg-white rounded border border-slate-200">
        <header className="flex justify-between px-5 py-4 border-b text-gray-400 border-slate-100 text-xs ">
          <div className="flex space-x-6">
            <h2 className="font-bold text-indigo-500">All matches</h2>
            <h2 className="font-semibold">Live Play</h2>
            <h2 className="font-semibold">Completed</h2>
            <h2 className="font-semibold">Scheduled</h2>
          </div>
          <div>
            <span className="float-right">
              <MdCalendarToday className="w-5 h-5" />
            </span>
          </div>
        </header>
        <div className="">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full ">
              {/* Table header */}
              <thead className="text-xs normal-case text-slate-400 bg-slate-50 border-y border-slate-100 rounded-sm">
                <tr>
                  <th className="p-4">
                    <div className="font-semibold text-left">Date</div>
                  </th>
                  <th className="p-4">
                    <div className="font-semibold text-center">Match</div>
                  </th>
                  <th className="p-4">
                    <div className="font-semibold text-center">1x</div>
                  </th>
                  <th className="p-4">
                    <div className="font-semibold text-center">X</div>
                  </th>
                  <th className="p-4">
                    <div className="font-semibold text-center">2x</div>
                  </th>
                  <th className="p-4">
                    <div className="font-semibold text-center"></div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm font-medium divide-y divide-slate-100 ">
                {/* Row */}
                {matches.map((match) => (
                  <tr className="" key={match.time}>
                    <td className="p-4">
                      <div className="flex items-center">
                        <span className="text-center text-xs text-gray-500">
                          {match.time}
                        </span>
                        <span
                          className={
                            match.status == "Live"
                              ? "text-red-600 bg-red-200 px-2 py-1 rounded text-xs ml-2"
                              : "text-gray-500 ml-3"
                          }
                        >
                          <span className="flex text-xs items-center">
                            <svg width="6" height="6" viewBox="0 0 8 8">
                              <circle
                                fill={
                                  match.status == "Completed"
                                    ? "#00C48C"
                                    : "currentColor"
                                }
                                cx="4"
                                cy="4"
                                r="4"
                              ></circle>
                            </svg>
                            <span className="ml-1">{match.status}</span>
                          </span>
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      {/* Team logo */}
                      <div className="flex items-center">
                        <span className="text-xs w-auto">{match.homeTeam}</span>
                        <div className="w-8 h-8 mx-2">
                          <Image
                            src={match.homeTeamLogo}
                            width={32}
                            height={32}
                            alt="team logo"
                          />
                        </div>
                        <div className="flex w-10 items-center">
                          <span className="text-xs">{match.score}</span>
                        </div>
                        <div className="w-8 h-8 mx-2">
                          <Image
                            src={match.awayTeamLogo}
                            width={32}
                            height={32}
                            alt="team logo"
                          />
                        </div>
                        <span className="text-xs">{match.awayTeam}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-center bg-green-100 px-2 py-1 rounded text-green-600">
                        {match.x1}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-center bg-gray-100 px-2 py-1 rounded text-gray-600">
                        {match.x2}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-center bg-red-100 px-2 py-1 rounded text-red-600">
                        {match.x3}
                      </div>
                    </td>
                    <td className="p-4 rounded">
                      <div className="flex justify-center bg-gray-100 rounded-md px-2 py-1.5 text-center text-gray-400">
                        <MdAnalytics className="w-5 h-5" />
                      </div>
                    </td>
                  </tr>
                ))}
                {/* Row */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
