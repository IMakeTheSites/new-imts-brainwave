import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Bio from "../components/Bio";
import Download from "../components/Download";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Skills from "../components/Skills";

const Home = () => {
  const { hash } = useLocation();

  // Coming from another page (e.g. /blog -> /#skills): scroll to the section once it exists
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView();
  }, [hash]);

  return (
    <>
      <Hero />
      <Experience />
      <Skills />
      <Services />
      <Bio />
      <Download />
    </>
  );
};

export default Home;
