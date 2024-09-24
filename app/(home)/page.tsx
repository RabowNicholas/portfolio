import AboutMeTile from "./_components/AboutMeTile";
import ExperienceTile from "./_components/ExperienceTile";
import PlaygroundTile from "./_components/PlaygroundTile";
import ProjectsTile from "./_components/ProjectsTile";
import SocialsTile from "./_components/SocialsTile";
import StatsTile from "./_components/StatsTile";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid gap-4 p-4 md:grid-cols-8 md:grid-rows-8 sm:grid-cols-1 w-[80%] h-full">
        <div className="lg:col-span-6 lg:row-span-4 md:col-span-8 md:row-span-4 sm:col-span-1">
          <AboutMeTile className="h-full w-full" />
        </div>
        <div className="lg:col-span-2 lg:row-span-5 md:col-span-8 md:row-span-4 sm:col-span-1">
          <StatsTile className="h-full w-full" />
        </div>

        <div className="lg:col-span-2 lg:row-span-4 md:row-span-3 md:col-span-4 sm:col-span-1">
          <SocialsTile className="h-full w-full" />
        </div>
        <div className="lg:col-span-2 lg:row-span-1 md:row-span-1 md:col-span-4 sm:col-span-1">
          <PlaygroundTile className="h-full w-full" />
        </div>
        <div className="lg:col-span-2 lg:row-span-1 md:row-span-2 md:col-span-4 sm:col-span-1">
          <ProjectsTile className="h-full w-full" />
        </div>
        <div className="lg:col-span-6 lg:row-span-4 md:row-span-2 md:col-span-8 sm:col-span-1">
          <ExperienceTile className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}
