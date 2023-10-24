import { useState } from "react";
import { imageList } from "../utils";
import { socialLinks } from "../utils";
import { useEffect } from "react";

const Hero = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const nextImg = () => {
    setCurrentImg((prevImg) => {
      let newImg = prevImg + 1;
      return newImg > imageList.length - 1 ? 0 : newImg;
    });
  };
  useEffect(() => {
    let sliderId = setInterval(() => {
      nextImg();
    }, 3000);
    return () => clearInterval(sliderId);
  }, []);
  return (
    <section className="hero">
      <div className="content--center hero--center">
        <div className="hero__carousel">
          {imageList.map(({ id, img }, index) => {
            return (
              <img
                key={id}
                style={{
                  transform: `translateX(${(index - currentImg) * 100}%)`,
                }}
                className="carousel__img"
                src={img}
                alt=""
              />
            );
          })}
          <div className="carousel__buttons">
            {imageList.map((_, index) => {
              return (
                <div
                  key={index}
                  className={
                    index === currentImg
                      ? "carousel__btn carousel__btn--active"
                      : "carousel__btn"
                  }
                ></div>
              );
            })}
          </div>
        </div>
        <div className="hero__body">
          <h1 className="hero__title">nyabemba design point</h1>
          <p className="hero__desc">
            Stamps, Seals, Signages, Item branding, Engraving, logos, frames,
            posters, flyers, banners, bulk printing, and any other customized
            design needs as stated by the client.
          </p>
          <div className="hero__buttons">
            <div className="hero__links">
              {socialLinks.map(({ id, icon }) => {
                return (
                  <a
                    key={id}
                    className="hero__link"
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
            <button className="btn btn--secondary">view products</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
