import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Product = ({ id, img, name }) => {
  return (
    <article className="product">
      <div className="product__header">
        <img className="product__img" src={img} alt={name} />
      </div>
      <div className="product__body">
        <h5 className="product__title">{name}</h5>
        <Link to={`/products/${id}`} className="product__btn">
          <BsSearch />
        </Link>
      </div>
    </article>
  );
};

export default Product;
