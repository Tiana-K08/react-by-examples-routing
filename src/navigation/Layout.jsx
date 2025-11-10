// --- Approach 3: Using createBrowserRouter and RouterProvider ---
import { Outlet } from 'react-router-dom';

import NavigationContainer from './NavigationContainer.jsx';

export default function Layout() {
  return (
    <div className="page-wrapper">
      <NavigationContainer />
      <Outlet />
    </div>
  );
}
