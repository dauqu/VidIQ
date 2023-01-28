import React, { useState } from "react";
import New_Nav from "../Header/New_Nav";
import { CiImageOn } from "react-icons/ci";
import { BsImages } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import Panel_header from "../Header/Panel_header";
import axios from "axios";
import { API } from "../Constant/API";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addVideos } from "../../reducers/video";

function Panel() {
  const [successnotify, setSuccessnotify] = useState(false);
  const dispatch = useDispatch();

  const notfiysuccess = () => {
    toast.success("Video Uploaded", {
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

  const [file, setFile] = React.useState(null);

  const handleVideoUpload = (e) => {
    e.preventDefault();
    dispatch(addVideos(file));
    // const formData = new FormData();
    // formData.append("video", file);

    // console.log(formData);

    // axios
    //   .post(`${API}/upload/uploadVideo`, formData)
    //   .then((res) => {
    //     console.log(res);
    //     setSuccessnotify(true);
    //     notfiysuccess();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
              Enter your file here.
            </div>
            <div className="px-4 py-6 sm:px-0">
              <div className="flex items-center flex-col justify-center border-4 border-dashed border-gray-200 rounded-lg h-96">
                <CiImageOn size={150} color="gray" />
                <div className="md:text-[22px] text-[18px] font-semibold">
                  You can upload your video here.
                </div>
              </div>

              <form onSubmit={(e) => handleVideoUpload(e)}>
                <div className="flex items-center justify-between">
                  <div className="md:w-[70%] w-[70%]">
                    <input
                      type="file"
                      name="file"
                      id=""
                      onChange={(e) => setFile(e.target.files[0])}
                      className="mt-6 bg-[#f3f2f2] hover:bg-[#e6e6e6] w-full p-2 cursor-pointer"
                    />
                  </div>
                  <div className="md:w-[25%] w-[25%]">
                    <button
                      onSubmit={(e) => handleVideoUpload(e)}
                      className="btn border-none text-black mt-6 flex font-semibold items-center justify-center bg-[#f3f2f2] hover:bg-[#e6e6e6] w-full p-2 cursor-pointer"
                    >
                      Upload{" "}
                      <BiImageAdd size={27} color="gray" className="ml-2" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* /End replace */}
          </div>
        </main>
        {successnotify ? (
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
    </>
  );
}

export default Panel;
