import { useRef } from "react";
import TestimonialsCard from "../components/TestimonialsCard";
import { reviews } from "../constants";
import useScrollReveal from "../hooks/useScrollReveal";

const Testimonials = () => {
  const revealRef = useRef<HTMLDivElement>(null);

  useScrollReveal(revealRef, {
    origin: "left",
    distance: "150px",
    duration: 1500,
    delay: 250,
  });

  return (
    <section
      id="about-us"
      className="flex flex-col gap-8 py-20 px-[6%] m-auto max-w-screen-2xl min-h-screen bg-neutral-50 shadow"
    >
      <div
        ref={revealRef}
        className="w-full items-center flex flex-col gap-4 text-center pb-20"
      >
        <h2 className="text-5xl font-poppins font-semibold">
          What Our <span className="text-coral-red">Customers </span> Say?
        </h2>

        <p className="text-lg font-montserrat text-neutral-500 max-w-lg">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>

      <div className="flex flex-wrap justify-evenly max-lg:gap-20 gap-8">
        {reviews.map((review) => (
          <TestimonialsCard
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
            key={review.customerName}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
