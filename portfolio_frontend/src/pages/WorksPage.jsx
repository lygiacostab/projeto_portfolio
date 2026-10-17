import PageHeader from '../components/ui/PageHeader';
import StatusMessage from '../components/ui/StatusMessage';
import WorksGrid from '../components/works/WorksGrid';
import { useFetch } from '../hooks/useFetch';
import { getWorks } from '../services/workService';

export default function WorksPage() {
  const { data: works, loading, error } = useFetch(getWorks);

  return (
    <>
      <PageHeader
        title="Trabalhos Realizados"
        subtitle="Aqui estão alguns dos meus trabalhos e atendimentos realizados."
      />
      {loading && <StatusMessage>Carregando trabalhos…</StatusMessage>}
      {error && <StatusMessage type="error">Não foi possível carregar os trabalhos.</StatusMessage>}
      {works?.length === 0 && <StatusMessage>Nenhum trabalho publicado ainda.</StatusMessage>}
      {works?.length > 0 && <WorksGrid works={works} />}
    </>
  );
}
