import "./Home.scss";
import videoFondo from "../../videos/soldadura.mp4";

function Home() {
  return (
    <section className="home">
      {/* Video de fondo */}
      <div className="home__video-wrapper">
        <div className="fondonegro">
<video
          className="home__video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoFondo} type="video/mp4" />
        </video>
        </div>
        

        {/* Capa oscura encima del video para que el texto se lea mejor */}
        <div className="home__overlay" />
      </div>

      {/* Contenido principal */}
      <div className="home__content">
        <div className="home__text">
          <h1>
            Máquinas de Sellado Profesional
          </h1>
          <h2>
            CARPERA HF 8&nbsp;kW
          </h2>
          <p className="home__description">
            Precisión, potencia y tecnología para sellar materiales exigentes
            sin detener tu línea de producción. Diseñada para operar en jornadas
            extensas con resultados consistentes en cada ciclo.
          </p>

          <div className="home__actions">
            <button className="boton"  onClick={() => {
    window.open(
      "https://wa.me/573214617936?text=Hola%2C%20deseo%20cotizar%20una%20m%C3%A1quina.%20%C2%BFMe%20puedes%20brindar%20m%C3%A1s%20informaci%C3%B3n%3F"
    );
  }}>
              Explorar máquinas
            </button>
            <button className="boton boton--secundario"  onClick={() => {
    window.open(
      "https://wa.me/573214617936?text=Hola%2C%20quisiera%20hablar%20con%20un%20agente%20especializado%20sobre%20sus%20m%C3%A1quinas%20y%20servicios."
    );
  }}>
              Hablar con un especialista
            </button>
          </div>

          <div className="home__metrics">
            <div className="home__metric">
              <h3>+5 años</h3>
              <p>Sellando producción industrial en múltiples sectores.</p>
            </div>
            <div className="home__metric">
              <h3>8&nbsp;kW</h3>
              <p>Potencia optimizada para sellar materiales exigentes.</p>
            </div>
            <div className="home__metric">
              <h3>Operación 24/7</h3>
              <p>Estabilidad y repetibilidad en procesos continuos.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Franja inferior con puntos clave */}
      <div className="home__features">
        <div className="home__feature">
          <h4>Sellado de alta frecuencia</h4>
          <p>
            Ideal para PVC, telas técnicas y materiales industriales que
            requieren uniones firmes y duraderas.
          </p>
        </div>
        <div className="home__feature">
          <h4>Integración en tu línea</h4>
          <p>
            Adaptable a diferentes formatos, tiempos de ciclo y flujos de
            producción existentes.
          </p>
        </div>
        <div className="home__feature">
          <h4>Acompañamiento técnico</h4>
          <p>
            Asesoría en puesta en marcha, mantenimiento y optimización del
            proceso de sellado.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
