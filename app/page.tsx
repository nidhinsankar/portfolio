import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Service from "@/components/Services";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      {/* <Navbar /> */}
      <About />
      <Service />
      <Work />
    </main>
  );
}
