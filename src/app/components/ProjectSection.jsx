"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Audio Streaming Application",
    description: "Emmulates an audio-streaming app akin to Spotify",
    skills: "Java",
    image: "/images/audio-streaming-app.png",
    gitUrl:
      "https://github.com/avallip443/audio-streaming-application/tree/main",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "ChatGPT Survey Analysis",
    description:
      "Analyzes survey responses to generate insightful graphs on opinions about ChatGPT use and its allowance in universities",
    skills: "Python • Matplotlib • NumPy • pandas",
    image: "/images/chatgpt-survey.png",
    gitUrl: "https://github.com/avallip443/ChatGPT-survey-analysis",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "DungeonQuest",
    description:
      "Text-based adventure game where players must battle against enemies to escape a dungeon",
    skills: "Java",
    image: "/images/text-adventure-game.png",
    gitUrl: "https://github.com/avallip443/text-adventure-game/tree/main",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Bend Your Footprint",
    description:
      "An interactive quiz to determine where users can reduce their carbon emissions. Created for ElleHacks 2023",
    skills:
      "HTML/CSS • JavaScript • Python • Responses API • Hubspot • Typeform ",
    image: "/images/bend-your-footprint.jpg",
    gitUrl: "https://github.com/cayliab03/bend-your-footprint",
    previewUrl: "https://devpost.com/software/bend-your-footprint",
  },
  {
    id: 5,
    title: "Web Development Labs",
    description: "Collection of 10 labs associated with CPS530 at TMU",
    skills:
      "HTML/CSS • Bootstrap • JavaScript • jQUery • SVG • Perl • PHP • MySQL • Classisc ASP • Python • Ruby • React.js ",
    image: "/images/lab9b.png",
    gitUrl: "https://github.com/avallip443/cps530-labs",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  return (
    <section className="mb-[4rem]" id="projects">
      <div className="items-center py-6 px-4 xl:gap-16 xl:px-16">
        <h2 className="text-center text-4xl font-bold text-[#C5B6F1] mb-8">
          {"> my projects"}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              skills={project.skills}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
