import { useState } from "react";
import MachinesCarousel from "../carrusel/MachinesCarousel";
import type { Machine } from "../carrusel/MachinesCarousel"; // 👈 IMPORT DE TIPO
import MachineDetail from "../machinedetail/MachineDetail";
import "./Maquinas.scss";

function Maquinas() {
  // 👇 useState tipado con Machine (que es un type)
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);

  return (
    <section className="maquinas">
      <div className="card">
        <h2>Encuentra la mejor máquina para ti</h2>
        <button onClick={() => {
    window.open(
      "https://wa.me/573214617936?text=Hola%2C%20quisiera%20hablar%20con%20un%20agente%20especializado%20sobre%20sus%20m%C3%A1quinas%20y%20servicios."
    );
  }}>Ayúdame a elegir</button>
      </div>

      {/* Pasamos el setter al carrusel */}
      <MachinesCarousel onSelectMachine={setSelectedMachine} />

      {/* Detalle de máquina (modal) */}
      <MachineDetail
        machine={selectedMachine}           // 👈 en minúscula
        onClose={() => setSelectedMachine(null)}
      />
    </section>
  );
}

export default Maquinas;
