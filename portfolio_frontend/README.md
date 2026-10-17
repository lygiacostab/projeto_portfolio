# Portfólio – Front-end (React + Vite)

## Rodando
```bash
npm install
cp .env.example .env   # VITE_USE_MOCKS=true funciona sem back-end
npm run dev
```

## Estrutura
```
src/
  routes/       AppRoutes.jsx + paths.js (rotas centralizadas)
  pages/        uma página por rota (só compõem componentes)
  components/   layout/ · works/ · contact/ · ui/ (reutilizáveis)
  services/     ÚNICA camada que fala com a API (httpClient + um service por recurso)
  hooks/        useFetch, useTheme
  mocks/        dados falsos usados enquanto o back-end não existe
  utils/        funções puras (formatDate)
  styles/       variáveis de tema (claro/escuro) e estilos globais
```

## Contrato esperado do back-end (Node.js)
| Método | Rota       | Resposta / corpo |
|--------|------------|------------------|
| GET    | /profile   | `{ name, role, photoUrl, education: [], location, email, linkedin, bio }` |
| GET    | /works     | `[{ id, title, description, imageUrl, date: "YYYY-MM-DD" }]` |
| POST   | /contact   | corpo `{ name, email, message }` → `{ ok: true }` |

Para ligar ao back-end: `VITE_USE_MOCKS=false` (o proxy do Vite encaminha `/api` para `http://localhost:3333`).
