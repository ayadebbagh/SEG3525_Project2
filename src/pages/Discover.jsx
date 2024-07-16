import React, { useState } from "react";
import RedFooter from "../components/redFooter";
import ProjectCard from "../components/projectCard";
import Filter from "../components/filter";
import discoverbg from "/images/bgDiscover.png";
import Announcement from "../components/annoucement";
import Challenge from "../components/challenge";
import { useLanguage } from "../components/LanguageProvider";

const projects = [
  {
    image: "/images/discover8.jpeg",
    titleEN: "Cake jewelry box",
    titleFR: "Boîte à bijoux en gâteau",
    link: "#",
    skillLevel: "expert",
    category: "jewelry",
  },
  {
    image: "/images/discover1.jpeg",
    titleEN: "Clay pendants",
    titleFR: "Pendentifs en argile",
    link: "#",
    skillLevel: "intermediate",
    category: "jewelry",
  },
  {
    image: "/images/discover2.jpeg",
    titleEN: "Clay bow magnets",
    titleFR: "Aimants en forme de nœud d'argile",
    link: "#",
    skillLevel: "beginner",
    category: "air-dry clay",
  },
  {
    image: "/images/discover3.png",
    titleEN: "Flower rugs",
    titleFR: "Tapis de fleurs",
    link: "#",
    skillLevel: "expert",
    category: "tufting",
  },
  {
    image: "/images/discover10.jpeg",
    titleEN: "Beaded anklet",
    titleFR: "Bracelet de cheville perlé",
    link: "#",
    skillLevel: "beginner",
    category: "jewelry",
  },
  {
    image: "/images/discover5.jpeg",
    titleEN: "Picnic blanket",
    titleFR: "Couverture de pique-nique",
    link: "#",
    skillLevel: "intermediate",
    category: "crochet",
  },
  {
    image: "/images/discover6.jpeg",
    titleEN: "Wall decor",
    titleFR: "Décoration murale",
    link: "#",
    skillLevel: "intermediate",
    category: "air-dry clay",
  },
  {
    image: "/images/discover7.jpeg",
    titleEN: "Miffy charms",
    titleFR: "Charms Miffy",
    link: "#",
    skillLevel: "intermediate",
    category: "polymer-clay",
  },
  {
    image: "/images/discover9.jpeg",
    titleEN: "Martini scarf",
    titleFR: "Foulard Martini",
    link: "#",
    skillLevel: "expert",
    category: "crochet",
  },
];

function Discover() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const { language } = useLanguage();

  // Function to get the correct title based on language
  const getTranslatedTitle = (project) => {
    return language === "EN" ? project.titleEN : project.titleFR;
  };

  const filteredProjects = projects.filter(
    (project) =>
      getTranslatedTitle(project)
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (category ? project.category === category : true) &&
      (skillLevel ? project.skillLevel === skillLevel : true)
  );

  const project = {
    EN: "This week's featured projects and announcements",
    FR: "Projets et annonces en vedette de la semaine",
  };
  const moreProjects = {
    EN: "Explore more projects",
    FR: "Explorer plus de projets",
  };

  return (
    <>
      <div className="bg-beige w-full flex flex-col items-center space-y-5 relative">
        <div className="w-full p-6 text-left">
          <div className="text-red font-Texterius text-4xl">
            {language === "EN" ? project.EN : project.FR}
          </div>
        </div>
        <div className="flex flex-col w-full md:w-3/4 lg:w-5/6 xl:w-11/12 mb-8 space-y-4">
          {/* First row */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="relative w-full lg:w-2/3">
              <iframe
                className="w-full h-72 md:h-96 lg:h-128 relative z-10"
                src="https://www.youtube.com/embed/TlBMcexUwjE?si=HpJf35lY-Rq3iNOZ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-full lg:w-1/3">
              <Announcement />
            </div>
          </div>

          {/* Second row */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="w-full lg:w-1/3">
              <Challenge />
            </div>
            <div className="relative w-full lg:w-2/3">
              <iframe
                className="w-full h-72 md:h-96 lg:h-128 relative z-10"
                src="https://www.youtube.com/embed/9_PLPLiZ99s?si=98XkSVXgtp0iuKq0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        {/* Rest of your code remains the same */}

        <div className="w-full p-6 flex flex-col items-start space-y-4">
          <h2 className="text-red font-Texterius text-left text-4xl mb-4">
            {language === "EN" ? moreProjects.EN : moreProjects.FR}
          </h2>
          <Filter
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            skillLevel={skillLevel}
            setSkillLevel={setSkillLevel}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-items-center">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                title={getTranslatedTitle(project)}
              />
            ))}
          </div>
        </div>
      </div>
      <RedFooter />
    </>
  );
}

export default Discover;
