# Portfolio — Bruno de Souza Farias

Portfolio pessoal de Bruno de Souza Farias com identidade visual própria ("Áureo" — dark luxe): charcoal quente, tipografia serifada (Fraunces) e acentos em dourado, rede de partículas interativa no hero, e tema claro em papel quente. Construído com [Astro](https://astro.build).

## Visão geral

- Projeto: Portfolio pessoal
- Autor: Bruno de Souza Farias
- Stack: Astro + TypeScript, CSS puro (sem framework de UI)
- Estrutura: Home (hero com rede de partículas) → Work (projetos com case study em modal) → Contato. Bio/skills/experiência/educação/certificações ficam num drawer lateral ("Sobre mim").

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build de produção

```bash
npm run build     # gera ./dist
npm run preview    # serve o build localmente para conferir antes do deploy
```

## Deploy (GitHub Pages)

O deploy é automático via GitHub Actions (`.github/workflows/deploy.yml`): a cada push em `main`, o workflow builda o projeto e publica `dist/` no GitHub Pages.

**Configuração necessária no repositório (uma vez só):** em Settings → Pages → Build and deployment → Source, selecione **GitHub Actions** (em vez de "Deploy from a branch", que era usado pela versão estática anterior).

## Estrutura do projeto

- `src/pages/index.astro` — monta a página a partir dos componentes
- `src/components/` — Header, Hero, Work (+ modal de case study), AboutDrawer, Contact, Footer
- `src/data/` — conteúdo (projetos, bio, skills, experiência, educação, certificações) separado da apresentação
- `src/scripts/` — tema (dark/light), rede de partículas (canvas), interações (drawer, modal, form, nav)
- `src/styles/global.css` — design tokens (cores, tipografia) e estilos globais
- `public/assets/` — imagens e CV reaproveitados do site anterior
- `docs/superpowers/specs/` — spec de design da sessão de brainstorming que originou esse redesign

## Próximos passos sugeridos

- Integração real com EmailJS no formulário de contato (hoje só valida e simula envio)
- Adicionar mais projetos ao `src/data/projects.ts` conforme forem ficando prontos
- Configurar domínio customizado (se desejar) em Settings → Pages

## Contato

- LinkedIn: https://www.linkedin.com/in/bruno-souza-farias/
- GitHub: https://github.com/BrunoSouzaFarias
