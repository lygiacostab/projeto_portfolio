import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import WorksPage from '../pages/WorksPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';
import { PATHS } from './paths';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={PATHS.works} element={<WorksPage />} />
        <Route path={PATHS.contact} element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
