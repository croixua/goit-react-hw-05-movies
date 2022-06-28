import Navigation from './Navigation';
import s from './AppBar.module.css';
import { Outlet } from 'react-router-dom';

export default function AppBar() {
  return (
    <>
      <header className={s.header}>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
