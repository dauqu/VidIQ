import React from "react";
import New_Nav from "../Header/New_Nav";
import Panel_header from "../Header/Panel_header";

function Download() {
  return (
    <div>
      <div>
        <New_Nav />
      </div>
      <Panel_header>
        <main id="content" className="flex-1 p-6 lg:px-12 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-[20px] underline font-semibold">
              Please insert your video here.
            </div>
          </div>
        </main>
      </Panel_header>
    </div>
  );
}

export default Download;
