import "./Maintenance.scss";
import { useRef, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
// import maintenanceVideo from "../../videos/fondo.mp4";
import iconPreventivo from "../../assets/mantenimiento_preventivo2.png";
import iconAjustes from "../../assets/ajuste.png";
import iconPiezas from "../../assets/cambio_de_piezas.png";
import iconCalibracion from "../../assets/calibracion.png";
import iconReparaciones from "../../assets/reparaciones.png"; 

const chipsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const chipVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // curva suave tipo "easeOut"
    },
  },
};


function Maintenance() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          try {
            if (entry.isIntersecting) video.play();
            else video.pause();
          } catch {}
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);


  const services = [
  {
    id: "preventivo",
    title: "Mantenimiento preventivo",
    description: "Evita fallas y prolonga la vida útil con mantenimientos programados.",
    icon: iconPreventivo,
    slug: "mantenimiento-preventivo"
  },
  {
    id: "ajustes",
    title: "Ajustes de alta frecuencia",
    description: "Optimización de parámetros para mejorar el sellado y rendimiento.",
    icon: iconAjustes,
    slug: "ajustes-alta-frecuencia"
  },
  {
    id: "piezas",
    title: "Cambio de piezas críticas",
    description: "Reemplazo de componentes esenciales para evitar daños mayores.",
    icon: iconPiezas,
    slug: "cambio-de-piezas"
  },
  {
    id: "calibracion",
    title: "Calibración profesional",
    description: "Alineación técnica para mantener precisión y potencia constante.",
    icon: iconCalibracion,
    slug: "calibracion-profesional"
  },
  {
    id: "reparaciones",
    title: "Reparaciones completas",
    description: "Diagnóstico y solución integral para fallas menores y mayores.",
    icon: iconReparaciones,
    slug: "reparaciones"
  }
];


  return (
    <section className="maintenance" id="mantenimiento">
      {/* 🎥 VIDEO DE FONDO */}
      {/* <video
        ref={videoRef}
        className="maintenance__video"
        muted
        loop
        playsInline
      >
        <source src={maintenanceVideo} type="video/mp4" />
      </video>

      {/* OSCURECEDOR */}
      {/* <div className="maintenance__overlay"></div> */} 

      {/* CONTENIDO ENCIMA DEL VIDEO */}
      <div className="maintenance__content">
        <div className="texto">
<h2 className="maintenance__eyebrow">MANTENIMIENTOS</h2>

        <h1 className="maintenance__title">
          Prolongan la Vida  de tu Máquina
        </h1>

        </div>
       <motion.div
          className="maintenance__chips"
          variants={chipsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="maintenance__chip"
              variants={chipVariants}
              whileHover={{
                scale: 1.03,
                y: -4,
                boxShadow: "0 26px 55px rgba(0,0,0,0.75)",
              }}
              transition={{ duration: 0.25 }}
            >
              <div className="maintenance__chip-text">
                <h3>{service.title}</h3>
              </div>

              <div className="maintenance__chip-icon">
                <img src={service.icon} alt={service.title} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="button">
            
        {/* <span className="maintenance__label">SERVICIOS</span> */}
<button className="maintenance__cta" onClick={() => {
    window.open(
      "https://wa.me/573214617936?text=Hola%2C%20necesito%20solicitar%20mantenimiento%20para%20mi%20m%C3%A1quina.%20%C2%BFPodr%C3%ADan%20ayudarme%3F"
    );
  }} >Solicitar mantenimiento</button>
        </div>

        

      </div>
    </section>
  );
}

export default Maintenance;
