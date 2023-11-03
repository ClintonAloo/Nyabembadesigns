import { products } from "../utils";

const Filters = () => {
  let categories = products.map(({ category }) => category);
  categories = ["all", ...new Set(categories)];
  return (
    <section className="filters">
      <div className="filters__header">
        <input
          type="text"
          name=""
          id=""
          className="filters__input"
          placeholder="search"
        />
        <select name="" id="" className="filters__sort">
          <option value="a-z">a-z(asc)</option>
          <option value="z-a">a-z(desc)</option>
        </select>
      </div>
      <div className="categories">
        <div className="categories__title">
          <div className="categories__text">categories</div>
          <hr />
        </div>
        {categories.map((category) => {
          return (
            <button
              key={category}
              className={
                category === "branding"
                  ? "categories__btn btn categories__btn--active"
                  : "categories__btn btn"
              }
            >
              {category}
            </button>
          );
        })}
      </div>
      <button className="btn btn--secondary clear__btn">clear filters</button>
    </section>
  );
};

export default Filters;
