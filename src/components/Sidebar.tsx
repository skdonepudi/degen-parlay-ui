import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import {
  MdDashboard,
  MdOutlineOndemandVideo,
  MdOutlineStar,
} from "react-icons/md";
import Link from "next/link";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
}

function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = router.pathname;

  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(false);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", String(sidebarExpanded));
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-56 lg:w-20 lg:sidebar-expanded:!w-56 2xl:!w-56 shrink-0 bg-white transition-all duration-200 ease-in-out border-r border-slate-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-56"
        }`}
      >
        <div className="flex justify-start mb-5 px-6 py-4">
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
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

          <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
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
              />
            </svg>
          </button>
          <p className="lg:text-xl sm:text-lg  font-bold text-indigo-600 ml-6 transition-opacity duration-500 truncate ">
            Degen Parlay
          </p>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-7">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden  text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block">Pages</span>
            </h3>
            <ul className="mt-3">
              <li className="px-6 py-4  mb-0.5 last:mb-0 border-l-3  border-indigo-600">
                <Link href="/" legacyBehavior>
                  <a
                    className={`flex items-center text-sm font-medium transition-colors duration-150 hover:text-slate-800 ${
                      pathname === "/" ? "text-indigo-600" : "text-slate-600"
                    }`}
                  >
                    <MdDashboard className="flex-shrink-0 w-6 h-6 text-indigo-600" />
                    <span
                      className={`ml-4 text-lg transition-opacity duration-500 sidebar-expanded:opacity-100 sidebar-expanded:translate-x-0 ${
                        sidebarExpanded
                          ? "opacity-100 translate-x-0"
                          : "sm:opacity-100 lg:opacity-0"
                      }`}
                    >
                      Feed
                    </span>
                  </a>
                </Link>
              </li>

              <li className="px-7 py-4 rounded-sm mb-0.5 last:mb-0">
                <Link href="/" legacyBehavior>
                  <a
                    className={`flex items-center text-sm font-medium transition-colors duration-150 hover:text-slate-800 ${
                      pathname === "/videos"
                        ? "text-indigo-600"
                        : "text-slate-400"
                    }`}
                  >
                    <MdOutlineOndemandVideo className="flex-shrink-0 w-6 h-6 text-slate-400" />
                    <span
                      className={`ml-4 text-lg transition-opacity duration-500 sidebar-expanded:opacity-100 sidebar-expanded:translate-x-0 ${
                        sidebarExpanded
                          ? "opacity-100 translate-x-0"
                          : "sm:opacity-100 lg:opacity-0"
                      }`}
                    >
                      Videos
                    </span>
                  </a>
                </Link>
              </li>
              <li className="px-7 py-4 rounded-sm mb-0.5 last:mb-0">
                <Link href="/" legacyBehavior>
                  <a
                    className={`flex items-center text-sm font-medium transition-colors duration-150 hover:text-slate-800 ${
                      pathname === "/videos"
                        ? "text-indigo-600"
                        : "text-slate-400"
                    }`}
                  >
                    <MdOutlineStar className="flex-shrink-0 w-6 h-6 text-slate-400" />
                    <span
                      className={`ml-4 text-lg transition-opacity duration-500 sidebar-expanded:opacity-100 sidebar-expanded:translate-x-0 ${
                        sidebarExpanded
                          ? "opacity-100 translate-x-0"
                          : "sm:opacity-100 lg:opacity-0"
                      }`}
                    >
                      Favourites
                    </span>
                  </a>
                </Link>
              </li>
              <hr className="border-slate-200 my-2" />

              <li className="px-7 py-4 rounded-sm mb-0.5 last:mb-0">
                <Link href="/" legacyBehavior>
                  <a
                    className={`flex items-center text-sm font-medium transition-colors duration-150 hover:text-slate-800 ${
                      pathname === "/videos"
                        ? "text-indigo-600"
                        : "text-slate-400"
                    }`}
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-slate-400"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,3C13.76,3 15.4,3.53 16.78,4.41L16.5,5H13L12,5L10.28,4.16L10.63,3.13C11.08,3.05 11.53,3 12,3M9.53,3.38L9.19,4.41L6.63,5.69L5.38,5.94C6.5,4.73 7.92,3.84 9.53,3.38M13,6H16L18.69,9.59L17.44,12.16L14.81,12.78L11.53,8.94L13,6M6.16,6.66L7,10L5.78,13.06L3.22,13.94C3.08,13.31 3,12.67 3,12C3,10.1 3.59,8.36 4.59,6.91L6.16,6.66M20.56,9.22C20.85,10.09 21,11.03 21,12C21,13.44 20.63,14.79 20.03,16H19L18.16,12.66L19.66,9.66L20.56,9.22M8,10H11L13.81,13.28L12,16L8.84,16.78L6.53,13.69L8,10M12,17L15,19L14.13,20.72C13.44,20.88 12.73,21 12,21C10.25,21 8.63,20.5 7.25,19.63L8.41,17.91L12,17M19,17H19.5C18.5,18.5 17,19.67 15.31,20.34L16,19L19,17Z"
                      />
                    </svg>
                    <span
                      className={`ml-4 text-lg transition-opacity duration-500 sidebar-expanded:opacity-100 sidebar-expanded:translate-x-0 ${
                        sidebarExpanded
                          ? "opacity-100 translate-x-0"
                          : "sm:opacity-100 lg:opacity-0"
                      }`}
                    >
                      Football
                    </span>
                  </a>
                </Link>
              </li>
              <li className="px-7 py-4 rounded-sm mb-0.5 last:mb-0">
                <Link href="/" legacyBehavior>
                  <a
                    className={`flex items-center text-sm font-medium transition-colors duration-150 hover:text-slate-800 ${
                      pathname === "/videos"
                        ? "text-indigo-600"
                        : "text-slate-400"
                    }`}
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-slate-400"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M7.5,7.5C9.17,5.87 11.29,4.69 13.37,4.18C15.46,3.67 17.5,3.83 18.6,4C19.71,4.15 19.87,4.31 20.03,5.41C20.18,6.5 20.33,8.55 19.82,10.63C19.31,12.71 18.13,14.83 16.5,16.5C14.83,18.13 12.71,19.31 10.63,19.82C8.55,20.33 6.5,20.18 5.41,20.03C4.31,19.87 4.15,19.71 4,18.6C3.83,17.5 3.67,15.46 4.18,13.37C4.69,11.29 5.87,9.17 7.5,7.5M7.3,15.79L8.21,16.7L9.42,15.5L10.63,16.7L11.54,15.79L10.34,14.58L12,12.91L13.21,14.12L14.12,13.21L12.91,12L14.58,10.34L15.79,11.54L16.7,10.63L15.5,9.42L16.7,8.21L15.79,7.3L14.58,8.5L13.37,7.3L12.46,8.21L13.66,9.42L12,11.09L10.79,9.88L9.88,10.79L11.09,12L9.42,13.66L8.21,12.46L7.3,13.37L8.5,14.58L7.3,15.79Z"
                      />
                    </svg>
                    <span
                      className={`ml-4 text-lg transition-opacity duration-500 sidebar-expanded:opacity-100 sidebar-expanded:translate-x-0 ${
                        sidebarExpanded
                          ? "opacity-100 translate-x-0"
                          : "sm:opacity-100 lg:opacity-0"
                      }`}
                    >
                      Rugby
                    </span>
                  </a>
                </Link>
              </li>
              <li className="px-7 py-4 rounded-sm mb-0.5 last:mb-0">
                <Link href="/" legacyBehavior>
                  <a
                    className={`flex items-center text-sm font-medium transition-colors duration-150 hover:text-slate-800 ${
                      pathname === "/videos"
                        ? "text-indigo-600"
                        : "text-slate-400"
                    }`}
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-slate-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M14.34,17.77L15.75,16.36L20,20.58L18.56,22L14.34,17.77M18.5,2A3.5,3.5 0 0,1 22,5.5A3.5,3.5 0 0,1 18.5,9A3.5,3.5 0 0,1 15,5.5A3.5,3.5 0 0,1 18.5,2M2.24,7.11L5.07,4.28C5.46,3.89 6.09,3.89 6.5,4.28L14.97,12.77C15.36,13.16 15.36,13.79 14.97,14.18L12.14,17C11.75,17.4 11.12,17.4 10.72,17L2.24,8.53C1.85,8.13 1.85,7.5 2.24,7.11Z"
                      />
                    </svg>
                    <span
                      className={`ml-4 text-lg transition-opacity duration-500 sidebar-expanded:opacity-100 sidebar-expanded:translate-x-0 ${
                        sidebarExpanded
                          ? "opacity-100 translate-x-0"
                          : "sm:opacity-100 lg:opacity-0"
                      }`}
                    >
                      Cricket
                    </span>
                  </a>
                </Link>
              </li>
              <li className="px-7 py-4 rounded-sm mb-0.5 last:mb-0">
                <Link href="/" legacyBehavior>
                  <a
                    className={`flex items-center text-sm font-medium transition-colors duration-150 hover:text-slate-800 ${
                      pathname === "/videos"
                        ? "text-indigo-600"
                        : "text-slate-400"
                    }`}
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-slate-400"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12.3,2C11.33,2.03 10.58,2.84 10.61,3.8C10.62,4.04 10.67,4.27 10.77,4.5L11.06,5.14V5.14C11.1,5.27 11.03,5.41 10.89,5.45C10.8,5.5 10.7,5.45 10.63,5.37L10.21,4.82C9.88,4.4 9.38,4.14 8.85,4.13C7.88,4.11 7.08,4.88 7.06,5.84C7.05,6.26 7.19,6.66 7.45,7L7.87,7.5H7.88C7.96,7.63 7.93,7.79 7.82,7.87C7.73,7.94 7.61,7.94 7.53,7.87L7,7.45C6.66,7.19 6.25,7.05 5.84,7.06C4.88,7.08 4.11,7.88 4.13,8.85C4.14,9.38 4.4,9.88 4.82,10.21L5.39,10.65C5.5,10.75 5.5,10.91 5.38,11C5.31,11.07 5.21,11.09 5.12,11.05H5.11L4.5,10.77C4.27,10.68 4.04,10.62 3.8,10.61C2.84,10.58 2.03,11.34 2,12.31C2,13.03 2.4,13.69 3.06,13.97L14.45,19.04L19.04,14.45L13.97,3.06C13.69,2.39 13,1.97 12.3,2M13.13,6.1C13.55,6.09 13.93,6.33 14.09,6.71L17.14,13.55L13.19,9.61L12.26,7.5C11.96,6.87 12.42,6.12 13.13,6.1M9.85,8.85C10.12,8.85 10.37,8.95 10.56,9.15L15.37,13.96C15.77,14.34 15.78,14.97 15.4,15.37C15,15.77 14.38,15.78 13.96,15.37L9.15,10.56C8.75,10.18 8.74,9.54 9.13,9.15C9.32,8.95 9.58,8.85 9.85,8.85M7.13,12.17C7.26,12.17 7.4,12.21 7.5,12.26L9.63,13.2L13.57,17.14L6.71,14.09C5.69,13.65 6.03,12.14 7.13,12.17M20.28,16.04L16.04,20.28L16.89,21.13C17.65,21.88 18.75,22.17 19.78,21.9C20.81,21.62 21.62,20.81 21.9,19.78C22.17,18.75 21.88,17.65 21.13,16.89L20.28,16.04Z"
                      />
                    </svg>
                    <span
                      className={`ml-4 text-lg transition-opacity duration-500 sidebar-expanded:opacity-100 sidebar-expanded:translate-x-0 ${
                        sidebarExpanded
                          ? "opacity-100 translate-x-0"
                          : "sm:opacity-100 lg:opacity-0"
                      }`}
                    >
                      Badminton
                    </span>
                  </a>
                </Link>
              </li>
              <li className="px-7 py-4 rounded-sm mb-0.5 last:mb-0">
                <Link href="/" legacyBehavior>
                  <a
                    className={`flex items-center text-sm font-medium transition-colors duration-150 hover:text-slate-800 ${
                      pathname === "/videos"
                        ? "text-indigo-600"
                        : "text-slate-400"
                    }`}
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-slate-400"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M13.6,20.35C15.96,18.04 17.69,15.08 18.5,11.76C17.84,11.62 17.18,11.54 16.5,11.5C15.56,15.11 13.41,18.22 10.5,20.37C11,20.45 11.5,20.5 12,20.5C12.55,20.5 13.08,20.45 13.6,20.35M9.23,20.04C12.23,18.07 14.5,15.05 15.46,11.5C14.71,11.55 13.97,11.65 13.27,11.81C12.18,14.89 9.97,17.44 7.13,18.97C7.77,19.42 8.5,19.78 9.23,20.04M20.5,12.37C20.16,12.23 19.81,12.11 19.46,12C18.76,14.9 17.39,17.53 15.54,19.73C18.36,18.44 20.35,15.64 20.5,12.37M3.56,11.04C3.5,11.35 3.5,11.68 3.5,12C3.5,14.5 4.57,16.73 6.27,18.28C6.86,18 7.41,17.66 7.94,17.29C6.08,15.54 4.58,13.41 3.56,11.04M5.33,6.74C4.73,7.5 4.26,8.35 3.95,9.28C4.92,12.13 6.58,14.66 8.74,16.67C9.25,16.24 9.72,15.77 10.15,15.26C7.74,13.03 6,10.08 5.33,6.74M8.04,4.5C7.36,4.85 6.73,5.3 6.18,5.82C6.71,9.21 8.37,12.23 10.77,14.47C11.17,13.91 11.5,13.32 11.82,12.7C9.68,10.56 8.28,7.69 8.04,4.5M19.96,9.03C18.7,8.68 17.37,8.5 16,8.5C14.1,8.5 12.28,8.85 10.61,9.5C10.96,10.1 11.35,10.67 11.8,11.2C13.12,10.75 14.53,10.5 16,10.5C17.57,10.5 19.08,10.78 20.47,11.29C20.4,10.5 20.23,9.74 19.96,9.03M17.54,5.57C17.03,5.5 16.5,5.5 16,5.5C13.69,5.5 11.47,5.94 9.44,6.73C9.62,7.38 9.86,8 10.14,8.61C11.96,7.89 13.93,7.5 16,7.5C17.18,7.5 18.32,7.63 19.42,7.87C18.93,7 18.29,6.21 17.54,5.57M16,4.5C14.79,3.87 13.44,3.5 12,3.5C10.95,3.5 9.94,3.7 9,4.05C9.04,4.63 9.11,5.2 9.21,5.75C11.31,4.95 13.6,4.5 16,4.5Z"
                      />
                    </svg>
                    <span
                      className={`ml-4 text-lg transition-opacity duration-500 sidebar-expanded:opacity-100 sidebar-expanded:translate-x-0 ${
                        sidebarExpanded
                          ? "opacity-100 translate-x-0"
                          : "sm:opacity-100 lg:opacity-0"
                      }`}
                    >
                      Voleyball
                    </span>
                  </a>
                </Link>
              </li>
              <li className="px-7 py-4 rounded-sm mb-0.5 last:mb-0">
                <Link href="/" legacyBehavior>
                  <a
                    className={`flex items-center text-sm font-medium transition-colors duration-150 hover:text-slate-800 ${
                      pathname === "/videos"
                        ? "text-indigo-600"
                        : "text-slate-400"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="flex-shrink-0 w-6 h-6 text-slate-400"
                    >
                      <path
                        fill="currentColor"
                        d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,10.84 21.79,9.69 21.39,8.61L19.79,10.21C19.93,10.8 20,11.4 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.6,4 13.2,4.07 13.79,4.21L15.4,2.6C14.31,2.21 13.16,2 12,2M19,2L15,6V7.5L12.45,10.05C12.3,10 12.15,10 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.85 14,11.7 13.95,11.55L16.5,9H18L22,5H19V2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12H16A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8V6Z"
                      />
                    </svg>
                    <span
                      className={`ml-4 text-lg transition-opacity duration-500 sidebar-expanded:opacity-100 sidebar-expanded:translate-x-0 ${
                        sidebarExpanded
                          ? "opacity-100 translate-x-0"
                          : "sm:opacity-100 lg:opacity-0"
                      }`}
                    >
                      Archery
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
