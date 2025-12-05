import { useState } from "react";
import "./Nav.scss";
import icono from "../../assets/icono.png";


function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const offset = -60; // ajusta según la altura de tu navbar  
  const y = el.getBoundingClientRect().top + window.scrollY + offset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

  return (
    <nav className={`barra ${isOpen ? "barra--open" : ""}`}>
      <img src={icono} alt="Logo" width="80px" />

      {/* Botón burger solo visible en móvil/tablet */}
     <button
  className="burger"
  type="button"
  onClick={toggleMenu}
  aria-label="Abrir menú"
>
  <svg
    className="burger__icon"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M4 7h16M4 12h16M4 17h16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>



      {/* Contenedor del menú (links + botón) */}
      <div
        className={`barra__menu ${
          isOpen ? "barra__menu--visible" : ""
        }`}
      >
        <div className="Lista">
           <ul>
    <li onClick={() => scrollToSection("mantenimiento")}>Mantenimientos</li>
    <li onClick={() => scrollToSection("Machines")}>Máquinas</li>
    <li onClick={() => scrollToSection("Formulario")}>Contacto</li>
          </ul>
        </div>

        <button className="boton"   onClick={() => {
    window.open(
      "https://wa.me/573214617936?text=Hola%2C%20deseo%20cotizar%20una%20m%C3%A1quina.%20%C2%BFMe%20puedes%20brindar%20m%C3%A1s%20informaci%C3%B3n%3F"
    );
  }}>
          <h3>COTIZAR</h3>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
