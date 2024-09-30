"use client";
import Link from "next/link";
import { HandshakeOutlined } from "@mui/icons-material";
import { Tilt } from "@jdion/tilt-react";

export default function SocialsTile({ className }: { className?: string }) {
  return (
    <Tilt
      className={`${className} bg-darkBlack rounded-xl p-4 border-4 border-transparent hover:border-lavender transition-all duration-300`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-3xl">
          <div>socials</div>
          <HandshakeOutlined className="text-lightLavender" />
        </div>
        <div className="flex flex-col gap-4">
          <a
            href="mailto:rabownick123@gmail.com"
            className="button-secondary-transparent"
          >
            Email
          </a>{" "}
          <Link
            href="https://www.linkedin.com/in/nicholas-rabow-344ab8209/"
            target="_blank"
            className="button-secondary-transparent w-full"
          >
            LinkedIn
          </Link>
          <Link
            href="https://gitlab.com/rabownick123"
            target="_blank"
            className="button-secondary-transparent w-full"
          >
            GitLab
          </Link>
          <Link
            href="https://github.com/RabowNicholas"
            target="_blank"
            className="button-secondary-transparent w-full"
          >
            GitHub
          </Link>
        </div>
      </div>
    </Tilt>
  );
}
