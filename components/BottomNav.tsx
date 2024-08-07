import { cn } from "@/lib/utils";
import {
  ArrowLeftIcon,
  FaceIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const BottomNav = () => {
  return (
    <div className=" bg-gray-500 bg-opacity-25 py-5  rounded-xl fixed inset-x-0 left-0 w-[300px] h-20 mx-auto bottom-0 px-4 my-3">
      <ul className="flex items-center justify-between">
        <li className="bg-black bg-opacity-25 rounded-lg p-3">
          <Link href={"/"}>
            <HomeIcon />
          </Link>
        </li>
        <li
          className={cn("bg-black bg-opacity-25 rounded-lg p-3 hover:bg-white")}
        >
          <Link href={"/about"}>
            <FaceIcon />
          </Link>
        </li>
        <li className="bg-black bg-opacity-25 rounded-lg p-3">
          <Link href={"/resume"}>
            <MoonIcon />
          </Link>
        </li>
        <li className="bg-black bg-opacity-25 rounded-lg p-3 hover:text-white">
          <Link href={"/contact"}>
            <SunIcon />
          </Link>
        </li>
        <li className="bg-black bg-opacity-25 rounded-lg p-3">
          <Link href={"/work"}>
            <ArrowLeftIcon color="#fff" />
          </Link>
        </li>
        <ThemeSwitch />
      </ul>
    </div>
  );
};
export default BottomNav;
