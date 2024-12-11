import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Páginas
import Sobre from "./pages/Sobre";
import Desenvolvimento from "./pages/Desenvolvimento";
import Audiovisual from "./pages/Audiovisual";
import Repositorios from "./pages/Repositorios";
import ReactPages from "./pages/ReactPages";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Sobre />} />
            <Route path="/desenvolvimento" element={<Desenvolvimento />} />
            <Route path="/audiovisual" element={<Audiovisual />} />
            <Route path="/repositorios" element={<Repositorios />} />
            <Route path="/react" element={<ReactPages />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
