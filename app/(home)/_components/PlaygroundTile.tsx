"use client";
import { Tilt } from "@jdion/tilt-react";
import { ArrowOutward } from "@mui/icons-material";

export default function PlaygroundTile({ className }: { className?: string }) {
  return (
    <Tilt
      className={`${className}  bg-darkBlack rounded-xl p-4 border-4 border-transparent hover:border-lavender transition-all duration-300`}
    >
      <div
        // href="/playground"
        className="flex justify-between items-center text-3xl cursor-not-allowed"
      >
        playground
        <ArrowOutward className="text-gray-100" />
      </div>
    </Tilt>
  );
}
