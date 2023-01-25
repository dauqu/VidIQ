import React from "react";
import Navbar from "../Header/Navbar";
import Top_Content from "./Top_Content";
import bg2 from "../assets/images/bg2.jpg";
import Footer from "../Footer/Footer";
function Body() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <Navbar />
        <Top_Content />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Body;
