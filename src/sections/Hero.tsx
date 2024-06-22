import { ArrowRightOutlined } from "@ant-design/icons";
import { statistics } from "../constants";
import { bgHero } from "../assets/images";
import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import ButtonPrimary from "../components/ButtonPrimary";

const Hero = () => {
  const revealRef = useRef<HTMLDivElement>(null);
  const revealRef2 = useRef<HTMLDivElement>(null);

  useScrollReveal(revealRef, {
    origin: "left",
    distance: "150px",
    duration: 1500,
    delay: 250,
  });

  useScrollReveal(revealRef2, {
    origin: "left",
    distance: "100px",
    duration: 1500,
    delay: 250,
  });

  return (
    <section
      id="home"
      className="flex flex-col xl:flex-row gap-12 max-w-screen-2xl m-auto px-[6%] min-h-screen"
    >
      <div
        ref={revealRef}
        className="flex flex-col py-6 gap-6 lg:gap-8 justify-start lg:w-3/5"
      >
        <p className="text-coral-red text-lg lg:text-xl font-poppins">
          Our Summer Collections
        </p>

        <h1 className="text-7xl lg:text-8xl font-poppins font-bold relative">
          <span className="lg:whitespace-nowrap lg:bg-white pr-6 rounded-lg">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red">Nike</span> Shoes
        </h1>

        <p className="text-lg lg:text-xl font-montserrat text-neutral-500 max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <div>
          <ButtonPrimary
            backgroundColor="bg-coral-red"
            hoverBackgroundColor="hover:bg-gradient-to-r from-coral-red to-coral-red-hover"
            textColor="text-neutral-50"
            flex={true}
            label="Shop Now"
            children={
              <ArrowRightOutlined className="bg-neutral-50 rounded-full text-coral-red p-1" />
            }
          />
        </div>

        <div className="flex flex-wrap w-full gap-16 mt-8">
          {statistics.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <h2 className="text-5xl font-semibold font-poppins">
                {stat.value}
              </h2>
              <h3 className="text-3xl text-neutral-700 font-medium">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div ref={revealRef2}>
        <img src={bgHero} alt="shoe image" className="w-full h-full bg-cover" />
      </div>
    </section>
  );
};

export default Hero;
