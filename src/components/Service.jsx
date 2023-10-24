const Service = ({ icon, title, text }) => {
  return (
    <article className="service">
      <div className="service__icon">{icon}</div>
      <h5 className="service__title">{title}</h5>
      <p className="service__text">{text}</p>
    </article>
  );
};

export default Service;
