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
              <div className="text-[20px] underline font-semibold">
                Please insert your video here.
              </div>
              <div className="md:flex bg-[#dbdbdb] mt-6 justify-between items-center p-2">
                <div className="font-semibold ">Percentage</div>
                <div>
                  <select name="" id="" className="  p-2">
                    <option value="">Select</option>
                    <option value="">10%</option>
                    <option value="">20%</option>
                    <option value="">30%</option>
                    <option value="">40%</option>
                    <option value="">50%</option>
                    <option value="">60%</option>
                    <option value="">70%</option>
                    <option value="">80%</option>
                    <option value="">90%</option>
                    <option value="">100%</option>
                  </select>
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
