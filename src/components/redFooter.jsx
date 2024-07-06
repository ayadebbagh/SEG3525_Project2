import React from "react";
import redFooter from "/images/redFooter.png";
import facebook from "/images/facebook.png";
import instagram from "/images/instagram.png";
import tiktok from "/images/tiktok.png";
import twitter from "/images/twitter.png";

const RedFooter = () => {
  return (
    <div
      className="bg-lightPink w-screen flex justify-center items-center relative overflow-hidden"
      style={{ height: "350px" }}
    >
      <img
        src={redFooter}
        alt=""
        className="absolute w-full h-full object-cover"
        style={{ top: "0px" }}
      />
      <div className="flex justify-center items-center w-full absolute top-0 left-0 right-0 bottom-0">
        <div className="flex flex-col justify-center items-center h-full w-full px-8">
          <div className="flex justify-center items-center flex-wrap">
            <div
              className="text-left mr-8 md:mr-20 lg:mr-20 text-red font-Texterius text-md md:text-xl lg:text-2xl whitespace-nowrap mb-4 md:mb-4 pl-9 pr-9"
              style={{
                minWidth: "250px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Contact us: <br />
              TheSparkCo@gmail.com <br />
              (613) 123-4567
            </div>
            <div
              className="text-left md:ml-20 lg:ml-20 text-red font-Texterius text-md md:text-xl lg:text-2xl whitespace-nowrap mb-4 md:mb-4 pl-9"
              style={{
                minWidth: "250px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Made with love by <br />
              The Spark Collective team!
            </div>
          </div>
          <div className=" absolute bottom-20 flex justify-center items-center space-x-4">
            <img src={instagram} className="w-7 h-7" />
            <img src={facebook} className="w-7 h-7" />
            <img src={tiktok} className="w-7 h-7" />
            <img src={twitter} className="w-7 h-7" />
          </div>
          <div className="absolute bottom-10 text-center">
            <div className=" text-red font-Texterius text-md md:text-xl lg:text-2xl mt-4 w-full">
              TSC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RedFooter;
