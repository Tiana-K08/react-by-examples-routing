// --- Approach 1: Classic React Router Configuration ---
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './navigation/Navbar.jsx';
import Homepage from './pages/Homepage.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>{/* <Footer /> */}</footer>
    </Router>
  );
}
