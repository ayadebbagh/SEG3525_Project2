import React, { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaBookmark,
  FaRegBookmark,
  FaCommentAlt,
} from "react-icons/fa";
import { useLanguage } from "./LanguageProvider";

const Post = ({
  postPicture,
  caption,
  captionFR,
  profilePicture,
  username,
}) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { language } = useLanguage();

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentKeyPress = (e) => {
    if (e.key === "Enter" && comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-2 mb-2">
        <img
          src={profilePicture}
          alt={username}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-red font-Texterius">@{username}</span>
      </div>
      <div className="p-4 bg-lightPink rounded-lg shadow-md w-full flex flex-col items-center">
        <div className="w-full h-64 overflow-hidden rounded-lg">
          <img
            src={postPicture}
            alt={caption}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-center text-red font-Texterius mt-2">
          {language === "EN" ? caption : captionFR}
        </p>
        <div className="flex justify-between w-full px-4 mt-2">
          <button onClick={handleLike}>
            {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
          </button>
          <button onClick={handleSave}>
            {saved ? (
              <FaBookmark className="text-red-500" />
            ) : (
              <FaRegBookmark />
            )}
          </button>
          <div className="flex items-center">
            <FaCommentAlt />
            <span className="ml-1">{comments.length}</span>
          </div>
        </div>
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          onKeyPress={handleCommentKeyPress}
          placeholder="Comment..."
          className="w-full p-2 border rounded-lg placeholder-red placeholder-opacity-50 font-Texterius mt-2"
        />
      </div>
    </div>
  );
};

export default Post;
