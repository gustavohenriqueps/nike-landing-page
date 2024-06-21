import { useRef } from "react";
import { grid1, grid2, grid3 } from "../assets/images";
import ButtonPrimary from "../components/ButtonPrimary";
import useScrollReveal from "../hooks/useScrollReveal";
import { ArrowRightOutlined } from "@ant-design/icons";

const SpecialOffer = () => {
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
    <section className="flex flex-col justify-between items-center lg:flex-row-reverse py-20 px-[6%] m-auto max-w-screen-2xl min-h-screen gap-6">
      <div ref={revealRef} className="flex flex-1 flex-col gap-12">
        <h2 className="text-6xl font-semibold font-poppins">
          <span className="text-coral-red">Special </span>Offer
        </h2>

        <p className="text-neutral-600 text-lg font-montserrat">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className="text-neutral-600 text-lg font-montserrat">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="flex gap-4 flex-wrap">
          <ButtonPrimary
            backgroundColor="bg-coral-red"
            textColor="text-neutral-50"
            flex="flex"
            label="Shop Now"
            children={
              <ArrowRightOutlined className="bg-neutral-50 rounded-full text-coral-red p-1" />
            }
          />
          <ButtonPrimary
            backgroundColor="bg-neutral-50"
            textColor="text-neutral-900"
            label="View Details"
            border="border border-neutral-900"
          />{" "}
        </div>
      </div>

      <div
        ref={revealRef2}
        className="flex-1 flex justify-center items-center "
      >
        <div className="grid grid-cols-2 gap-4">
          <img
            src={grid1}
            alt=""
            width={280}
            className="object-contain rounded-3xl shadow-xl"
          />
          <img
            src={grid2}
            alt=""
            width={280}
            className="object-contain rounded-3xl shadow-xl"
          />
          <img
            src={grid3}
            alt=""
            width={580}
            className="object-contain rounded-3xl shadow-xl col-span-2 "
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
