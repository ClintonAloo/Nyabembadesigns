import { Banner, Filters, Products } from "../components";

const ProductsPage = () => {
  return (
    <main className="products-page">
      <Banner />
      <section className="products-page--center content--center">
        <Filters />
        <Products />
      </section>
    </main>
  );
};

export default ProductsPage;
