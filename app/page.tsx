import IntroSection from '../components/Intro';
import AboutSection from '../components/About';
import TimeLine from '../components/Timeline';

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-tr from-[#97f0ff] to-[#6365e7] dark:from-[#1a1a1a] dark:to-[#3a3a3ace]">
        <div className="inset-0 bg-gradient-to-t from-slate-50 to-transparent dark:from-black">
          <IntroSection />
          <AboutSection />
        </div>
      </div>
      <TimeLine />
    </>
  );
};

export default Home;
