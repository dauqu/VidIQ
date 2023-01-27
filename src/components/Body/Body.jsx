import React from "react";
import Top_Content from "./Top_Content";
import bg2 from "../assets/images/bg2.jpg";
import Footer from "../Footer/Footer";
import New_Nav from "../Header/New_Nav";
function Body() {
  return (
    <div>
      <div
      // style={{
      //   backgroundColor: "white",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   height: "100vh",
      // }}
      >
        <New_Nav />
        <Top_Content />
      </div>
      <div>
        <Footer /></div>
    </div>
  );
}

export default Body;
