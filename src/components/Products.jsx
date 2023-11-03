import { products } from "../utils";
import Product from "./Product";

const Products = () => {
  return (
    <section className="products">
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </section>
  );
};

export default Products;
