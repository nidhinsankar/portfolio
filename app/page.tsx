import About from "@/components/about";
import ContactForm from "@/components/contact-form";
import Experiences from "@/components/experience";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-5">
      <About />
      <Experiences />
      <Projects />
      <ContactForm />
    </div>
  );
}
