import React, { useState } from "react";
import RedFooter from "../components/redFooter";
import ProjectCard from "../components/projectCard";
import Filter from "../components/filter";
import discoverbg from "/images/bgDiscover.png";
import Announcement from "../components/annoucement";
import Challenge from "../components/challenge";

const projects = [
  {
    image: "/images/discover8.jpeg",
    title: "Cake jewelry box",
    link: "#",
    skillLevel: "expert",
    category: "jewelry",
  },
  {
    image: "/images/discover1.jpeg",
    title: "Clay pendants",
    link: "#",
    skillLevel: "intermediate",
    category: "jewelry",
  },
  {
    image: "/images/discover2.jpeg",
    title: "Clay bow magnets",
    link: "#",
    skillLevel: "beginner",
    category: "air-dry clay",
  },
  {
    image: "/images/discover3.png",
    title: "Flower rugs",
    link: "#",
    skillLevel: "expert",
    category: "tufting",
  },
  {
    image: "/images/discover10.jpeg",
    title: "Beaded anklet",
    link: "#",
    skillLevel: "beginner",
    category: "jewelry",
  },
  {
    image: "/images/discover5.jpeg",
    title: "Picnic blanket",
    link: "#",
    skillLevel: "intermediate",
    category: "crochet",
  },
  {
    image: "/images/discover6.jpeg",
    title: "Wall decor",
    link: "#",
    skillLevel: "intermediate",
    category: "air-dry clay",
  },
  {
    image: "/images/discover7.jpeg",
    title: "Miffy charms",
    link: "#",
    skillLevel: "intermediate",
    category: "polymer-clay",
  },
  {
    image: "/images/discover9.jpeg",
    title: "Martini scarf",
    link: "#",
    skillLevel: "expert",
    category: "crochet",
  },

  // Add more projects as needed
];

function Discover() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [skillLevel, setSkillLevel] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(search.toLowerCase()) &&
      (category ? project.category === category : true) &&
      (skillLevel ? project.skillLevel === skillLevel : true)
  );

  return (
    <>
      <div className="bg-beige w-full flex flex-col items-center space-y-5 relative">
        <div className="w-full p-6 text-left">
          <div className="text-red font-Texterius text-4xl">
            This week's featured projects and annoucements
          </div>
        </div>
        <div className="flex flex-col w-full md:w-3/4 lg:w-5/6 xl:w-11/12 mb-8 space-y-4">
          {/* First row */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="relative w-full lg:w-2/3">
              <div
                className="absolute inset-0 bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${discoverbg})`,
                  transform: "scale(1.05)",
                }}
              ></div>
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
              <div
                className="absolute inset-0 bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${discoverbg})`,
                  transform: "scale(1.05)",
                }}
              ></div>
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
            Explore more projects
          </h2>
          <Filter
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            skillLevel={skillLevel}
            setSkillLevel={setSkillLevel}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
      <RedFooter />
    </>
  );
}

export default Discover;
