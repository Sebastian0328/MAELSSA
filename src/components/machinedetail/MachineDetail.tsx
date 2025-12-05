import { AnimatePresence, motion } from "framer-motion";
import "./MachineDetail.scss";
import type { Machine } from "../carrusel/MachinesCarousel";

type MachineDetailProps = {
  machine: Machine | null;
  onClose: () => void;
};

function MachineDetail({ machine, onClose }: MachineDetailProps) {
  return (
    <AnimatePresence>
      {machine && (
        <motion.div
          className="machine-detail__overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="machine-detail__panel"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <header className="machine-detail__header">
              <div>
                <h2>{machine.title}</h2>
                <p className="machine-detail__subtitle">
                  {machine.subtitle}
                </p>
              </div>
              <button
                type="button"
                className="machine-detail__close"
                onClick={onClose}
              >
                ✕
              </button>
            </header>

            {/* CUERPO: imagen + info */}
            <div className="machine-detail__body">
              {/* Columna imagen */}
              <div className="machine-detail__media">
                {machine.image ? (
                  <img
                    src={machine.image}
                    alt={machine.title}
                    className="machine-detail__image"
                  />
                ) : (
                  <div className="machine-detail__image-placeholder" />
                )}

                <span className="machine-detail__tag">
                  Equipo de sellado industrial
                </span>
              </div>

              {/* Columna texto */}
              <div className="machine-detail__info">
                <p className="machine-detail__description">
                  {machine.description ??
                    "Equipo diseñado para procesos industriales donde la estabilidad y la precisión son clave."}
                </p>

                {/* Bloque extra opcional, pero le da cuerpo */}
                <div className="machine-detail__section">
                  <h3>Aplicaciones recomendadas</h3>
                  <ul>
                    <li>Producción continua con ciclos repetitivos.</li>
                    <li>Sellado de materiales exigentes sin perder calidad.</li>
                    <li>Entornos donde la precisión y la seguridad son prioridad.</li>
                  </ul>
                </div>

                <div className="machine-detail__actions">
                  <button className="machine-detail__btn machine-detail__btn--primary">
                    Solicitar cotización
                  </button>
                  <button className="machine-detail__btn machine-detail__btn--ghost">
                    Descargar ficha técnica
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MachineDetail;
