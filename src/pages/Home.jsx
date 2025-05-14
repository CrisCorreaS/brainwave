import ButtonGradient from "../assets/svg/ButtonGradient";
import Collaboration from "../components/Collaboration";
import Hero from "../components/Hero";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <Collaboration />
        <Services />
        <Roadmap />
      </div>

      <ButtonGradient />
    </>
  );
};

export default Home;
