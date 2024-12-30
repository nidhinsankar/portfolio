import { PROJECTS_LIST } from "@/lib/constants";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto p-10">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_LIST.map((project) => (
          <motion.div
            key={project.project_name}
            className="bg-white rounded-xl shadow-lg p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              alt={project.project_name}
              src={project.image_url}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-t-xl mb-4"
            />
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
              {project.project_name}
            </h3>
            <div className="flex space-x-4">
              <a
                href={project.github_link}
                className="text-indigo-600 hover:underline"
              >
                Github
              </a>
              <a
                href={project.website_url}
                className="text-indigo-600 hover:underline"
              >
                Website
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
