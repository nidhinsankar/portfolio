import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import ThemeSwitch from "./ThemeSwitch";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import { MotionLink } from "@/lib/motion-link";

const BottomNav = () => {
  return (
    <div className=" bg-gray-500 bg-opacity-25 py-5  rounded-xl fixed inset-x-0 left-0 w-[300px] mx-auto bottom-0 px-4 my-3">
      <ul className="flex items-center justify-between">
        {NAV_LINKS.map((item) => (
          <MotionLink
            whileHover={{ color: "#fff", backgroundColor: "#000", scale: 1.1 }}
            href={item.link}
            key={item.name}
            className={cn("bg-box-color rounded-xl p-3 hover:bg-high-light")}
          >
            <item.icon />
          </MotionLink>
        ))}
        <ThemeSwitch />
      </ul>
    </div>
  );
};
export default BottomNav;
