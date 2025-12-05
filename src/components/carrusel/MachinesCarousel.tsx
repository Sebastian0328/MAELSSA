import { useState } from "react";
import { motion } from "framer-motion";
import "./MachinesCarousel.scss";
import NeumaticaImg from "../../assets/maquina neumatica.png";
import HidraulicaENueImg from "../../assets/maquina Neumatica e hidraulica.png";
import capera from "../../assets/pequeña.png";
import repujadora from "../../assets/repujadora.png";

export type Machine = {
  id: number;
  title: string;
  subtitle: string;
  image?: string;
  description?: string;
};

const MACHINES: Machine[] = [
  {
    id: 1,
    title: "Neumática 6.5 / 7 kW",
    subtitle:
      "Experimenta la eficiencia en el sellado con nuestras máquinas de 6,5 kW y 7 kW, diseñadas para ofrecer versatilidad y precisión. Con opciones neumáticas, estas herramientas están disponibles tanto con bandejas como sin ellas, adaptándose a tus necesidades específicas.",
    image: NeumaticaImg,
    description:
      "Potencias Variadas: Elige entre 6,5 kW y 7 kW para satisfacer diferentes requisitos de sellado. Operación Neumática: Suave y controlada, ideal para trabajos en una variedad de materiales. Opciones de Bandejas: Disponible con y sin bandejas para adaptarse a la diversidad de proyectos de sellado. Versatilidad Comprobada: Apta para diversos materiales, garantizando resultados consistentes.Control Preciso: Ajusta fácilmente la potencia para obtener sellados perfectos en cada aplicación.",
  },
  {
    id: 2,
    title: "Repujadora Hidráulica",
    subtitle:
      "Explora la innovación en el arte del repujado con nuestra máquina de 6.5 kW, ofreciendo versatilidad única al repujar capelladas de calzado y balones. Con opciones neumáticas e hidráulicas, esta herramienta está diseñada para brindar resultados excepcionales, ya sea con bandejas o sin ellas.",
    image: repujadora,
    description:
      "Potencia Dual: Combina la eficiencia de 6.5 kW con opciones neumáticas e hidráulicas para adaptarse a distintos materiales y proyectos. Repujado Preciso: Logra detalles finos en capelladas de calzado y balones, garantizando un acabado de calidad. Operación Neumática/Hidráulica: Flexibilidad para elegir el sistema que mejor se ajuste a tus necesidades específicas. Opciones de Bandejas: Disponible tanto con bandejas como sin ellas, proporcionando versatilidad en cada aplicación. Versatilidad Extrema: Repuja capelladas de calzado y balones con precisión, destacando en una variedad de materiales.",
  },
  {
    id: 3,
    title: "Máquina Neumática e Hidráulica",
    subtitle:
      "Sumérgete en la excelencia del repujado con nuestra máquina, disponible en potencias de 6.5 kW, 7 kW o 8 kW. Diseñada para repujar capelladas de calzado y balones, ofrece opciones neumáticas e hidráulicas, brindando versatilidad incomparable tanto con bandejas como sin ellas.",
    image: HidraulicaENueImg,
    description:
      "Potencias Variables: Elige entre 6.5 kW, 7 kW o 8 kW, adaptándote a los requisitos específicos de tu proyecto. Repujado Preciso: Logra detalles finos en capelladas de calzado y balones, asegurando un acabado de alta calidad. Operación Neumática/Hidráulica: Flexibilidad para seleccionar el sistema que mejor se ajuste a tus necesidades y materiales. Opciones de Bandejas: Disponible tanto con bandejas como sin ellas, ofreciendo versatilidad en cada aplicación. Versatilidad Extrema: Repuja capelladas y balones con precisión, destacando en una variedad de materiales.",
  },
  {
    id: 4,
    title: "Máquina Carpera",
    subtitle:
      "Experimenta la revolución en el sellado de carpas con nuestra máquina de alta frecuencia, diseñada para elevar los estándares de durabilidad y eficiencia. Esta innovadora herramienta combina potencia y precisión para garantizar sellados impecables en tejidos resistentes.",
    image: capera,
    description:
      "Alta Frecuencia: Tecnología avanzada que asegura sellados fuertes y uniformes.Versatilidad: Adaptada para una variedad de tejidos, desde lonas hasta materiales más gruesos. Control Preciso: Ajusta fácilmente la potencia para satisfacer diferentes requisitos de sellado. Sistema Neumático/Hidráulico: Flexibilidad de elección entre sistemas neumáticos e hidráulicos para adaptarse a tus necesidades específicas. Eficiencia Energética: Disponible en potencias de 6 kW y 8 kW para un rendimiento óptimo.",
  },
];

type MachinesCarouselProps = {
  onSelectMachine?: (machine: Machine) => void;
};

type Position = "prev" | "current" | "next";

function MachinesCarousel({ onSelectMachine }: MachinesCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const total = MACHINES.length;

  const showNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const showPrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const getAnimation = (position: Position) => {
    switch (position) {
      case "current":
        return { scale: 1, opacity: 1, y: 0 };
      case "prev":
      case "next":
        return { scale: 0.9, opacity: 0.7, y: 10 };
    }
  };

  // índices calculados para prev / current / next
  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  const visibleCards: { machine: Machine; position: Position }[] = [
    { machine: MACHINES[prevIndex], position: "prev" },
    { machine: MACHINES[index], position: "current" },
    { machine: MACHINES[nextIndex], position: "next" },
  ];

  return (
    <section className="machines" id="Machines">
      <div className="machines__header">
        <h2>Otras máquinas de la línea</h2>
        <p>Explora más equipos diseñados para producción industrial exigente.</p>
      </div>

      <div className="machines__carousel">
        {/* Flecha izquierda */}
        <button
          type="button"
          className="machines__arrow machines__arrow--left"
          onClick={showPrev}
          aria-label="Ver máquina anterior"
        >
          ‹
        </button>

        {/* Viewport animado lateralmente + swipe */}
        <motion.div
          className="machines__viewport"
          initial={{ x: direction > 0 ? 60 : -60, opacity: 0.95 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            const swipe = info.offset.x;

            if (swipe < -60) {
              // deslizó hacia la izquierda → siguiente
              setDirection(1);
              setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
            } else if (swipe > 60) {
              // deslizó hacia la derecha → anterior
              setDirection(-1);
              setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
            }
          }}
        >
          {visibleCards.map(({ machine, position }) => {
            const target = getAnimation(position);

            return (
              <motion.article
                key={machine.id}
                className={`machines__card machines__card--${position}`}
                initial={
                  position === "current"
                    ? { opacity: 0, scale: 0.85, y: 25 }
                    : target
                }
                animate={target}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileHover={
                  position === "current"
                    ? { scale: 1.03, y: -6 }
                    : undefined
                }
                onClick={() => onSelectMachine?.(machine)}
              >
                <div className="machines__image-placeholder">
                  {machine.image && (
                    <img
                      src={machine.image}
                      alt={machine.title}
                      loading="lazy"
                       decoding="async"
                      className="machines__image"
                    />
                  )}
                  <div className="machines__image-overlay" />
                </div>

                <div className="machines__card-body">
                  <h3>{machine.title}</h3>
                  {/* <p>{machine.subtitle}</p> */}

                  <div className="machines__card-actions">
                    <button className="machines__btn machines__btn--primary">
                      Encargar
                    </button>
                    <button
                      className="machines__btn machines__btn--ghost"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectMachine?.(machine);
                      }}
                    >
                      Saber más
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Flecha derecha */}
        <button
          type="button"
          className="machines__arrow machines__arrow--right"
          onClick={showNext}
          aria-label="Ver siguiente máquina"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default MachinesCarousel;
