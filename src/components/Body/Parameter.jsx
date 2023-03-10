import React from "react";
import New_Nav from "../Header/New_Nav";
import Panel_header from "../Header/Panel_header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import round from "../assets/images/round.gif";
import { useNavigate } from "react-router-dom";
import video from "../../reducers/video";
function Parameter() {
  const [minusToast, setMinusToast] = useState(false); // state to show toast when input is negative
  const [greaterToast, setGreaterToast] = useState(false); // state to show toast when input is greater than 100

  const [input, setInput] = useState("");
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [videoAnalyse, setVideoAnalyse] = useState(false);
  const [otherAnalyse, setOtherAnalyse] = useState(false);

  const [sound, setSound] = useState(false);
  const [download, setDownload] = useState(false);
  const navigate = useNavigate();

  const notfiyminus = () => {
    toast.error("Please enter a positive number", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const notfiyGreater = () => {
    toast.error("Please enter a number less than 100 Or equals to 100 ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // code to prevent input type from negative and not more than 100 digits
  const validation = (e) => {
    if (e.target.value < 0) {
      e.target.value = 0;
      setMinusToast(true);
      notfiyminus();
    }
    if (e.target.value > 100) {
      e.target.value = 100;
      setGreaterToast(true);
      notfiyGreater();
    }
  };

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
                    <select
                      name=""
                      id=""
                      className="btn   border-none  hover:bg-[#853ab4] text-[17px]  text-white bg-[#853ab4]  p-2"
                      onChange={(e) => {
                        setInput(e.target.value);
                      }}
                    >
                      <option
                        value=""
                        className="bg-[#1f2937]   text-[15px]  font-semibold  text-left "
                      >
                        Types
                      </option>
                      <option
                        value="video"
                        className="bg-[#1f2937] text-[15px]  font-semibold mt-4 text-left"
                      >
                        Video
                      </option>
                      <option
                        value="news"
                        className="bg-[#1f2937] text-[15px]  font-semibold mt-4 text-left"
                      >
                        News
                      </option>
                      <option
                        value="webinar"
                        className="bg-[#1f2937] text-[15px]  font-semibold mt-4 text-left"
                      >
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
                    className="input input-bordered   max-w-xs h-[40px] p-2 w-[128px]"
                    placeholder="100%"
                    min={0}
                    max={100}
                    required
                    onChange={(e) => {
                      validation(e);
                      setPercent(e.target.value);
                    }}
                  />
                </div>
              </div>
              <button
                className="btn mt-8  "
                style={{
                  backgroundColor: "#853ab4",
                  color: "white",
                  padding: "14px 20px",

                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => {
                  if (percent > 0 && input !== "") {
                    if (input == "video") {
                      setLoading(true);

                      setTimeout(() => {
                        setVideoAnalyse(true);
                      }, [1000]);

                      setTimeout(() => {
                        setVideoAnalyse(false);
                        setSound(true);
                      }, [2000]);
                    } else {
                      setOtherAnalyse(true);

                      // setSound(true);
                      setTimeout(() => {
                        setSound(true);
                      }, [1000]);

                      setTimeout(() => {
                        setSound(false);
                        setVideoAnalyse(true);
                      }, [1500]);

                      setTimeout(() => {
                        setSound(false);
                        setVideoAnalyse(false);
                        setDownload(true);
                      }, [2000]);
                    }
                    setTimeout(() => {
                      navigate(
                        `${input != "video" ? "/summary" : "/download"}`,
                        {
                          state: {
                            input: input,
                            percent: percent,
                          },
                        }
                      );
                    }, [3000]);

                    //Pass data to next page
                  } else {
                    toast.error("Please enter a positive number", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    });
                  }
                }}
              >
                Submit Parameters
              </button>
              {loading ? (
                <>
                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <img src={round} alt="" className="w-1/2 m-auto" />
                    </div>
                    <div>
                      {sound ? (
                        <>
                          <p className="text-[20px] font-semibold">
                            Analyzing the Sound
                          </p>
                        </>
                      ) : null}
                      {videoAnalyse ? (
                        <>
                          <p className="text-[20px] font-semibold">
                            Analyzing the Video
                          </p>
                        </>
                      ) : null}
                    </div>
                  </div>
                </>
              ) : null}
              {otherAnalyse ? (
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <img src={round} alt="" className="w-1/2 m-auto" />
                  </div>
                  <div>
                    {sound ? (
                      <>
                        <p className="text-[20px] font-semibold">
                          Analyzing the Sound
                        </p>
                      </>
                    ) : null}
                    {videoAnalyse ? (
                      <>
                        <p className="text-[20px] font-semibold">
                          Analyzing the Video
                        </p>
                      </>
                    ) : null}
                    {download ? (
                      <>
                        <p className="text-[20px] font-semibold">
                          Preparing to download the Video
                        </p>
                      </>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </main>
          {minusToast ? (
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          ) : null}
          {greaterToast ? (
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          ) : null}
        </Panel_header>
      </div>
    </>
  );
}

export default Parameter;
