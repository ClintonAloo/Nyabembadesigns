import { OurStory, OurTeam, Portfolio } from "../components";

const AboutPage = () => {
  return (
    <main className="about">
      <section className="about__header"></section>
      <OurStory />
      <Portfolio />
      <OurTeam />
    </main>
  );
};

export default AboutPage;
