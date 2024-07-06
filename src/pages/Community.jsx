import RedFooter from "../components/redFooter";
import React from "react";
import Post from "../components/post";
function Community() {
  const posts = [
    {
      postPicture: "./src/assets/images/community1.jpeg",
      caption: "Finished my bag!",
      profilePicture: "./src/assets/images/profilepic1.jpeg",
      username: "MilaMeow",
    },
    {
      postPicture: "./src/assets/images/community2.jpeg",
      caption: "work in progress...",
      profilePicture: "./src/assets/images/profilepic2.jpeg",
      username: "Cindy.lee",
    },
    {
      postPicture: "./src/assets/images/community3.jpeg",
      caption: "New air-dry clay tray!",
      profilePicture: "./src/assets/images/profilepic3.jpg",
      username: "Kelly.clarks",
    },
    {
      postPicture: "./src/assets/images/community4.jpeg",
      caption: "My latest batch :)",
      profilePicture: "./src/assets/images/profilepic4.jpg",
      username: "StitchWitch",
    },
    {
      postPicture: "./src/assets/images/community5.jpeg",
      caption: "My knew knitted top!",
      profilePicture: "./src/assets/images/profilepic4.jpg",
      username: "StitchWitch",
    },
    {
      postPicture: "./src/assets/images/community6.jpeg",
      caption: "For my penpals!",
      profilePicture: "./src/assets/images/profilepic5.jpg",
      username: "PotterySpark",
    },
    {
      postPicture: "./src/assets/images/community7.jpeg",
      caption: "Love my orchid crochet bags",
      profilePicture: "./src/assets/images/profilepic6.jpeg",
      username: "BeadBlossom",
    },
    {
      postPicture: "./src/assets/images/community8.jpeg",
      caption: "Finally finished the dress!",
      profilePicture: "./src/assets/images/profilepic3.jpg",
      username: "Kelly.clarks",
    },
    {
      postPicture: "./src/assets/images/community9.jpeg",
      caption: "My little bow mugs",
      profilePicture: "./src/assets/images/profilepic4.jpg",
      username: "StitchWitch",
    },
  ];
  return (
    <>
      <div className="bg-beige min-h-screen py-10">
        <h1 className="text-red font-Texterius text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-10">
          Community
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {posts.map((post, index) => (
            <Post
              key={index}
              postPicture={post.postPicture}
              caption={post.caption}
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
