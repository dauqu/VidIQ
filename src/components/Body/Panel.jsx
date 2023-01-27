import React from "react";
import New_Nav from "../Header/New_Nav";
import { CiImageOn } from "react-icons/ci";
function Panel() {
  return (
    <div>
      <div className="">
        <New_Nav />
      </div>
      <div className="relative  min-h-screen md:flex" data-dev-hint="container">
        <input type="checkbox" id="menu-open" className="hidden " />
        <label
          htmlFor="menu-open"
          className="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden"
          data-dev-hint="floating action button"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <header
          className="bg-gray-600 mt-12   text-gray-100 flex justify-between md:hidden"
          data-dev-hint="mobile menu bar"
        >
          <a
            href="#"
            className="block  p-4 text-white font-bold whitespace-nowrap truncate"
          >
            Your App is cool
          </a>
          <label
            htmlFor="menu-open"
            id="mobile-menu-button"
            className="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md"
          >
            <svg
              id="menu-open-icon"
              className="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              id="menu-close-icon"
              className="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
        </header>
        <aside
          id="sidebar"
          className="bg-gray-800 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
          data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
        >
          <div
            className="flex flex-col space-y-6"
            data-dev-hint="optional div for having an extra footer navigation"
          >
            <a
              href="#"
              className="text-white flex items-center space-x-2 px-4 py-12  "
              title="Your App is cool"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span className="text-2xl font-extrabold whitespace-nowrap truncate">
                VidIQ
              </span>
            </a>
            <nav data-dev-hint="main navigation">
              <a
                href="#"
                className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
                <span>Upload File</span>
              </a>
            </nav>
          </div>
        </aside>
        <main id="content" className="flex-1 p-6 lg:px-12 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-[20px] underline font-semibold">
              Enter your file here.
            </div>
            <div className="px-4 py-6 sm:px-0">
              <div className="flex items-center justify-center border-4 border-dashed border-gray-200 rounded-lg h-96">
                <CiImageOn size={150} color="gray" />
              </div>
              <div>
                <input type="file" name="" id="" className="mt-6 bg-[#f3f2f2] w-full p-2 cursor-pointer" />
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Panel;
