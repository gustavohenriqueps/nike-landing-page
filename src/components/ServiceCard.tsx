import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

interface ServiceCardProps {
  imgURL: string;
  label: string;
  subtext: string;
}

const ServiceCard = ({ imgURL, label, subtext }: ServiceCardProps) => {
  const revealRef = useRef<HTMLDivElement>(null);

  useScrollReveal(revealRef, {
    origin: "left",
    distance: "150px",
    duration: 1500,
    delay: 250,
  });

  return (
    <div
      ref={revealRef}
      className="flex flex-col flex-1 gap-4 sm:w-[350px] w-full rounded-[20px] shadow-xl px-10 py-16"
    >
      <div className="bg-coral-red h-10 w-10 flex justify-center items-center rounded-full">
        <img src={imgURL} alt={label} width={24} />
      </div>
      <h3 className="font-poppins text-3xl font-semibold">{label}</h3>
      <p className="font-montserrat text-neutral-600 text-lg">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
