import "./Maquina.scss";
import maquina from "../../assets/MAQUINA.png";
import { motion } from "framer-motion";

const leftBlockVariants = {
  hidden: { opacity: 0, y: 40, x: -20 },
  visible: { opacity: 1, y: 0, x: 0 },
};

const rightBlockVariants = {
  hidden: { opacity: 0, y: 40, x: 20 },
  visible: { opacity: 1, y: 0, x: 0 },
};

function Maquina() {
  return (
    <section className="maquina">
      <div className="maquina__layout">
        {/* COLUMNA IZQUIERDA */}
        <div className="maquina__col maquina__col--left">
          <motion.div
            className="maquina__block"
            variants={leftBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6, once: false }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2>Sellado de alta frecuencia</h2>
            <p>
              Diseñada para procesos exigentes donde la precisión y la
              repetibilidad son clave en cada ciclo de producción.
            </p>
          </motion.div>

          <motion.div
            className="maquina__block"
            variants={leftBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6, once: false }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2>Producción continua</h2>
            <p>
              Estabilidad térmica y eléctrica pensada para jornadas largas sin
              sacrificar calidad de sellado.
            </p>
          </motion.div>

          <motion.div
            className="maquina__block"
            variants={leftBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6, once: false }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2>Seguridad y control</h2>
            <p>
              Panel intuitivo, sensores de protección y monitoreo constante del
              proceso para reducir errores humanos.
            </p>
          </motion.div>
        </div>

        {/* COLUMNA CENTRAL: MÁQUINA */}
        <div className="maquina__col maquina__col--center">
          <div className="maquina__image-wrapper">
            <h1>CARPERA HF 8KW</h1>
            <motion.img
  src={maquina}
  alt="Máquina CARPERA HF 8KW"
  className="maquina__image"
  animate={{
    y: [0, -12, 0],
    scale: [1, 1.02, 1],
  }}
  transition={{
    duration: 5,
    ease: "easeInOut",
    repeat: Infinity,
  }}
/>

            <p className="maquina__subtitle">
              La solución definitiva para sellado industrial de alta exigencia.
            </p>

            <div className="botones_maquina">
              <button>Ver ficha técnica</button>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="maquina__col maquina__col--right">
          <motion.div
            className="maquina__block"
            variants={rightBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6, once: false }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2>8 kW de potencia</h2>
            <p>
              Potencia optimizada para sellar materiales exigentes sin dañar la
              estructura del producto.
            </p>
          </motion.div>

          <motion.div
            className="maquina__block"
            variants={rightBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6, once: false }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2>Adaptable a tu línea</h2>
            <p>
              Configurable a diferentes formatos, tiempos de ciclo y flujos de
              producción ya existentes.
            </p>
          </motion.div>

          <motion.div
            className="maquina__block"
            variants={rightBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6, once: false }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2>Listos para crecer</h2>
            <p>
              Pensada para integrarse a líneas automatizadas y proyectos de
              expansión futura.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Maquina;
