import React from "react";
import RedFooter from "../components/redFooter";
import Post from "../components/post";
import { useLanguage } from "../components/LanguageProvider";

function Community() {
  const { language } = useLanguage();
  const posts = [
    {
      postPicture: "/images/community1.jpeg",
      caption: "Finished my bag!",
      captionFR: "J'ai fini mon sac!",
      profilePicture: "/images/profilepic1.jpeg",
      username: "MilaMeow",
    },
    {
      postPicture: "/images/community2.jpeg",
      caption: "work in progress...",
      captionFR: "Travail en cours...",
      profilePicture: "/images/profilepic2.jpeg",
      username: "Cindy.lee",
    },
    {
      postPicture: "/images/community3.jpeg",
      caption: "New air-dry clay tray!",
      captionFR: "Nouveau plateau en argile",
      profilePicture: "/images/profilepic3.jpg",
      username: "Kelly.clarks",
    },
    {
      postPicture: "/images/community4.jpeg",
      caption: "My latest batch :)",
      captionFR: "Ma dernière fournée :)",
      profilePicture: "/images/profilepic4.jpg",
      username: "StitchWitch",
    },
    {
      postPicture: "/images/community5.jpeg",
      caption: "My knew knitted top!",
      captionFR: "Mon nouveau haut tricoté!",
      profilePicture: "/images/profilepic4.jpg",
      username: "StitchWitch",
    },
    {
      postPicture: "/images/community6.jpeg",
      caption: "For my penpals!",
      captionFR: "Pour mes correspondants!",
      profilePicture: "/images/profilepic5.jpg",
      username: "PotterySpark",
    },
    {
      postPicture: "/images/community7.jpeg",
      caption: "Love my orchid crochet bags",
      captionFR: "J'adore mes sacs à crochet orchidée",
      profilePicture: "/images/profilepic6.jpeg",
      username: "BeadBlossom",
    },
    {
      postPicture: "/images/community8.jpeg",
      caption: "Finally finished the dress!",
      captionFR: "Enfin fini la robe!",
      profilePicture: "/images/profilepic3.jpg",
      username: "Kelly.clarks",
    },
    {
      postPicture: "/images/community9.jpeg",
      caption: "My little bow mugs",
      captionFR: "Mes petits mugs noeud",
      profilePicture: "/images/profilepic4.jpg",
      username: "StitchWitch",
    },
  ];
  const community = {
    EN: "Community",
    FR: "Communaute",
  };

  return (
    <>
      <div className="bg-beige min-h-screen py-10 px-20">
        <h1 className="text-red font-Texterius text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-10">
          {language === "EN" ? community.EN : community.FR}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Post
              key={index}
              postPicture={post.postPicture}
              caption={post.caption}
              captionFR={post.captionFR}
              profilePicture={post.profilePicture}
              username={post.username}
            />
          ))}
        </div>
      </div>
      <RedFooter />
    </>
  );
}

export default Community;
