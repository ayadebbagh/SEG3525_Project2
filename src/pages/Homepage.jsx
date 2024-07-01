import pinkFooter from "../assets/images/footerPink.png";
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
          <div className="flex justify-center items-center w-full px-8">
            <div
              className="text-left mr-8 md:mr-20 lg:mr-20 text-red font-Texterius text-md md:text-xl lg:text-2xl whitespace-nowrap"
              style={{ minWidth: "250px" }}
            >
              Contact us: <br />
              TheSparkCo@gmail.com <br />
              (613) 123-4567
            </div>
            <div
              className="text-left ml-8 md:ml-20 lg:ml-20 text-red font-Texterius text-sm md:text-xl lg:text-2xl whitespace-nowrap"
              style={{ minWidth: "250px" }}
            >
              Made with love by <br />
              The Spark Collective team!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Homepage;
