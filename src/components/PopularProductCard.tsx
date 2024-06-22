import { StarFilled } from "@ant-design/icons";
import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

interface PopularProductCardProps {
  imgURL: string;
  name: string;
  category: string;
  price: string;
  priceOff: string;
  discount: string;
}

const PopularProductCard = ({
  imgURL,
  name,
  category,
  price,
  priceOff,
  discount,
}: PopularProductCardProps) => {
  const revealRef = useRef<HTMLDivElement>(null);

  useScrollReveal(revealRef, {
    origin: "left",
    distance: "150px",
    duration: 1500,
    delay: 250,
  });

  return (
    <div ref={revealRef} className="font-poppins lg:text-lg cursor-pointer">
      <img src={imgURL} alt={name} width={360} />
      <div className="flex flex-col gap-2 pt-2">
        <h3>{name}</h3>
        <span className="text-neutral-600 text-sm lg:text-base">
          {category}
        </span>

        <div className="flex gap-2">
          <span>{price}</span>
          <span className="text-neutral-500 font line-through">{priceOff}</span>
          <span className="text-green-700">{discount}</span>
        </div>

        <div className="flex gap-1">
          <div className="flex gap-1 text-coral-red">
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
          </div>
          <span className="text-neutral-600">(5.0)</span>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
