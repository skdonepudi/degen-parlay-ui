import { MdClear, MdInfo } from "react-icons/md";
import React, { useState } from "react";
export default function Ticket(props) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-2">
        <div className="flex-auto justify-evenly">
          <div className="flex items-center justify-a">
            <div className="ml-auto font-semibold  text-lg">
              <h2
                className={`${
                  checked
                    ? "text-gray-400 transition-colors duration-300"
                    : "text-gray-900 transition-colors duration-300"
                }`}
              >
                Simple
              </h2>
            </div>
            <div className="flex items-center  ml-auto">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  onChange={() => setChecked(!checked)}
                  value=""
                  className="sr-only peer"
                />
                <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 ring-2 ring-gray-300 peer-focus:ring-indigo-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-indigo-600 after:border-indigo-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-300 dark:border-gray-600 peer-checked:bg-slate-100"></div>
              </label>
            </div>
            <div className="ml-auto font-semibold mr-4 text-lg ">
              <h2
                className={`${
                  checked
                    ? "transition-colors duration-300 text-gray-900 "
                    : "transition-colors duration-300 text-gray-400"
                }`}
              >
                Combo
              </h2>
            </div>
          </div>
          <div className="border-b border-dashed border-b-2 my-5 ">
            <div className="absolute rounded-full w-5 h-5 bg-slate-200 -mt-2 -left-2"></div>
            <div className="absolute rounded-full w-5 h-5 bg-slate-200 -mt-2 -right-2"></div>
          </div>
          <div className="flex items-center px-5 py-3 text-sm">
            <div className="flex flex-col">
              <span className="text-sm">
                <span className="font-bold text-black">Barcelona</span> vs{" "}
                <span className="font-bold text-black">Chealsea</span>
              </span>
            </div>
            <div className="flex flex-col ml-auto">
              <button className="text-sm bg-gray-400 p-0.5 rounded-full">
                <MdClear className="text-white" />
              </button>
            </div>
          </div>
          {checked && (
            <div className="flex items-center px-5 text-sm">
              <div className="flex flex-col">
                <span className="text-sm">
                  <span className="font-bold text-black">Everton</span> vs{" "}
                  <span className="font-bold text-black">Villarreal</span>
                </span>
              </div>
              <div className="flex flex-col ml-auto">
                <button className="text-sm bg-gray-400 p-0.5 rounded-full">
                  <MdClear className="text-white" />
                </button>
              </div>
            </div>
          )}
          <div>
            <p className="text-xs m-auto mx-5 mb-2 mt-4 text-gray-400">
              Winner
            </p>
          </div>
          <div className="flex justify-between items-center  bg-indigo-100 mx-5 p-2 rounded text-indigo-600 text-sm">
            <p className="">Barcelona</p>
            <p className="bg-indigo-600 px-2 py-1 text-white rounded">1.56</p>
          </div>
          {checked && (
            <div className="flex justify-between items-center mt-2 bg-indigo-100 mx-5 p-2 rounded text-indigo-600 text-sm">
              <p className="">Villarreal</p>
              <p className="bg-indigo-600 px-2 py-1 text-white rounded">1.21</p>
            </div>
          )}

          <div className="border-b border-dashed border-b-2 my-3 pt-5">
            <div className="absolute rounded-full w-5 h-5 bg-slate-200 -mt-2 -left-2"></div>
            <div className="absolute rounded-full w-5 h-5 bg-slate-200 -mt-2 -right-2"></div>
          </div>
          <div className="flex items-center px-5 pt-3 text-sm">
            <div className="bg-gray-200 px-3 py-2 rounded">
              <span className="text-sm tracking-widest text-gray-500">1$</span>
            </div>
            <div className="bg-gray-200 px-3 py-2 ml-2 rounded">
              <span className="text-sm tracking-widest text-gray-500">2$</span>
            </div>
            <div className="bg-gray-200 px-3 py-2 ml-2 rounded">
              <span className="text-sm tracking-widest text-gray-500">5$</span>
            </div>
            <div className="bg-gray-200 ml-2 w-30 rounded">
              <input
                className="text-sm tracking-widest w-16 p-2 border-2 rounded border-gray-300 text-gray-500 placeholder-gray-400"
                placeholder="20$"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-between items-center">
            <p className="text-sm font-bold m-auto mx-5 mb-2 text-gray-500">
              More options
            </p>
            <span>
              <MdInfo className="text-gray-400 text-sm m-auto mx-5 mb-2" />
            </span>
          </div>

          <div className="flex items-center px-5 pt-2">
            <input type="checkbox" className="form-checkbox rounded" />
            <p className="text-gray-500 text-sm ml-2">
              Accept rules of the agreement
            </p>
          </div>
          <div className="flex items-center px-5 pt-2 ">
            <input type="checkbox" className="form-checkbox rounded" />
            <p className="text-gray-500 ml-2 text-sm">
              Accept any odds changes
            </p>
          </div>
          <div className="flex justify-start items-center px-5 pt-2 pb-2">
            <div className=" pt-2 pb-5">
              <p className="text-gray-700 text-sm font-bold pb-1">Total Rate</p>
              <span className="font-bold text-white bg-indigo-700 px-2.5 py-1.5  text-sm rounded">
                2.72
              </span>
            </div>
            {/* VERTICAL LINE */}
            <div className="border-l border-gray-300 h-10 mx-5"></div>
            {/* VERTICAL LINE */}
            <div className=" px-5 pt-2 ">
              <p className="text-gray-700 text-xs font-bold">
                Possible Winnings
              </p>
              <span className="text-green-500 text-xl font-normal">
                735, 38$
              </span>
            </div>
          </div>
          <div className="border-b border-dashed my-5 ">
            <div className="absolute rounded-full w-5 h-5 bg-slate-200 -mt-2 -left-2"></div>
            <div className="absolute rounded-full w-5 h-5 bg-slate-200 -mt-2 -right-2"></div>
          </div>
          {/* Place a bet button */}
          <div className="flex justify-center items-center  my-2 ">
            <button className="bg-indigo-700 w-full rounded-lg  text-white text-sm font-bold py-3 px-4 hover:-translate-y-1 transition-transform duration-300">
              Place a bet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
