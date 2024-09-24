"use client";
import { Tilt } from "@jdion/tilt-react";
import { ArrowOutward } from "@mui/icons-material";
import Link from "next/link";

export default function ProjectsTile({ className }: { className?: string }) {
  return (
    <Tilt
      className={`${className} bg-darkBlack rounded-xl p-4 border-4 border-transparent hover:border-lavender transition-all duration-300`}
    >
      <Link
        href="/projects"
        className="flex justify-between items-center text-3xl"
      >
        projects
        <ArrowOutward className="text-lavender" />
      </Link>
    </Tilt>
  );
}
