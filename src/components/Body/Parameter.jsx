import React from "react";
import New_Nav from "../Header/New_Nav";
import Panel_header from "../Header/Panel_header";

function Parameter() {
  return (
    <>
      <div>
        <New_Nav />
      </div>
      <div>
        <Panel_header>
          <main id="content" className="flex-1 p-6 lg:px-12 lg:py-24">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between ">
                <div className="text-[20px] underline font-semibold">
                  Select Parameters
                </div>
                <div className="ml-6">
                  <div className="">
                    <select name="" id="" className="bg-[#dbdbdb]  p-2">
                      <option value="" className="bg-white">
                        Types
                      </option>
                      <option value="" className="bg-white">
                        Video
                      </option>
                      <option value="" className="bg-white">
                        News
                      </option>
                      <option value="" className="bg-white">
                        Webinar
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="md:flex bg-[#dbdbdb] mt-6 justify-between items-center p-2">
                <div className="font-semibold ">Percentage (%)</div>
                <div>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="h-[40px] p-2 w-[88px]"
                    placeholder="100%"
                  />
                </div>
              </div>
            </div>
          </main>
        </Panel_header>
      </div>
    </>
  );
}

export default Parameter;
