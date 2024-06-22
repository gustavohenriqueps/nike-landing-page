import { StarFilled } from "@ant-design/icons";
import useScrollReveal from "../hooks/useScrollReveal";
import { useRef } from "react";

interface TestimonialsCardProps {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

const TestimonialsCard = ({
  imgURL,
  customerName,
  rating,
  feedback,
}: TestimonialsCardProps) => {
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
      className="flex flex-col items-center gap-4 text-center"
    >
      <img src={imgURL} alt="customer1" width={120} className="rounded-full" />

      <p className="text-lg font-montserrat text-neutral-500 max-w-sm">
        {feedback}
      </p>

      <div className="text-lg flex gap-1 text-coral-red">
        <StarFilled />
        <StarFilled />
        <StarFilled />
        <StarFilled />
        <div className="relative">
          <StarFilled />
          <div className="absolute top-0 right-0 w-[8.5px] h-full bg-neutral-50"></div>
        </div>
        <span className="text-neutral-500">({rating})</span>
      </div>

      <h3 className="text-3xl font-poppins font-semibold">{customerName}</h3>
    </div>
  );
};

export default TestimonialsCard;

// imgURL: customer2,
// customerName: "Lota Mongeskar",
// rating: 4.5,
// feedback:
//   "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
// },
// ];
