import { Hero, Featured, Services, Testimonials } from "../components";

const HomePage = () => {
  return (
    <main className="home">
      <Hero />
      <Featured />
      <Services />
      {/* <Testimonials /> */}
    </main>
  );
};

export default HomePage;
