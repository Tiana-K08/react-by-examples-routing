import { Outlet } from 'react-router-dom';

import Navbar from '../navigation/Navbar.jsx';

export default function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>{/* <Footer /> */}</footer>
    </>
  );
}
