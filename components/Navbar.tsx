"use client";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0.5, y: 45 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex fixed shadow-xl inset-0 w-full top-4 z-30 max-w-7xl bg-blue-300 h-20 rounded-full items-center justify-between px-5 mx-auto"
    >
      <div>
        <h2>DevFolio</h2>
      </div>
      <ul className="flex gap-6">
        <li>About</li>
        <li>Service</li>
        <li>Work</li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
