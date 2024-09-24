"use client";
import { Tilt } from "@jdion/tilt-react";
import { ArrowOutward } from "@mui/icons-material";
import Link from "next/link";

export default function PlaygroundTile({ className }: { className?: string }) {
  return (
    <Tilt
      className={`${className}  bg-darkBlack rounded-xl p-4 border-4 border-transparent hover:border-lavender transition-all duration-300`}
    >
      <Link
        href="/playground"
        className="flex justify-between items-center text-3xl"
      >
        playground
        <ArrowOutward className="text-lavender" />
      </Link>
    </Tilt>
  );
}
