"use client";
import { Tilt } from "@jdion/tilt-react";
import { WavingHandOutlined } from "@mui/icons-material";
import Link from "next/link";

export default function AboutMeTile({ className }: { className?: string }) {
  return (
    <Tilt
      className={`${className} bg-darkBlack rounded-xl p-4 border-4 border-transparent hover:border-lavender transition-all duration-300`}
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-2 text-3xl mb-4">
          <span>about me</span>
          <WavingHandOutlined className="text-lightLavender" />
        </div>
        <p className="text-lg">
          Hi, my name is Nick! I&apos;m a passionate{" "}
          <span className="text-lightLavender">Full Stack Developer</span> based
          in Salt Lake City, UT, focused on helping startups and smaller
          companies bring value to their customers through innovative software
          solutions.
        </p>
        <h3 className="text-xl font-bold mt-4">Technologies I Love:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-lightLavender text-darkBlack rounded-full px-3 py-1 text-sm font-semibold">
            JavaScript
          </span>
          <span className="bg-lightLavender text-darkBlack rounded-full px-3 py-1 text-sm font-semibold">
            React
          </span>
          <span className="bg-lightLavender text-darkBlack rounded-full px-3 py-1 text-sm font-semibold">
            Node.js
          </span>
          <span className="bg-lightLavender text-darkBlack rounded-full px-3 py-1 text-sm font-semibold">
            Python
          </span>
          <span className="bg-lightLavender text-darkBlack rounded-full px-3 py-1 text-sm font-semibold">
            TypeScript
          </span>
        </div>
        <div className="flex gap-4 mt-4 self-end">
          <Link
            href="https://www.linkedin.com/in/nicholas-rabow-344ab8209/"
            target="_blank"
            className="button-primary-filled"
          >
            Connect with me on LinkedIn!
          </Link>
          <Link
            href="https://calendly.com/rabownick123/30min"
            target="_blank"
            className="button-primary-transparent"
          >
            Book a call with me
          </Link>
        </div>
      </div>
    </Tilt>
  );
}
