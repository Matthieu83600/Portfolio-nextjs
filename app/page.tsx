import { IntroSection } from '../components/Intro';
import { AboutSection } from '../components/About';
import { TimeLine } from '../components/Timeline';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-gradient-to-tr from-[#97f0ff] to-[#af9cfa] dark:from-[#1a1a1a] dark:to-[#3a3a3ace]">
        <div className="inset-0 bg-gradient-to-t from-slate-50 to-transparent dark:from-black">
          <IntroSection />
          <AboutSection />
        </div>
      </div>
      <TimeLine />
    </div>
  );
}
