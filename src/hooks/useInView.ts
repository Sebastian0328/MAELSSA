import { useEffect, useRef, useState } from "react";

export function useInView() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 👇 Cuando entra en la zona → true
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            // 👇 Cuando sale de la zona → false
            setIsInView(false);
          }
        });
      },
      {
        // 💡 Ajustamos cuándo “cuenta” como visible:
        // threshold 0.6 = el 60% del bloque debe estar visible
        threshold: 0.6,
        // rootMargin empuja un poco la zona activa hacia arriba/abajo
        // por ejemplo: empieza a animar cuando esté más cerca del centro
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}
