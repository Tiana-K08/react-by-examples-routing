// --- Approach 1: Component-based routing with BrowserRouter ---
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import NavigationContainer from './navigation/NavigationContainer.jsx';
// import Homepage from './pages/Homepage.jsx';
// import About from './pages/About.jsx';
// import Contact from './pages/Contact.jsx';

// export default function App() {
//   return (
//     <Router>
//       <div className="page-wrapper">
//         <NavigationContainer />
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/about-me" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// --- Approach 2: Object-based route configuration with createBrowserRouter ---
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
//       { path: '/about-me', element: <About /> },
//       { path: '/contact', element: <Contact /> },
//     ],
//   },
// ]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }

// --- Approach 3: JSX-based route configuration with createBrowserRouter ---
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Layout from './navigation/Layout.jsx';
import Homepage from './pages/Homepage.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/about-me" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
