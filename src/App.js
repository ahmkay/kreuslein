import ResponsiveAppBar from './components/ResponsiveAppBar';
import { Route, Routes } from 'react-router';

import Home from "./components/Home";
import Notar from "./components/Notar";
import Services from "./components/Services";
import Info from "./components/Info";
import Contact from "./components/Contact";
import Imprint from "./components/Imprint";
import Privacy from "./components/Privacy";
import Security from "./components/Security";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Notar" element={<Notar />} />
        <Route path="/Leistungen" element={<Services />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Kontakt" element={<Contact />} />
        <Route path="/Impressum" element={<Imprint />} />
        <Route path="/Datenschutz" element={<Privacy />} />
        <Route path="/Sicherheit" element={<Security />} />

      </Routes>

      <Footer />

    </div >
  );
}

export default App;
