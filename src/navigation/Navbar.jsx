import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about-me">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
