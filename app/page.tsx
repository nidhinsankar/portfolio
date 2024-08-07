import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Service from "@/components/Services";
import Template from "@/components/Template";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <Template>
          <h3 className="">This is the home page</h3>
        </Template>
      </div>
      <About />
    </>
  );
}
