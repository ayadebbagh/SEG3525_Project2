import React from "react";
import RedFooter from "../components/redFooter";
import { useState } from "react";
import { useLanguage } from "../components/LanguageProvider.jsx";

function FAQ() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const { language } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { name, email, question });
    setName("");
    setEmail("");
    setQuestion("");
  };

  const translations = {
    title: {
      EN: "FAQ",
      FR: "FAQ",
    },
    moreQuestions: {
      EN: "More questions? Contact us directly",
      FR: "Plus de questions ? Contactez-nous directement",
    },
    name: {
      EN: "Name",
      FR: "Nom",
    },
    email: {
      EN: "Email",
      FR: "E-mail",
    },
    yourQuestion: {
      EN: "Your Question",
      FR: "Votre Question",
    },
    submit: {
      EN: "Submit",
      FR: "Soumettre",
    },
  };

  const faqItems = [
    {
      question: {
        EN: "Where can I find project ideas and inspiration?",
        FR: "Où puis-je trouver des idées de projets et de l'inspiration ?",
      },
      answer: {
        EN: "You can find project ideas and inspiration in the 'Discover' section of our website. Browse through various categories, skill levels, and featured projects to find something that interests you.",
        FR: "Vous pouvez trouver des idées de projets et de l'inspiration dans la section 'Découvrir' de notre site web. Parcourez les différentes catégories, niveaux de compétence et projets en vedette pour trouver quelque chose qui vous intéresse.",
      },
    },
    {
      question: {
        EN: "How can I filter projects based on difficulty and category?",
        FR: "Comment puis-je filtrer les projets en fonction de la difficulté et de la catégorie ?",
      },
      answer: {
        EN: "Use the filter options in the 'Discover' section. You can filter projects by skill level (beginner, intermediate, expert) and by category (jewelry, air-dry clay, crochet, etc.).",
        FR: "Utilisez les options de filtre dans la section 'Découvrir'. Vous pouvez filtrer les projets par niveau de compétence (débutant, intermédiaire, expert) et par catégorie (bijoux, argile à séchage à l'air, crochet, etc.).",
      },
    },
    {
      question: {
        EN: "How do I schedule a virtual meeting with a craft expert?",
        FR: "Comment puis-je planifier une réunion virtuelle avec un expert en artisanat ?",
      },
      answer: {
        EN: "To schedule a virtual meeting, go to your profile and select a date and time that suits you. Fill in your details and click 'Submit' to confirm your appointment. You will receive a confirmation email with the meeting details.",
        FR: "Pour planifier une réunion virtuelle, allez sur votre profil et sélectionnez une date et une heure qui vous conviennent. Remplissez vos informations et cliquez sur 'Envoyer' pour confirmer votre rendez-vous. Vous recevrez un email de confirmation avec les détails de la réunion.",
      },
    },
    {
      question: {
        EN: "Are there any rules for posting projects and comments?",
        FR: "Y a-t-il des règles pour publier des projets et des commentaires ?",
      },
      answer: {
        EN: "Yes, we have community guidelines to ensure a positive experience for everyone. Please be respectful, avoid inappropriate content, and give constructive feedback.",
        FR: "Oui, nous avons des directives communautaires pour garantir une expérience positive pour tout le monde. Veuillez être respectueux, éviter les contenus inappropriés et donner des retours constructifs.",
      },
    },
    {
      question: {
        EN: "How do I participate in craft challenges?",
        FR: "Comment puis-je participer à des défis d'artisanat ?",
      },
      answer: {
        EN: "Challenges are posted on the 'Discover' page. Simply click on join and you will be added to the challenge. Complete the challenge and submit your project to participate.",
        FR: "Les défis sont publiés sur la page 'Découvrir'. Il vous suffit de cliquer sur rejoindre et vous serez ajouté au défi. Complétez le défi et soumettez votre projet pour participer.",
      },
    },
    {
      question: {
        EN: "What are virtual workshops?",
        FR: "Qu'est-ce que les ateliers virtuels ?",
      },
      answer: {
        EN: "Virtual workshops are online sessions conducted by expert crafters where you can learn new skills, techniques, and project ideas. Workshops cover various topics and are designed for different skill levels.",
        FR: "Les ateliers virtuels sont des sessions en ligne animées par des experts en artisanat où vous pouvez apprendre de nouvelles compétences, techniques et idées de projets. Les ateliers couvrent divers sujets et sont conçus pour différents niveaux de compétence.",
      },
    },
    {
      question: {
        EN: "Where can I find resources for learning new crafts?",
        FR: "Où puis-je trouver des ressources pour apprendre de nouveaux métiers ?",
      },
      answer: {
        EN: "Our resource library contains tutorials, guides, and tips for various crafts. You can find resources for beading, jewelry-making, crochet, knitting, and more. Explore the library to learn new skills and techniques.",
        FR: "Notre bibliothèque de ressources contient des tutoriels, des guides et des astuces pour divers métiers. Vous pouvez trouver des ressources pour le perlage, la fabrication de bijoux, le crochet, le tricot et plus encore. Explorez la bibliothèque pour apprendre de nouvelles compétences et techniques.",
      },
    },
  ];

  return (
    <>
      <div className="bg-beige w-full min-h-screen flex flex-col items-center py-4">
        <div className="text-red font-Texterius text-center text-4xl sm:text-4xl md:text-5xl lg:text-6xl pt-4 mb-8">
          {translations.title[language]}
        </div>

        <div className="w-full max-w-6xl px-4 flex flex-col md:flex-row justify-between">
          {/* FAQ Dropdowns */}
          <div className="w-full md:w-1/2 pr-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="mb-4 bg-lightPink text-red font-Texterius rounded-full shadow-md p-3"
              >
                <summary className="px-3 py-2 font-semibold cursor-pointer focus:outline-none">
                  {item.question[language]}
                </summary>
                <p
                  className="px-4 py-2"
                  style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
                >
                  {item.answer[language]}
                </p>
              </details>
            ))}
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 pl-4 mt-8 md:mt-0">
            <h2 className="text-red font-Texterius text-2xl mb-4">
              {translations.moreQuestions[language]}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-red font-Texterius mb-1"
                >
                  {translations.name[language]}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-red font-Texterius"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-red font-Texterius mb-1"
                >
                  {translations.email[language]}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-red font-Texterius"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="question"
                  className="block text-red font-Texterius mb-1"
                >
                  {translations.yourQuestion[language]}
                </label>
                <textarea
                  id="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-red font-Texterius"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red text-white font-Texterius px-4 py-2 rounded-md hover:bg-darkRed"
              >
                {translations.submit[language]}
              </button>
            </form>
          </div>
        </div>
      </div>

      <RedFooter />
    </>
  );
}

export default FAQ;
