import React from "react";
import { useLanguage } from "./LanguageProvider";

const Filter = ({
  search,
  setSearch,
  category,
  setCategory,
  skillLevel,
  setSkillLevel,
}) => {
  const { language } = useLanguage();

  // Translations based on language
  const translations = {
    EN: {
      searchPlaceholder: "Search crafts",
      categoryLabel: "Category",
      skillLevelLabel: "Skill Level",
      categoryOptions: {
        "": "Category",
        crochet: "Crochet",
        knitting: "Knitting",
        jewelry: "Jewelry",
        "polymer-clay": "Polymer Clay",
        "air-dry clay": "Air-Dry Clay",
        tufting: "Tufting",
      },
      skillLevelOptions: {
        "": "Skill Level",
        beginner: "Beginner",
        intermediate: "Intermediate",
        expert: "Expert",
      },
    },
    FR: {
      searchPlaceholder: "Rechercher des projets",
      categoryLabel: "Catégorie",
      skillLevelLabel: "Niveau de compétence",
      categoryOptions: {
        "": "Catégorie",
        crochet: "Crochet",
        knitting: "Tricot",
        jewelry: "Bijoux",
        "polymer-clay": "Argile polymère",
        "air-dry clay": "Argile séchage à l'air",
        tufting: "Tapisserie",
      },
      skillLevelOptions: {
        "": "Niveau de compétence",
        beginner: "Débutant",
        intermediate: "Intermédiaire",
        expert: "Expert",
      },
    },
  };

  const {
    searchPlaceholder,
    categoryLabel,
    skillLevelLabel,
    categoryOptions,
    skillLevelOptions,
  } = translations[language];

  return (
    <div className="flex flex-row gap-4 p-4">
      <input
        className="bg-lightPink p-2 rounded-3xl text-red font-Texterius placeholder-red placeholder-opacity-50"
        type="text"
        placeholder={searchPlaceholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        className="bg-lightPink p-2 rounded-3xl text-red font-Texterius"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {Object.entries(categoryOptions).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <select
        className="bg-lightPink p-2 rounded-3xl text-red font-Texterius"
        value={skillLevel}
        onChange={(e) => setSkillLevel(e.target.value)}
      >
        {Object.entries(skillLevelOptions).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
