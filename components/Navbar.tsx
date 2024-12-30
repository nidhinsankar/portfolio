import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.div
      className="flex justify-between items-center sticky top-4 px-3 rounded-2xl opacity-80 w-[760px] mx-auto bg-red-400 h-20"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h2>Nidhin Sankar</h2>
      <nav className="flex justify-between items-center gap-3">
        <h1>Articles</h1>
        <h1>Projects</h1>
        <h1>Github</h1>
        <h1>Twitter</h1>
      </nav>
    </motion.div>
  );
};
