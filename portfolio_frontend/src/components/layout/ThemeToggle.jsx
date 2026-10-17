import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      className={styles.button}
      onClick={toggleTheme}
      aria-label={isLight ? 'Ativar tema escuro' : 'Ativar tema claro'}
    >
      {isLight ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}
