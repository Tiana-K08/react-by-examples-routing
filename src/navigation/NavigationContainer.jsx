import { NavLink } from 'react-router-dom';

export default function NavigationContainer() {
  return (
    <div className="nav-wrapper">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about-me">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}
