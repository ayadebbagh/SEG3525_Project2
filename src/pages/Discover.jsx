import React, { useState } from "react";
import RedFooter from "../components/redFooter";
import ProjectCard from "../components/projectCard";
import Filter from "../components/filter";
import discoverbg from "../assets/images/bgDiscover.png";

const projects = [
  {
    image: "./src/assets/images/discover8.jpeg",
    title: "Cake jewelry box",
    link: "#",
    skillLevel: "expert",
    category: "jewelry",
  },
  {
    image: "./src/assets/images/discover1.jpeg",
    title: "Clay pendants",
    link: "#",
    skillLevel: "intermediate",
    category: "jewelry",
  },
  {
    image: "./src/assets/images/discover2.jpeg",
    title: "Clay bow magnets",
    link: "#",
    skillLevel: "beginner",
    category: "air-dry clay",
  },
  {
    image: "./src/assets/images/discover3.png",
    title: "Flower rugs",
    link: "#",
    skillLevel: "expert",
    category: "tufting",
  },
  {
    image: "./src/assets/images/discover10.jpeg",
    title: "Beaded anklet",
    link: "#",
    skillLevel: "beginner",
    category: "jewelry",
  },
  {
    image: "./src/assets/images/discover5.jpeg",
    title: "Picnic blanket",
    link: "#",
    skillLevel: "intermediate",
    category: "crochet",
  },
  {
    image: "./src/assets/images/discover6.jpeg",
    title: "Wall decor",
    link: "#",
    skillLevel: "intermediate",
    category: "air-dry clay",
  },
  {
    image: "./src/assets/images/discover7.jpeg",
    title: "Miffy charms",
    link: "#",
    skillLevel: "intermediate",
    category: "polymer-clay",
  },
  {
    image: "./src/assets/images/discover9.jpeg",
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
            This week's featured project
          </div>
        </div>
        <div className="relative flex justify-center items-center w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mb-8">
          <div
            className="absolute inset-0 bg-contain bg-no-repeat bg-center top-6"
            style={{
              backgroundImage: `url(${discoverbg})`,
              transform: "scale(1.55)", // Adjust this value to make the border larger or smaller
            }}
          ></div>
          <iframe
            className="w-full h-72 md:h-96 lg:h-128 relative "
            src="https://www.youtube.com/embed/TlBMcexUwjE?si=HpJf35lY-Rq3iNOZ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
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
