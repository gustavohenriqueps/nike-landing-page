import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="flex justify-center flex-wrap gap-10 py-20 px-[6%] m-auto  max-w-screen-2xl max-lg:mt-20">
      {services.map((service) => (
        <ServiceCard
          imgURL={service.imgURL}
          label={service.label}
          subtext={service.subtext}
          key={service.label}
        />
      ))}
    </section>
  );
};

export default Services;
