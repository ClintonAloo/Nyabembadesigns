import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner">
      <h5 className="banner__link">
        <span>
          <Link to="/">home</Link> /{" "}
        </span>
        products
      </h5>
    </div>
  );
};

export default Banner;
