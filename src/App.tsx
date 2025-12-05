import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/home/Home";
import Splash from "./components/Splash/Splash";
import { useState } from "react";
import Maquina from "./components/maquina/Maquina";
import Maquinas from "./components/Maquinas/Maquinas";
import Maintenance from "./components/maintenance/Maintenance";
import Formulario from "./components/Form/Formulario";
import Footer from "./components/Footer/Footer";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <Splash onClose={() => setShowSplash(false)} />}

      {!showSplash && (
        <>
          <Nav />
          <Home />
          <Maquina/>
          <Maquinas />
          <Maintenance />
          <Formulario />
          <Footer />  

        </>
      )}
    </>
  );
}

export default App;
