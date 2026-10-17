import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import { PATHS } from '../routes/paths';

export default function NotFoundPage() {
  return (
    <>
      <PageHeader title="Página não encontrada" subtitle="O endereço acessado não existe." />
      <Link to={PATHS.works}>Voltar para os trabalhos</Link>
    </>
  );
}
