import { useRef } from "react";
import { bgQuality } from "../assets/images";
import ButtonPrimary from "../components/ButtonPrimary";
import useScrollReveal from "../hooks/useScrollReveal";

const SuperQuality = () => {
  const revealRef = useRef<HTMLDivElement>(null);
  const revealRef2 = useRef<HTMLDivElement>(null);

  useScrollReveal(revealRef, {
    origin: "left",
    distance: "150px",
    duration: 1500,
    delay: 200,
  });

  useScrollReveal(revealRef2, {
    origin: "left",
    distance: "100px",
    duration: 1500,
    delay: 200,
  });

  return (
    <section className="py-20 px-[6%] max-w-screen-2xl min-h-screen m-auto flex flex-col lg:flex-row gap-8">
      <div
        ref={revealRef}
        className="flex flex-col gap-6 lg:w-3/5 justify-center"
      >
        <h2 className="font-poppins text-6xl font-semibold">
          We Provider You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>

        <p className="font-montserrat text-lg text-neutral-500">
          Ensuring premium comfort and style, our meticulously crafter footwer
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="font-montserrat text-lg text-neutral-500">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div>
          <ButtonPrimary
            backgroundColor="bg-coral-red"
            hoverBackgroundColor="hover:bg-gradient-to-r from-coral-red to-coral-red-hover"
            textColor="text-neutral-50"
            label="View Details"
          />
        </div>
      </div>

      <div ref={revealRef2}>
        <img src={bgQuality} alt="" width={570} height={522} />
      </div>
    </section>
  );
};

export default SuperQuality;
