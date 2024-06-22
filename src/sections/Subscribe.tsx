import { useRef } from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import useScrollReveal from "../hooks/useScrollReveal";

const Subscribe = () => {
  const revealRef = useRef<HTMLDivElement>(null);

  useScrollReveal(revealRef, {
    origin: "left",
    distance: "150px",
    duration: 1500,
    delay: 250,
  });

  return (
    <section
      ref={revealRef}
      id="contact-us"
      className="py-20 px-[6%] m-auto max-w-screen-2xl flex flex-col lg:flex-row gap-8 justify-evenly items-center"
    >
      <h3 className="text-5xl font-poppins font-semibold leading-tight lg:max-w-lg">
        Sign Up For <span className="text-coral-red">Updates</span> & Newsletter
      </h3>

      <div className="flex max-sm:flex-col items-center gap-6 sm:border-2 sm:p-2 rounded-full w-full lg:max-w-[40%]">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="rounded-full p-4 w-full max-sm:border-2"
        />

        <div className="w-full lg:max-w-[35%]">
          <ButtonPrimary
            backgroundColor="bg-coral-red"
            hoverBackgroundColor="hover:bg-gradient-to-r from-coral-red to-coral-red-hover"
            textColor="text-neutral-50"
            label="Sign Up"
            fullWidth={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
