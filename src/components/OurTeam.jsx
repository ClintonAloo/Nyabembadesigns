import Profile from "./Profile";
import Title from "./Title";
import { teamProfile } from "../utils";

const OurTeam = () => {
  return (
    <section className="team">
      <div className="content--center team--center">
        <Title title="Our Team" />
        <div className="team__grid">
          {teamProfile.map((profile) => {
            return <Profile key={profile.id} {...profile} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
