// Aceita "YYYY-MM-DD" (ou ISO completo) e devolve "12 de setembro de 2025".
// Montamos a data localmente para evitar o deslocamento de fuso horário.
export function formatDate(isoDate) {
  const [year, month, day] = isoDate.slice(0, 10).split('-').map(Number);

  return new Date(year, month - 1, day).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
