const SinglePortfolio = ({ img, title }) => {
  return (
    <article className="portfolio__card">
      <div className="card__header">
        <img className="card__img" src={img} alt="" />
      </div>
      <div className="card__body">
        <h5 className="card__title">{title}</h5>
      </div>
    </article>
  );
};

export default SinglePortfolio;
