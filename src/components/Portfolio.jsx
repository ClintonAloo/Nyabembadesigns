import SinglePortfolio from "./SinglePortfolio";
import Title from "./Title";
import { products } from "../utils";
const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="content--center portfolio--center">
        <Title title="Portfolio" />
        <div className="portfolio__grid">
          {products.map((product) => {
            return <SinglePortfolio key={product.id} {...product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
