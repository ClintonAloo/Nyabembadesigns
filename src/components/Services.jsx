import { services } from "../utils";
import Title from "./Title";
import Service from "./Service";

const Services = () => {
  return (
    <section className="services">
      <div className="content--center services--center">
        <Title title="services" />
        <div className="services__grid">
          {services.map((service, index) => {
            return <Service key={service.id} {...service} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
