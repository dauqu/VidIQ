import React from "react";
import { CiImageOn } from "react-icons/ci";
import { useSelector } from "react-redux";
import New_Nav from "../Header/New_Nav";
import Panel_header from "../Header/Panel_header";

function Download() {
  const { currentVideo } = useSelector((state) => state.video);
  return (
    <div>
      <div>
        <New_Nav />
      </div>
      <Panel_header>
        <main id="content" className="flex-1 p-6 lg:px-12 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-[20px] underline font-semibold">
              You can download your file from here.
            </div>
            <div className="mt-6">
              <div className="flex items-center flex-col justify-center border-4 border-dashed border-gray-200 rounded-lg h-96">
                <CiImageOn size={150} color="gray" />
                <div className="md:text-[22px] text-[18px] font-semibold">
                  Your file will be downloaded from here.
                </div>
                <div>
                  <a
                    href={currentVideo.videoUrl}
                    download
                    target="_blank"
                    className="btn bg-[#2b9dff] border-none font-semibold text-white px-4 py-2 rounded-lg mt-4"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Panel_header>
    </div>
  );
}

export default Download;
