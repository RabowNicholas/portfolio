"use client";

import Link from "next/link";
import ProjectCard, { Project } from "./_components/ProjectCard";

const projects: Project[] = [
  {
    title: "Fredericksburg's Hidden Gems",
    techStack: ["Next.js", "Tailwind CSS", "Node.js", "Python", "PostgreSQL"],
    client: "Mount",
    outcome:
      "Executed A/B tests that skyrocketed conversion rates from 0.5% to an impressive 8% within just two months.",
    description:
      "Developed a captivating web application that serves as the entry point for a complementary product, designed to enlighten travelers about the best-kept secrets in Fredericksburg, Texas. The project not only showcases my expertise in modern web technologies but also focuses on optimizing user engagement to drive sign-ups for the main application.",
    link: "https://internal.app.rentmount.com/fred/123",
    complete: true,
  },
  {
    title: "Hydrogen Hydration E-commerce Site",
    techStack: ["Next.js", "Tailwind CSS", "Node.js"],
    client: "H1 Hydration",
    outcome:
      "Enabled the client to successfully launch their product and generate interest in upcoming offerings through an intuitive online platform.",
    description:
      "Crafted a sleek and functional e-commerce site for H1 Hydration, specializing in hydrogen-infused water. Leveraging my skills in full-stack development, I created a seamless shopping experience that not only facilitates orders but also elevates brand presence in a competitive market.",
    link: "https://h1-website.vercel.app",
    complete: false,
  },
  {
    title: "Music Festival Budget App",
    client: "NDR Business Consulting",
    techStack: ["Next.js", "Tailwind CSS", "Node.js", "Python", "PostgreSQL"],
    outcome:
      "Currently in development, this app will serve as the focal point of our marketing funnel, directing users to a seamless budgeting experience for music festivals.",
    description:
      "Designed to empower music lovers to attend more events, this innovative application will feature a suite of tools tailored for eventgoers. As the sole developer, I’m collaborating closely with a dedicated group of beta users to refine core functionalities and explore monetization strategies for a premium version, ensuring the app meets the real needs of its users.",
    link: "https://demo.fest-fund.com",
    complete: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <Link href="/" className="button-primary-transparent  mb-8">
        Back
      </Link>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl px-4">
        {projects.map((project: Project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
