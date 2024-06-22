import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

interface ScrollRevealConfig {
  origin?: string;
  distance?: string;
  duration?: number;
  delay?: number;
}

const useScrollReveal = (
  ref: React.RefObject<HTMLElement>,
  config: ScrollRevealConfig
) => {
  useEffect(() => {
    if (ref.current) {
      ScrollReveal().reveal(ref.current, config);
    }
  }, [ref, config]);
};

export default useScrollReveal;
