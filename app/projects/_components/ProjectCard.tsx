"use client";
import { Tilt } from "@jdion/tilt-react";
import Link from "next/link";
import React from "react";

export interface Project {
  title: string;
  techStack: string[];
  description: string;
  client: string;
  outcome: string;
  link: string;
  complete: boolean;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Tilt className="mb-8 p-4 bg-grayishBlack rounded-lg shadow-lg">
      <div className="h-full flex flex-col justify-between">
        <div>
          <h2 className="text-xl text-lightLavender mb-2">{project.title}</h2>
          <div className="text-gray-400 mb-1">
            <span className="font-semibold text-gray-300">Client:</span>{" "}
            {project.client}
          </div>
          <div className="text-gray-400 mb-1">
            <span className="font-semibold text-gray-300">Outcome:</span>{" "}
            {project.outcome}
          </div>
          <div className="flex flex-wrap gap-2 mt-2 mb-3">
            {project.techStack.map((t, i) => (
              <div
                className="bg-lightLavender text-darkBlack rounded-full px-3 py-1 text-sm font-semibold"
                key={i}
              >
                {t}
              </div>
            ))}
          </div>
          <p className="mb-3">{project.description}</p>
        </div>
        <div className="flex justify-between items-center">
          <div
            className={`text-sm ${
              project.complete ? "text-green-500" : "text-red-500"
            }`}
          >
            {project.complete ? "Completed" : "In Development"}
          </div>
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary-filled"
          >
            View Project
          </Link>
        </div>
      </div>
    </Tilt>
  );
}
