import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

interface ScrollRevealConfig {
  origin?: string;
  distance?: string;
  duration?: number;
  delay?: number;
  [key: string]: any;
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
