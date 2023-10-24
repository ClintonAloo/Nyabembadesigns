import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="error">
      <div className="content--center">
        <h1 className="error__title">Error: 404</h1>
        <p className="error__text">
          Sorry, the page you are looking for can not be found :(
        </p>
        <Link className="btn btn--secondary error__btn" to="/">
          Go back home
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;
