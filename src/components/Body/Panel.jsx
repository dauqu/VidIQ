import React from "react";
import New_Nav from "../Header/New_Nav";
import { CiImageOn } from "react-icons/ci";
import { BsImages } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import Panel_header from "../Header/Panel_header";
function Panel() {
  return (
    <>
      <>
        <New_Nav />
      </>
      <Panel_header>
        <main id="content" className="flex-1 p-6 lg:px-12 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-[20px] underline font-semibold">
              Enter your file here.
            </div>
            <div className="px-4 py-6 sm:px-0">
              <div className="flex items-center flex-col justify-center border-4 border-dashed border-gray-200 rounded-lg h-96">
                <CiImageOn size={150} color="gray" />
                <div className="md:text-[22px] text-[18px] font-semibold">
                  You can upload your video here.
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="md:w-[70%] w-[70%]">
                  <input
                    type="file"
                    name=""
                    id=""
                    className="mt-6 bg-[#f3f2f2] hover:bg-[#e6e6e6] w-full p-2 cursor-pointer"
                  />
                </div>
                <div className="md:w-[25%] w-[25%]">
                  <button className="mt-6 flex font-semibold items-center justify-center bg-[#f3f2f2] hover:bg-[#e6e6e6] w-full p-2 cursor-pointer">
                   Upload <BiImageAdd size={27} color="gray" className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </Panel_header>
    </>
  );
}

export default Panel;
