import React from "react";
import { useLocation } from "react-router-dom";
import New_Nav from "../Header/New_Nav";
import Panel_header from "../Header/Panel_header";

function Summary() {

  const { state } = useLocation();

  //Check if the state is not null
  const input = state !== null ? state.input : null;
  const percent = state !== null ? state.percent : null;








  return (
    <div>
      <div>
        <New_Nav />
      </div>
      <Panel_header>
        <main id="content" className="flex-1 p-6 lg:px-12 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-[20px] underline font-semibold">
              Here is the summary of your file.
            </div>
            <div className="mt-6">
              <pre>
                <code>
                  {`{
  "video": {
     "summary": {
        "input": "${input}",
        "percent": ${percent},
     }
  }
}`}
                </code>
              </pre>
            </div>
            <button style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              marginTop: "20px",
            }} onClick={
              () => {
                //Shoe loading animation
                
              }
            }>
              Analyze
            </button>
          </div>
        </main>
      </Panel_header>
    </div>
  );
}

export default Summary;
