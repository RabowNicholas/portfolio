"use client";
import { Tilt } from "@jdion/tilt-react";
import { BarChart } from "@mui/icons-material";

export default function StatsTile({ className }: { className?: string }) {
  return (
    <Tilt
      className={`${className} bg-darkBlack rounded-xl p-4 border-4 border-transparent hover:border-lavender transition-all duration-300`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 text-3xl mb-4">
          <span>statistics</span>
          <BarChart className="text-lightLavender" />
        </div>
        <div className="flex flex-col h-full justify-around">
          <div className="flex justify-between">
            <span>Commits This Year:</span>
            <span>200+</span>
          </div>
          <div className="flex justify-between">
            <span>Pull Requests Merged:</span>
            <span>24</span>
          </div>
          <div className="flex justify-between">
            <span>Open Source Contributions:</span>
            <span>5</span>
          </div>
          <div className="flex justify-between">
            <span>Projects Completed:</span>
            <span>4</span>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
