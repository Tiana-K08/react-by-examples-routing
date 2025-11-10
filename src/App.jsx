// Approach 1: Using BrowserRouter with Routes and Route components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationContainer from './navigation/NavigationContainer.jsx';
import Homepage from './pages/Homepage.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  // Approach 1: Using BrowserRouter with Routes and Route components
  return (
    <Router>
      <div className="page-wrapper">
        <NavigationContainer />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
