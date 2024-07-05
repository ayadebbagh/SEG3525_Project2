// src/Filter.js
import React from "react";

const Filter = ({
  search,
  setSearch,
  category,
  setCategory,
  skillLevel,
  setSkillLevel,
}) => {
  return (
    <div className="flex flex-row gap-4 p-4">
      <input
        className="bg-lightPink p-2 rounded-3xl text-red font-Texterius placeholder-red placeholder-opacity-50"
        type="text"
        placeholder="Search crafts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        className="bg-lightPink p-2 rounded-3xl text-red font-Texterius"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Category</option>
        <option value="crochet">Crochet</option>
        <option value="knitting">Knitting</option>
        <option value="jewelry">Jewelry</option>
        <option value="polymer-clay">Polymer Clay</option>
        <option value="air-dry clay">Air-Dry Clay</option>
        <option value="tufting">Tufting</option>
      </select>
      <select
        className="bg-lightPink p-2 rounded-3xl text-red font-Texterius"
        value={skillLevel}
        onChange={(e) => setSkillLevel(e.target.value)}
      >
        <option value="">Skill Level</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="expert">Expert</option>
      </select>
    </div>
  );
};

export default Filter;
