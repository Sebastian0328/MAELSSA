import { useState, useEffect } from "react";
import "./Splash.scss";
import icono from "../../assets/icono.png"

type SplashProps = {
  onClose: () => void;
};

const Splash = ({ onClose }: SplashProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detectar si es dispositivo táctil
  useEffect(() => {
    const hasTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ;

    setIsTouchDevice(hasTouch);
  }, []);

  // Seguir el mouse SOLO si NO es táctil
  useEffect(() => {
    if (isTouchDevice) return;

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isTouchDevice]);

  const handleClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 700);
  };

  return (
    <div
      className={`splash ${isClosing ? "splash--hide" : ""}`}
      onClick={handleClick}
    >
      {/* DESKTOP: LUZ QUE SIGUE AL MOUSE */}
      {!isTouchDevice && (
        <div
          className="cursor-light"
          style={{
            left: pos.x,
            top: pos.y,
          }}
        />
      )}

      {/* MÓVIL/TABLET: LUZ CENTRADA CON PULSO */}
      {isTouchDevice && (
        <div className="cursor-light cursor-light--mobile" />
      )}

      <div className="splash__content">
        <div><img src={icono} alt="icono" width="100px" /></div>
        <div className="title">
          <h2>Sellado de Alta Frecuencia</h2>
          <h1>Precisión que Construye Futuro</h1>
          <button className="boton">
            <p>ENTRAR AL SITIO</p>
          </button>
        </div>

        <div className="info">
          <div>
            <h2>+5</h2>
            <p>Años sellando 
              la calidad de la industria</p>
          </div>
          <div>
            <h2>8KW</h2>
            <p>Potencia maxima</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Splash;



