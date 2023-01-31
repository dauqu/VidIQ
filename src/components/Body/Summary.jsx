import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import New_Nav from "../Header/New_Nav";
import Panel_header from "../Header/Panel_header";
import round from "../assets/images/round.gif";
function Summary() {
  const { state } = useLocation();

  //Check if the state is not null
  const input = state !== null ? state.input : null;
  const percent = state !== null ? state.percent : null;

  const [loading, setLoading] = useState(false);
  const handleloading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <>
      {loading ? (
        <>
          <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
            <img src={round} alt="loading" />
          </div>
        </>
      ) : (
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
        "video": "${input}",
        "percentage": ${percent},
     }
  }
}`}
                    </code>
                  </pre>
                </div>

                <button
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    padding: "15px 32px",
                    textAlign: "center",
                    textDecoration: "none",
                    marginTop: "20px",
                  }}
                  onClick={handleloading}
                >
                  Analyze
                </button>
              </div>
            </main>
          </Panel_header>
        </div>
      )}
    </>
  );
}

export default Summary;
