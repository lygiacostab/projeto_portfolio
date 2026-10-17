import { NavLink } from 'react-router-dom';
import { Image, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { PATHS } from '../../routes/paths';
import styles from './TopNav.module.css';

const NAV_ITEMS = [
  { to: PATHS.works, label: 'Trabalhos', icon: Image },
  { to: PATHS.contact, label: 'Entrar em contato', icon: Mail },
];

export default function TopNav() {
  return (
    <header className={styles.topNav}>
      <nav className={styles.menu} aria-label="Principal">
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
          >
            <Icon size={20} aria-hidden="true" />
            {label}
          </NavLink>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
}
