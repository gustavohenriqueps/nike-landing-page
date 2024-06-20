import { useRef } from "react";
import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
import useScrollReveal from "../hooks/useScrollReveal";

const PopularProducts = () => {
  const revealRef = useRef<HTMLDivElement>(null);

  useScrollReveal(revealRef, {
    origin: "left",
    distance: "150px",
    duration: 1500,
    delay: 200,
  });

  return (
    <section
      id="products"
      className="py-12 mt-8 px-[6%] max-w-screen-2xl min-h-screen m-auto flex flex-col"
    >
      <div ref={revealRef} className="flex flex-col gap-6">
        <h2 className="font-poppins text-5xl font-semibold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="font-montserrat text-lg text-neutral-500 max-w-sm">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 ">
        {products.map((product) => (
          <PopularProductCard
            imgURL={product.imgURL}
            name={product.name}
            category={product.category}
            price={product.price}
            priceOff={product.priceOff}
            discount={product.discount}
            key={product.name}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
