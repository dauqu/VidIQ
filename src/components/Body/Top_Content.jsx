import React, { useEffect } from "react";
import bg2 from "../assets/images/bg2.jpg";
import google from "../assets/images/google2.png";
import { BsArrowRightShort, BsCloudDownloadFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../reducers/video";

const Top_Content = () => {
  const { videos } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideos());
  }, []);

  return (
    <div className="LandingPageContent">
      <div className="md:flex justify-between md:w-[80%] m-auto md:mt-36 mt-12 w-full p-4">
        <div className="md:w-[60%] w-full  ">
          <div className="md:w-[100%] m-auto w-full md:text-[40px] text-[23px] font-extrabold  text-black">
            Create recaps and promos
            <br /> by identifying important moments using AI
          </div>
          <div className="md:w-[100%] flex flex-wrap  m-auto w-full md:text-[22px]  text-[17px] font-semibold">
            <div className="card md:m-2  hover:shadow-xl md:mt:0 mt-4 md:w-80  w-72  m-auto bg-[#cea9fe] ">
              <figure className="px-10 pt-10">
                <BsCloudDownloadFill size={50} />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">PromoTrail AI</h2>
                <p>
                  Get output video in any specific resolution without the need
                  of re-filming👍
                </p>
              </div>
            </div>
            <div className="card md:m-2   hover:shadow-xl md:mt:0 mt-4 md:w-80  w-72  m-auto bg-[#fecca9] ">
              <figure className="px-10 pt-10">
                <BsCloudDownloadFill size={50} />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">PromoTrail AI</h2>
                <p>
                  Taking care of script, sound & visual emotion factors to
                  create video highlights👍
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[40%] md:mt-0 mt-8 w-full  ">
          <div className=" m-auto w-full   ">
            <button className="btn flex items-center justify-center w-full border border-[#2B99F9] rounded-full m-auto bg-[#2D3756]  ">
              <div className="w-[17px] mr-2 ">
                <img src={google} alt="" srcset="" />
              </div>
              <div className="  text-[16px] font-semibold text-white">
                Sign up with your Google account
              </div>
            </button>
          </div>
          <div className=" m-auto w-full   ">
            <div className="m-auto text-center mt-4 font-bold">OR</div>
          </div>
          <div className=" m-auto mt-4 text-center w-full   ">
            <input
              type="text"
              className="input input-bordered    border border-[#2B99F9]  text-white font-semibold rounded-full m-auto w-full bg-[#2D3756] p-4"
              placeholder="Enter Email address"
            />
          </div>
          <div className=" m-auto mt-4 text-center w-full   ">
            <input
              type="text"
              className="input input-bordered  border border-[#2B99F9] text-white font-semibold rounded-full m-auto w-full bg-[#2D3756] p-4"
              placeholder="Enter a password"
            />
          </div>
          <div className=" m-auto mt-4 text-center w-full   ">
            <div className="md:w-[70%] w-full m-auto text-[17px] ">
              By signing up, I agree to vidIQ’s <u>Terms of Service</u> and
              <u>Privacy Policy</u>
            </div>
          </div>
          <div className=" m-auto mt-4 text-center w-full   ">
            <button className="btn flex items-center justify-center w-full border bg-[#1f2937] border-[#1f2937] rounded-full m-auto    ">
              <div className="  text-[16px] font-semibold text-white">
                Signup
              </div>
              <div className="w-[17px] mr-2 ">
                <BsArrowRightShort
                  color="white"
                  size={24}
                  // size={24}
                  className="font-bold"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="   md:w-[90%]  m-auto md:mt-36 mt-12 w-full p-4">
        <div className="font-bold md:text-[30px] text-[20px] ">Video's</div>

        <div className="flex flex-wrap md:justify-start justify-center mt-6 p-2">
          {videos.map((video) => (
            <div className="md:w-[300px]    w-[280px] max-h-[280px]  md:m-4 m-2  hover:shadow-slate-800  cursor-pointer  shadow-lg">
              <video controls>
                <source
                  src={video.videoUrl}
                  className="md:w-[300px] md:h-[300px]    w-[280px] max-h-[157px]"
                />
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Top_Content;
