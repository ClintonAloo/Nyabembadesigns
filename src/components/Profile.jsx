const Profile = ({ img, name, role, socials }) => {
  return (
    <article className="profile">
      <div className="profile__header">
        <img src={img} alt={name} className="profile__img" />
      </div>
      <div className="profile__body">
        <h5 className="profile__name">{name}</h5>
        <span className="profile__role">{role}</span>
      </div>
      <div className="profile__footer">
        {socials.map(({ id, icon, url }) => {
          return (
            <a key={id} className="profile__link" href={url}>
              {icon}
            </a>
          );
        })}
      </div>
    </article>
  );
};

export default Profile;
