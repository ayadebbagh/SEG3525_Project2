import React from "react";
import ProfilePicture from "/images/profilepic1.jpeg";
import RecentProject1 from "/images/community5.jpeg";
import RecentProject2 from "/images/community6.jpeg";
import RecentProject3 from "/images/community7.jpeg"; // Add more project images
import RecentProject4 from "/images/community8.jpeg";
import { PlusIcon } from "@heroicons/react/solid"; // Import the PlusIcon from Heroicons React v2
import RedFooter from "../components/redFooter";

const ProfilePage = () => {
  return (
    <>
      <div className="bg-beige p-6 min-h-screen relative">
        {/* Top Section: Profile Info */}
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={ProfilePicture}
            alt="@MilaMeow"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <div className="text-red font-Texterius text-2xl">@MilaMeow</div>
            <div className="text-red font-Texterius text-lg">Ottawa, ON</div>
          </div>
        </div>

        {/* Bottom Section: Split into two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column: Progress and Help Sections */}
          <div className="flex flex-col space-y-6">
            {/* Progress Section */}
            <div className="bg-lightPink p-4 rounded-lg shadow-md">
              <div className="text-red font-Texterius text-2xl mb-4">
                Progress
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-red font-Texterius text-base mb-1">
                    Crochet dress
                  </div>
                  <div className="w-full bg-beige h-5 rounded-lg overflow-hidden">
                    <div className="bg-red h-full w-3/5"></div>
                  </div>
                </div>
                <div>
                  <div className="text-red font-Texterius text-base mb-1">
                    Jewelry tray
                  </div>
                  <div className="w-full bg-beige h-5 rounded-lg overflow-hidden">
                    <div className="bg-red h-full w-4/5"></div>
                  </div>
                </div>
                <div>
                  <div className="text-red font-Texterius text-base mb-1">
                    Clay keychain charms
                  </div>
                  <div className="w-full bg-beige h-5 rounded-lg overflow-hidden">
                    <div className="bg-red h-full w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="bg-lightPink p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="text-red font-Texterius text-center">
                <div className="text-3xl">Need help starting out?</div>
                <div className="text-base">
                  Schedule a 1-on-1 virtual meeting with one of our craft
                  experts to guide you on your journey!
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <input
                  type="date"
                  className="p-2 bg-beige rounded-lg border font-Texterius text-red"
                />
                <input
                  type="time"
                  className="p-2 rounded-lg bg-beige border font-Texterius text-red"
                />
                <button className="bg-red text-beige px-4 py-2 font-Texterius rounded-lg">
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Recent Projects Section */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <img
                src={RecentProject1}
                alt="Recent Project 1"
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src={RecentProject2}
                alt="Recent Project 2"
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src={RecentProject3}
                alt="Recent Project 3"
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src={RecentProject4}
                alt="Recent Project 4"
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Plus icon for adding new posts */}
        <button
          className="absolute bottom-12 lg:bottom-24 right-6 lg:right-12 bg-red text-white rounded-full p-2 shadow-md hover:bg-opacity-80 focus:outline-none"
          aria-label="Add New Post"
        >
          <PlusIcon className="h-8 lg:h-12 w-8 lg:w-12" />
        </button>
      </div>

      {/* RedFooter Component */}
      <RedFooter />
    </>
  );
};

export default ProfilePage;
