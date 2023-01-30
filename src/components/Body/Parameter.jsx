import React from "react";
import New_Nav from "../Header/New_Nav";
import Panel_header from "../Header/Panel_header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
function Parameter() {
  const [minusToast, setMinusToast] = useState(false); // state to show toast when input is negative
  const [greaterToast, setGreaterToast] = useState(false); // state to show toast when input is greater than 100

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
    toast.error("Please enter a number less than 100", {
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
                    min={0}
                    max={100}
                    onChange={(e) => {
                      validation(e);
                    }}
                  />
                </div>
              </div>
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
