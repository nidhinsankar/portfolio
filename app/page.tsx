import About from "@/components/About";
import Template from "@/components/Template";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <Template>
          <h2 className="">Hi I'm Nidhin</h2>
          <h4>Frontend Developer</h4>
          <p>How can i help you</p>
        </Template>
      </div>
      <About />
    </>
  );
}
