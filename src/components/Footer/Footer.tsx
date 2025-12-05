import "./Footer.scss";
import icono from "../../assets/icono.png";

function Footer() {
  return (
    <footer className="footer">
      {/* BLOQUE SUPERIOR: LOGO + CTA CONTACTO / MANTENIMIENTOS */}
      <div className="footer__top">
        {/* Marca */}
        <div className="footer__brand">
          <img src={icono} alt="Icono MAELSSA" className="footer__logo" />
          <h2 className="footer__brand-name">MAELSSA</h2>
        </div>

        {/* CTAs grandes */}
        <div className="footer__cta">
          <div className="footer__cta-row footer__cta-row--primary">
            <div className="footer__cta-text">
              <p className="footer__cta-tag footer__cta-tag--primary">
                Reparaciones completas
              </p>
              <h2>CONTACTO</h2>
            </div>
            <button className="footer__cta-arrow footer__cta-arrow--primary">
              →
            </button>
          </div>

          <div className="footer__cta-row footer__cta-row--secondary">
            <div className="footer__cta-text">
              <p className="footer__cta-tag">Reparaciones completas</p>
              <h2>MANTENIMIENTOS</h2>
            </div>
            <button className="footer__cta-arrow footer__cta-arrow--secondary">
              →
            </button>
          </div>
        </div>
      </div>

      {/* BLOQUE INFERIOR: COLUMNS + COPYRIGHT */}
      <div className="footer__bottom">
        <div className="footer__columns">
          <div className="footer__column">
            <h3>Empresa</h3>
            <p>Sobre nosotros</p>
            <p>Nuestro equipo</p>
            <p>Carreras</p>
          </div>

          <div className="footer__column">
            <h3>Servicios</h3>
            <p>Sellado de alta frecuencia</p>
            <p>Mantenimiento industrial</p>
            <p>Reparación de equipos</p>
          </div>

          <div className="footer__column">
            <h3>Contacto</h3>
            <p>Email: crmaelssas.a.s@hotmail.com</p>
            <p>Teléfono 1: +(57) 3214617936</p>
            <p>Teléfono 2: +(57) 3125506510</p>
            <p>Ubicación: Bogotá, Colombia</p>
          </div>
        </div>

        <p className="footer__copy">
          © 2024 MAELSSA. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
