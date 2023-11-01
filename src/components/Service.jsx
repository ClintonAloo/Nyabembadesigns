const Service = ({ img, icon, title, text, index }) => {
  return (
    <article className="service">
      <div className="service__img">
        <img src={img} alt="" />
      </div>
      <div
        style={{ order: index === 1 ? "-1" : "1" }}
        className="service__body"
      >
        <div className="service__header">
          <div className="service__icon">{icon}</div>
          <h5 className="service__title">{title}</h5>
        </div>
        <div className="service__footer">
          <p className="service__text">{text}</p>
        </div>
      </div>
    </article>
  );
};

export default Service;
