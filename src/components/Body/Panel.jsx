import React, { useEffect, useState } from "react";
import New_Nav from "../Header/New_Nav";
import { CiImageOn } from "react-icons/ci";
import { BsImages } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import Panel_header from "../Header/Panel_header";
import axios from "axios";
import { API } from "../Constant/API";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { addVideos, getVideos } from "../../reducers/video";
import loadingGIF from "../assets/images/round.gif";
import { useNavigate } from "react-router-dom";
function Panel() {
  const [successnotify, setSuccessnotify] = useState(false);
  const { videos, loading, message } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (message == "success") {
      toast.success(message);
      //Navigate to the next page after 2 seconds
      setTimeout(() => {
        navigate("/parameter");
      }, 2000);
    } else if (message == "error") {
      toast.error(message);
    }
  }, [message]);

  useEffect(() => {
    dispatch(getVideos());
  }, []);

  const [file, setFile] = React.useState(null);

  const handleVideoUpload = (e) => {
    e.preventDefault();
    dispatch(addVideos(file));
  };

  return (
    <>
      <>
        <New_Nav />
      </>
      <Panel_header>
        <main id="content" className="flex-1 p-6 lg:px-12 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-[20px] underline font-semibold">
              Please insert your video here.
            </div>
            <div className="px-4 py-6 sm:px-0">
              {file ? (
                <>
                  {" "}
                  <div className="flex items-center h-auto flex-col justify-center border-4 border-dashed border-gray-200 rounded-lg   w-auto">
                    <div>
                      {
                        // code to  display the uploaded video here
                        file && (
                          <video src={URL.createObjectURL(file)} controls />
                        )
                      }
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className="flex items-center flex-col justify-center border-4 border-dashed border-gray-200 rounded-lg h-96">
                    <CiImageOn size={150} color="gray" />
                    <div className="md:text-[22px] text-[18px] font-semibold">
                      You can upload your video here.
                    </div>
                  </div>
                </>
              )}

              <form onSubmit={(e) => handleVideoUpload(e)}>
                <div className="flex items-center justify-between">
                  <div className="md:w-[70%] w-[70%]">
                    <input
                      required
                      type="file"
                      name="file"
                      id=""
                      onChange={(e) => setFile(e.target.files[0])}
                      className="mt-6 bg-[#dbdbdb] hover:bg-[#e6e6e6] w-full p-2  cursor-pointer"
                    />
                  </div>
                  <div className="md:w-[25%] hover:text-white w-[25%]">
                    {loading ? (
                      <button

                        style={{
                          backgroundColor: "#853ab4!important",
                          color: "white",
                        }}
                        onSubmit={(e) => handleVideoUpload(e)}
                        className="btn border-none  cursor-no-drop  bg-[#853ab4]  flex items-center     mt-6  font-semibold  justify-center    w-full p-2    text-white"
                      >
                        <img
                          src={loadingGIF}
                          alt=""
                          className="w-[33px] h-[33px]"
                        />
                        Loading..
                      </button>
                    ) : (
                      <button
                        onSubmit={(e) => handleVideoUpload(e)}
                        className="btn border-none   text-black mt-6 flex font-semibold items-center justify-center bg-[#dbdbdb] hover:bg-[#853ab4] w-full p-2  cursor-pointer hover:text-white"
                      >
                        Upload{" "}
                        <BiImageAdd
                          size={27}
                          className="ml-2 hover:text-white "
                        />
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
            {/* /End replace */}
          </div>
        </main>
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
      </Panel_header>
    </>
  );
}

export default Panel;
