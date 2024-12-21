import { PROJECTS_LIST } from "@/lib/constants";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="grid grid-cols-3 gap-10 w-[660px] mx-auto">
      {PROJECTS_LIST.map((project) => (
        <div
          key={project.project_name}
          className="w-[220px] bg-white shadow-lg flex flex-col gap-3"
        >
          <Image
            alt="placeholder"
            src={"/placeholder.svg"}
            width={100}
            height={100}
            className="w-full h-full"
          />
          <h2>{project.project_name}</h2>
          <a className="bg-red-400" href={project.github_link}>
            Github
          </a>
          <a className="bg-red-400" href={project.website_url}>
            Website
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
