import Title from "./Title";
import { products } from "../utils";
import Product from "./Product";
const FeaturedProducts = () => {
  return (
    <section className="featured">
      <div className="content--center featured--center">
        <Title title="featured" />
        <div className="featured__grid">
          {products
            .filter((product) => product.featured)
            .map((product) => {
              return <Product key={product.id} {...product} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
