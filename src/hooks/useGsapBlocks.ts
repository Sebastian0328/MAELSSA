import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapStepBlocks = (selector: string) => {
  useEffect(() => {
    const blocks = gsap.utils.toArray<HTMLElement>(selector);

    // Estado inicial: todos ocultos
    gsap.set(blocks, { opacity: 0, y: 40 });

    blocks.forEach((block, index) => {
      ScrollTrigger.create({
        trigger: block,
        start: "top 70%",   // cuando el bloque llegue a esta zona...
        end: "top 30%",     // ...y mientras esté en este rango
        onEnter: () => setActive(index),
        onEnterBack: () => setActive(index),
      });
    });

    function setActive(activeIndex: number) {
      blocks.forEach((b, i) => {
        if (i === activeIndex) {
          gsap.to(b, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          });
        } else {
          gsap.to(b, {
            opacity: 0,
            y: 40,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [selector]);
};
