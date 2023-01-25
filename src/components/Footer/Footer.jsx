import React from "react";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import logo from "../assets/images/logo.svg";

function Footer() {
  return (
    <div className="bg-[#121521]">
      <div className="md:w-[80%] w-full m-auto pt-[50px]">
        <div className="md:flex justify-around    py-[20px]">
          <div className="w-[350px]">
            <div>
              <img src={logo} alt="" className="md:w-[50%] " />
            </div>
            <div className="mt-12 text-white text-[17px]">
              Our mission is to empower every video creator with the insights
              and inspiration they need to grow. That’s why we’re obsessed with
              providing an intelligent mix of technological and human expertise
              that boosts your productivity and gets you more views. Whatever
              your next challenge, we’ll shine a light on the way forward
            </div>
            <div className="mt-12 text-white text-[17px]">
              © 2023 vidIQ. All Rights Reserved.
            </div>
          </div>
          <div className="w-[450px] flex  justify-evenly ">
            <div className="md:w-[30%]">
              <div className="font-bold text-[20px] text-white">Company</div>
              <div className="mt-2 text-[18px] text-[#656C77]">Careers</div>
              <div className="mt-2 text-[18px] text-[#656C77]">Careers</div>
              <div className="mt-2 text-[18px] text-[#656C77]">Careers</div>
            </div>
            <div className="md:w-[30%]">
              <div className="font-bold text-[20px] text-white">Product</div>
              <div className="mt-2 text-[18px] text-[#656C77]">Affiliates</div>
              <div className="mt-2 text-[18px] text-[#656C77]">
                Brand Solutions
              </div>
              <div className="mt-2 text-[18px] text-[#656C77]">
                Agency Solutions
              </div>
              <div className="mt-2 text-[18px] text-[#656C77]">
                MCN Solutions
              </div>
              <div className="mt-2 text-[18px] text-[#656C77]">
                Browser Extension
              </div>
              <div className="mt-2 text-[18px] text-[#656C77]">
                vidIQ Academy
              </div>
            </div>
            <div className="md:w-[30%]">
              <div className="font-bold text-[20px] text-white">Other</div>
              <div className="mt-2 text-[18px] text-[#656C77]">Contact</div>
              <div className="mt-2 text-[18px] text-[#656C77]">Terms</div>
              <div className="mt-2 text-[18px] text-[#656C77]">Privacy</div>
              <div className="mt-2 text-[18px] text-[#656C77]">Support</div>
              <div className="mt-2 text-[18px] text-[#656C77]">
                How To Get More YouTube Views
              </div>
            </div>
          </div>
          <div className="w-[350px]  ">
            <div className="font-bold text-[20px] text-white">
              Connect with us
            </div>
            <div className="mt-4 text-white text-[19px]">
              Call Sales 888-998-VIDIQ (8434)
            </div>
            <div className="mt-12 flex flex-wrap text-white text-[17px]">
              <div className="m-4 cursor-pointer">
                <AiFillYoutube size={30} />
              </div>
              <div className="m-4 cursor-pointer">
                <AiFillFacebook size={30} />
              </div>
              <div className="m-4 cursor-pointer">
                <AiOutlineInstagram size={30} />
              </div>
              <div className="m-4 cursor-pointer">
                <AiOutlineTwitter size={30} />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap p-8">
          <div className="m-4 text-white text-[18px] cursor-pointer">English</div>
          <div className="m-4 text-white text-[18px] cursor-pointer">Français</div>
          <div className="m-4 text-white text-[18px] cursor-pointer">Español</div>
          <div className="m-4 text-white text-[18px] cursor-pointer">Русский</div>
          <div className="m-4 text-white text-[18px] cursor-pointer">Português</div>
          <div className="m-4 text-white text-[18px] cursor-pointer">Türkçe</div>
          <div className="m-4 text-white text-[18px] cursor-pointer">Tiếng Việt</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
