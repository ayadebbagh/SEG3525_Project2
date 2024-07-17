import ProfilePicture from "/images/profilepic1.jpeg";
import RecentProject1 from "/images/community5.jpeg";
import RecentProject2 from "/images/community6.jpeg";
import RecentProject3 from "/images/community7.jpeg";
import RecentProject4 from "/images/community8.jpeg";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";
import RedFooter from "../components/redFooter";
import { useLanguage } from "../components/LanguageProvider";
import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const AddPostPopup = ({ onClose, onPost }) => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      onPost(fileUrl, caption);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-lightPink p-6 rounded-lg shadow-md">
        <h2 className="text-red font-Texterius text-2xl mb-4">Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-4"
          />
          <textarea
            value={caption}
            onChange={handleCaptionChange}
            placeholder="Write a caption..."
            className="w-full p-2 mb-4 rounded-lg border font-Texterius text-red"
          ></textarea>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-beige text-red px-4 py-2 rounded-lg mr-2 font-Texterius"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-red text-beige px-4 py-2 rounded-lg font-Texterius"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const { language } = useLanguage();
  const [time, setTime] = useState("09:00");
  const [minDate, setMinDate] = useState("");
  const [minTime, setMinTime] = useState("");
  const [maxTime, setMaxTime] = useState("");
  const [date, setDate] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [recentProjects, setRecentProjects] = useState([
    RecentProject1,
    RecentProject2,
    RecentProject3,
    RecentProject4,
  ]);

  const notificationSuccess = {
    EN: "Meeting successfully scheduled!",
    FR: "Réunion programmée avec succès !",
  };

  const [progressBars, setProgressBars] = useState([
    { name: "Crochet dress", progress: 60 },
    { name: "Jewelry tray", progress: 80 },
    { name: "Clay keychain charms", progress: 33 },
  ]);

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    const newDate = new Date();
    newDate.setHours(parseInt(selectedTime.split(":")[0], 10));
    newDate.setMinutes(parseInt(selectedTime.split(":")[1], 10));

    if (newDate.getHours() < 9) {
      setTime("09:00");
    } else if (newDate.getHours() >= 18) {
      setTime("18:00");
    } else {
      setTime(selectedTime);
    }
  };

  useEffect(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    setMinDate(`${yyyy}-${mm}-${dd}`);
    setMinTime("09:00");
    setMaxTime("18:00");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { date, time });
    setDate("");
    setTime("09:00");
    setShowNotification(true);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const handleAddProgress = (index) => {
    const updatedProgressBars = [...progressBars];
    updatedProgressBars[index].progress = Math.min(
      100,
      updatedProgressBars[index].progress + 10
    );
    setProgressBars(updatedProgressBars);
  };

  const handleRemoveProgress = (index) => {
    const updatedProgressBars = [...progressBars];
    updatedProgressBars[index].progress = Math.max(
      0,
      updatedProgressBars[index].progress - 10
    );
    setProgressBars(updatedProgressBars);
  };

  const handleAddPostClick = () => {
    setShowPopup(true);
  };

  const handleNewPost = (fileUrl, caption) => {
    setRecentProjects((prevProjects) => [fileUrl, ...prevProjects.slice(0, 3)]);
  };

  return (
    <>
      <div className="bg-beige p-6 min-h-screen relative">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-6">
            <div className="bg-lightPink p-4 rounded-lg shadow-md">
              <div className="text-red font-Texterius text-2xl mb-4">
                {language === "EN" ? "Progress" : "Progrès"}
              </div>
              <div className="space-y-4">
                {progressBars.map((item, index) => (
                  <div key={index}>
                    <div className="text-red font-Texterius text-base mb-1">
                      {language === "EN" ? item.name : item.name}
                    </div>
                    <div className="flex items-center">
                      <div className="w-full bg-beige h-5 rounded-lg overflow-hidden">
                        <div
                          className="bg-red h-full"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center space-x-2 ml-2">
                        <button
                          onClick={() => handleRemoveProgress(index)}
                          className="text-red hover:text-red-dark focus:outline-none"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleAddProgress(index)}
                          className="text-green hover:text-green-dark focus:outline-none"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-lightPink p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="text-red font-Texterius text-center">
                <div className="text-3xl">
                  {language === "EN"
                    ? "Need help starting out?"
                    : "Besoin d'aide pour commencer?"}
                </div>
                <div className="text-base">
                  {language === "EN"
                    ? "Schedule a 1-on-1 virtual meeting with one of our craft experts to guide you on your journey!"
                    : "Planifiez une réunion virtuelle en tête-à-tête avec l'un de nos experts en artisanat pour vous guider dans votre parcours!"}
                </div>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                <input
                  type="date"
                  className="p-2 bg-beige rounded-lg border font-Texterius text-red"
                  min={minDate}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <input
                  type="time"
                  className="p-2 rounded-lg bg-beige border font-Texterius text-red"
                  min="09:00"
                  max="18:00"
                  value={time}
                  onChange={handleTimeChange}
                  required
                />
                <button
                  type="submit"
                  className="bg-red text-beige px-4 py-2 font-Texterius rounded-lg"
                >
                  {language === "EN" ? "Submit" : "Soumettre"}
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {recentProjects.map((project, index) => (
              <div key={index}>
                <img
                  src={project}
                  alt={`Recent Project ${index + 1}`}
                  className="w-full h-56 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleAddPostClick}
          className="absolute bottom-12 lg:bottom-24 right-6 lg:right-12 bg-red text-white rounded-full p-2 shadow-md hover:bg-opacity-80 focus:outline-none"
          aria-label="Add New Post"
        >
          <PlusIcon className="h-8 lg:h-12 w-8 lg:w-12" />
        </button>

        {showNotification && (
          <div className="fixed top-4 right-4 bg-red text-lightPink font-Texterius p-4 rounded-lg shadow-md z-50 flex items-center">
            <span className="flex-grow">
              {language === "EN"
                ? notificationSuccess.EN
                : notificationSuccess.FR}
            </span>
            <button onClick={handleCloseNotification}>
              <FaTimes className="text-lightPink" />
            </button>
          </div>
        )}

        {showPopup && (
          <AddPostPopup
            onClose={() => setShowPopup(false)}
            onPost={handleNewPost}
          />
        )}
      </div>

      <RedFooter />
    </>
  );
};

export default ProfilePage;
