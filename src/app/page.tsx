import Image from "next/image";
import Header from "@/components/Header";
import { SparklesPreview } from '../components/SparklesPreview';
import { MacbookScrollDemo } from '../components/MacbookScroll';
import { MacbookScroll } from '../components/ui/macbook-scroll';
import { SparklesPre } from '../components/SparklesPre';
export default function Home() {
  return (
    <div>
      <div className="home-page">
        <Header />
      </div>
      
      <main className="home-content">
       <SparklesPreview />
       <SparklesPre />
      </main>
      
    </div>
  );
};
