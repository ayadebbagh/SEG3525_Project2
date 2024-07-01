import pinkFooter from "../assets/images/footerPink.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import tiktok from "../assets/images/tiktok.png";
import twitter from "../assets/images/twitter.png";
import Navbar from "../components/navBar.jsx";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="bg-lightPink w-full h-screen">
        <div className="flex justify-between items-start pt-4 px-4 overflow-hidden"></div>
      </div>
      <div
        className="bg-beige w-screen flex justify-center items-center relative overflow-hidden"
        style={{ height: "350px" }}
      >
        <img
          src={pinkFooter}
          alt=""
          className="absolute w-full h-full object-cover"
          style={{ top: "5px" }}
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
            <div className="absolute bottom-0 text-center">
              <div className=" text-red font-Texterius text-md md:text-xl lg:text-2xl mt-4 w-full">
                TSP
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Homepage;
