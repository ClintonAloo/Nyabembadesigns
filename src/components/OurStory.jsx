import storyImg from "../assets/stamp-img-1.jpg";
import Title from "./Title";

const OurStory = () => {
  return (
    <section className="story">
      <div className="content--center story--center">
        <div className="img__container">
          <img className="story__img" src={storyImg} alt="" />
        </div>
        <div className="story__body">
          <Title title="Our Story" />
          <p className="story__text">
            Nyabemba Design Point was born from a shared passion for creativity
            and a desire to make a mark in the world of design. Our journey
            began when two visionary designers, Sarah Nyabemba and Michael
            Point, crossed paths while working at a prestigious advertising
            agency. They recognized their shared vision for innovative branding
            and decided to combine their expertise to create something
            extraordinary. With a small team of like-minded artists and
            marketers, they founded Nyabemba Design Point. What started as a
            humble venture in a tiny studio has now evolved into a thriving
            brand design company with a global clientele. Our commitment to
            pushing the boundaries of creativity and delivering exceptional
            design solutions remains at the core of our identity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
