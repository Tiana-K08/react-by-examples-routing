// --- Approach 1: Classic React Router Configuration ---
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './navigation/Navbar.jsx';
// import Homepage from './pages/Homepage.jsx';
// import AboutLayout from './pages/about/AboutLayout.jsx';
// import AboutIndex from './pages/about/AboutIndex.jsx';
// import Education from './pages/about/Education.jsx';
// import Experience from './pages/about/Experience.jsx';
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
//           <Route path="/about-me" element={<AboutLayout />}>
//             <Route index element={<AboutIndex />} />
//             <Route path="education" element={<Education />} />
//             <Route path="experience" element={<Experience />} />
//           </Route>
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//       <footer>{/* <Footer /> */}</footer>
//     </Router>
//   );
// }

// --- Approach 2: Object-Based Routing Configuration with the Data API ---
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import Layout from './layout/Layout.jsx';
// import Homepage from './pages/Homepage.jsx';
// import AboutLayout from './pages/about/AboutLayout.jsx';
// import AboutIndex from './pages/about/AboutIndex.jsx';
// import Education from './pages/about/Education.jsx';
// import Experience from './pages/about/Experience.jsx';
// import Contact from './pages/Contact.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { index: true, element: <Homepage /> },
//       {
//         path: 'about-me',
//         element: <AboutLayout />,
//         children: [
//           { index: true, element: <AboutIndex /> },
//           { path: 'education', element: <Education /> },
//           { path: 'experience', element: <Experience /> },
//         ],
//       },
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

import Layout from './layout/Layout.jsx';
import Homepage from './pages/Homepage.jsx';
import AboutLayout from './pages/about/AboutLayout.jsx';
import AboutIndex from './pages/about/AboutIndex.jsx';
import Education from './pages/about/Education.jsx';
import Experience from './pages/about/Experience.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="about-me" element={<AboutLayout />}>
        <Route index element={<AboutIndex />} />
        <Route path="education" element={<Education />} />
        <Route path="experience" element={<Experience />} />
      </Route>
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
