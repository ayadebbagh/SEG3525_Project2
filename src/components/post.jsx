import React, { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaBookmark,
  FaRegBookmark,
  FaCommentAlt,
} from "react-icons/fa";

const Post = ({ postPicture, caption, profilePicture, username }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

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
    <div className="flex flex-col items-center space-y-2 p-4 bg-lightPink rounded-lg shadow-md">
      <div className="flex items-center space-x-2">
        <img
          src={profilePicture}
          alt={username}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-red font-Texterius">@{username}</span>
      </div>
      <img src={postPicture} alt={caption} className="w-full rounded-lg" />
      <p className="text-center text-red font-Texterius">{caption}</p>
      <div className="flex justify-between w-full px-4">
        <button onClick={handleLike}>
          {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        </button>
        <button onClick={handleSave}>
          {saved ? <FaBookmark className="text-red-500" /> : <FaRegBookmark />}
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
        className="w-full p-2 border rounded-lg placeholder-red placeholder-opacity-50 font-Texterius"
      />
    </div>
  );
};

export default Post;
