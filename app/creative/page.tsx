import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import CreativeHero from "@/components/CreativeHero";
import RecentProjects from "@/components/RecentProjects";
import Recommendations from "@/components/Recommendations";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
            <FloatingNav navItems={navItems}/>
            <CreativeHero />
            <RecentProjects />
            <Footer />
        </div>
    </main>
  );
}
