import { useState } from "react";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { MdVideocam, MdStar } from "react-icons/md";
export default function BettingCard({ bet }) {
  const { title, description } = bet;

  const storedBettingTabExpanded = true;
  const [bettingTabExpanded, setBettingTabExpanded] = useState(
    storedBettingTabExpanded === null
      ? false
      : storedBettingTabExpanded === true
  );

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    localStorage.setItem("betting-expanded", bettingTabExpanded);
    if (bettingTabExpanded) {
      document.querySelector("body").classList.add("betting-expanded");
    } else {
      document.querySelector("body").classList.remove("betting-expanded");
    }
  }, [bettingTabExpanded]);

  return (
    <div className="rounded border ">
      {/** Bet title */}
      <div className="p-8">
        <div className="flex justify-center items-center">
          <div className="mr-2">
            <h3 className="text-sm leading-6 font-bold text-gray-900">
              {title}
            </h3>
            <p className="mt-1 text-xs text-gray-500">{description}</p>
          </div>
          <div className="bg-red-100 ml-4 px-3 py-1.5 text-red-600 rounded">
            <p className="flex items-center">
              <MdVideocam className="text-2xl" />{" "}
              <span className="ml-1 text-sm font-semibold">Live</span>
            </p>
          </div>
        </div>
        {/** Bet options */}
        <div className="mt-4">
          <div className={`flex justify-center items-center px-8 py-2`}>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="https://ssl.gstatic.com/onebox/media/sports/logos/paYnEE8hcrP96neHRNofhQ_96x96.png"
                width={40}
                height={40}
                alt="Barcelona"
              />
              <p className="text-sm leading-6 font-semibold text-gray-900">
                Barcelona
              </p>
            </div>
            {/* Scorecard */}
            <div className="flex flex-col justify-center items-center">
              <div className="px-3 py-1.5  rounded ml-4 mr-4">
                <p className="flex items-center">
                  <span className="text-xl text-black font-bold mr-2">2</span>
                  <span className="text-xl text-gray-400 font-bold">:</span>
                  <span className="text-xl text-gray-400 font-bold ml-2">
                    0
                  </span>
                </p>
              </div>
              <p className="text-xs text-gray-400">1st half</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_96x96.png"
                width={40}
                height={40}
                alt="Chelsea"
              />
              <p className="text-sm leading-6 font-bold text-gray-900">
                Chelsea
              </p>
            </div>
          </div>
          {/* Buttons */}
          <div className="mt-4 flex justify-center items-center">
            <button className="bg-gray-200 text-sm font-semibold text-gray-400 ml-4 px-6 py-2.5 rounded hover:bg-gray-300 transition duration-200">
              <MdStar className="w-5 h-5" />
            </button>
            <button
              onClick={toggleSidebar}
              aria-controls="sidebar"
              className="bg-indigo-600 text-sm font-semibold text-gray-100 ml-4 px-6 py-2 rounded hover:-translate-y-1 transition duration-200"
            >
              Bet
            </button>
            <button className="bg-gray-200 text-sm font-semibold text-gray-400 ml-4 px-6 py-2 rounded hover:bg-gray-300 transition duration-200">
              Watch
            </button>
          </div>
        </div>
      </div>
      {/* Match details */}
      <div className="mt-2">
        <hr className="border-gray-200" />
        <p className="text-sm text-center text-gray-400 p-4">
          <span className="font-normal">Match details</span>
        </p>
      </div>
    </div>
  );
}
