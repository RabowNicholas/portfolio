"use client";
import { TimelineOutlined } from "@mui/icons-material";
import { useState } from "react";

const experiences = [
  {
    title: "Electrical Engineer I",
    company: "Bean Trailer",
    dates: "Apr 2021 - Dec 2021",
    description:
      "Implemented lean processes in the assembly line to improve efficiency and reduce waste.",
  },
  {
    title: "Research Assistant",
    company: "Weber State University",
    dates: "July 2021 - Dec 2021",
    description:
      "Assisted in developing image processing algorithms using Python data visualization libraries to track experimental outputs.",
  },
  {
    title: "Full Stack Developer",
    company: "Mount",
    dates: "July 2022 - Sep 2024",
    description:
      "Prototyped frontend applications using Next.js and Python (FastAPI, SQLAlchemy, PostgreSQL). Collaborated with the marketing team to define requirements and plan sprints.",
  },
  {
    title: "Founder",
    company: "NDR Business Consulting",
    dates: "March 2024 - Present",
    description:
      "As the founder of NDR Business Consulting, I utilize my software development and project management skills to deliver tailored solutions. I focus on creating robust web applications and optimizing business processes for efficiency and innovation. My goal is to build strong client relationships and ensure each project aligns with their strategic objectives.",
  },
];

export default function ExperienceTile({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <div className="lg:block md:hidden sm:hidden">
        <HorizontalTimeline />
      </div>
      <div className="lg:hidden md:block sm:block">
        <VerticalTimeline />
      </div>
    </div>
  );
}

function HorizontalTimeline({ className }: { className?: string }) {
  const [hoveredEntry, setHoveredEntry] = useState<number | null>(null);

  return (
    <div
      className={`${className} bg-darkBlack rounded-xl p-4 border-4 border-transparent hover:border-lavender hover:scale-105 transition-all duration-300`}
    >
      <div className="flex items-center gap-2 text-3xl mb-4">
        <span>experience</span>
        <TimelineOutlined className="text-lightLavender" />
      </div>
      <div className="relative flex items-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-1  bg-lavender w-full" />

        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-1/4 z-10"
            onMouseEnter={() => setHoveredEntry(index)}
            onMouseLeave={() => setHoveredEntry(null)}
          >
            <div
              className={`flex flex-col items-center ${
                index % 2 === 0 ? "mt-12" : "-mt-12"
              }`}
            >
              <div className="bg-lightLavender text-center px-1 rounded-md mb-1">
                {experience.title}
              </div>
              <div className="bg-lightLavender text-center px-1 rounded-md mb-1">
                {experience.company}
              </div>
              <div className="bg-grayishBlack px-1 rounded-md">
                {experience.dates}
              </div>
            </div>

            {hoveredEntry === index && (
              <div className="absolute bg-grayishBlack text-white p-2 rounded-md w-64 -translate-y-10 z-20">
                {experience.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
const reversedExperiences = [...experiences].reverse();

function VerticalTimeline({ className }: { className?: string }) {
  return (
    <div
      className={`${className} bg-darkBlack rounded-xl p-4 border-4 border-transparent hover:border-lavender transition-all duration-300`}
    >
      <div className="flex items-center gap-2 text-3xl mb-6">
        <span>experience</span>
        <TimelineOutlined className="text-lightLavender" />
      </div>
      <div className="relative flex flex-col">
        {reversedExperiences.map((experience, index) => (
          <div key={index} className="flex items-start mb-8 relative">
            <div className="flex flex-col items-center w-full">
              <div className="bg-lightLavender text-center px-2 py-1 rounded-md mb-1 shadow-sm transition-shadow hover:shadow-lg">
                <h3 className="font-semibold">{experience.title}</h3>
                <p className="text-gray-800">{experience.company}</p>
                <span className="text-sm text-gray-600">
                  {experience.dates}
                </span>
              </div>
              <div className="bg-grayishBlack text-white p-2 rounded-md shadow-sm transition-shadow hover:shadow-lg">
                {experience.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
