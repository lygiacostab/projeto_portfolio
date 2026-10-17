import { API_URL } from '../config';

export async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Falha na requisição (${response.status}).`);
  }

  return response.json();
}
