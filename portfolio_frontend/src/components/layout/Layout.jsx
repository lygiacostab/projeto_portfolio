import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import StatusMessage from '../ui/StatusMessage';
import { useFetch } from '../../hooks/useFetch';
import { getProfile } from '../../services/profileService';
import styles from './Layout.module.css';

export default function Layout() {
  const { data: profile, loading, error } = useFetch(getProfile);

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        {loading && <StatusMessage>Carregando perfil…</StatusMessage>}
        {error && <StatusMessage type="error">Não foi possível carregar o perfil.</StatusMessage>}
        {profile && <Sidebar profile={profile} />}
      </aside>

      <div className={styles.content}>
        <TopNav />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
