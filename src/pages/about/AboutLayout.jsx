import { Outlet } from 'react-router-dom';

export default function AboutLayout() {
  return (
    <>
      <h1>About Me</h1>
      <Outlet />
    </>
  );
}
