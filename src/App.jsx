// --- Approach 1: Classic React Router Configuration ---
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './navigation/Navbar.jsx';
// import Homepage from './pages/Homepage.jsx';
// import About from './pages/About.jsx';
// import Contact from './pages/Contact.jsx';

// export default function App() {
//   return (
//     <Router>
//       <header>
//         <Navbar />
//       </header>
//       <main>
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/about-me" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//       <footer>{/* <Footer /> */}</footer>
//     </Router>
//   );
// }

// --- Approach 2: Object-Based Routing Configuration with the Data API ---
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import Layout from './navigation/Layout.jsx';
// import Homepage from './pages/Homepage.jsx';
// import About from './pages/About.jsx';
// import Contact from './pages/Contact.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { index: true, element: <Homepage /> },
//       { path: 'about-me', element: <About /> },
//       { path: 'contact', element: <Contact /> },
//     ],
//   },
// ]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }

// --- Approach 3: JSX-Based Routing Configuration with the Data API ---
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Layout from './navigation/Layout.jsx';
import Homepage from './pages/Homepage.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="about-me" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
