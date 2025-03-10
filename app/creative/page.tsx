
import Footer from "@/components/Footer";
import CreativeHero from "@/components/CreativeHero";
import CreativeProjects from "@/components/CreativeProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
            <FloatingNav navItems={navItems}/>
            <CreativeHero />
            <CreativeProjects />
            <Footer />
        </div>
    </main>
  );
}
