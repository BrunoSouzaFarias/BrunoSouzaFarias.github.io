# Redesign do Portfólio — Neon Circuit

## Contexto

O portfólio atual (`BrunoSouzaFarias.github.io`) é um site estático HTML/CSS/JS funcional, com boas práticas de SEO/acessibilidade já implementadas, mas visualmente genérico (template comum, 8 seções tipo "currículo completo" na rolagem principal). Como é a porta de entrada para clientes e oportunidades de trabalho, o objetivo é um visual único, bonito e memorável, com efeitos visuais que chamem atenção sem comprometer performance, SEO ou acessibilidade.

Decisões tomadas em conversa de brainstorming (com apoio do companheiro visual para validar direção estética):

## Direção visual: "Neon Circuit"

- Fundo preto puro, acentos neon verde/ciano (`#00ffb2` / `#22d3ee`), linhas de circuito decorativas, toques monospace.
- Personalidade "engenheiro/hacker sério" — bordas retas e precisas, não arredondadas/orgânicas.
- Tema claro também suportado (toggle mantido): mesma identidade visual (linhas de circuito, rede de partículas), mas em fundo claro com acentos verde-petróleo escuro em vez de neon brilhante — neon não funciona bem sobre branco.

## Estrutura do site

Rolagem principal **minimalista**, só 3 seções:
1. **Home (hero)** — headline forte + canvas de rede de partículas animada (pontos conectados tipo constelação, derivam suavemente, nós próximos do cursor brilham mais — sensação "rede neural/dados").
2. **Work** — projetos em destaque. Cada card abre um **modal de case study completo** (problema → solução → resultado, tecnologias, link pro repositório).
3. **Contact** — formulário + links diretos (email, LinkedIn, GitHub).

Conteúdo que antes ficava em seções próprias (Sobre, Skills, Soft Skills, Experiência, Educação, Certificações) passa para um **drawer lateral** ("Mais sobre mim"), acessível por um botão no header, sem poluir a rolagem principal.

## Base técnica

**Astro**, com TypeScript e CSS puro (sem framework de UI) — recomendado e aprovado porque:
- A interatividade necessária é simples (abrir/fechar drawer, abrir/fechar modal, alternar tema, canvas de partículas) — não precisa do peso de React/Next para isso.
- Astro builda para HTML/CSS/JS estático otimizado, com o mínimo de JS enviado ao navegador — bom para Lighthouse/SEO, que já era uma preocupação do site anterior.
- Deploy para GitHub Pages é direto via GitHub Actions (build + publish do `dist/`).
- Bibliotecas de animação (GSAP, etc.) funcionam normalmente sem precisar de um framework de componentes.

## Componentes

- `Layout.astro` — shell HTML, meta tags (SEO/OG/Twitter/JSON-LD reaproveitados do site atual), import de CSS global, toggle de tema.
- `Header.astro` — logo, botão "Mais sobre mim" (abre drawer), toggle de tema claro/escuro, nav simplificada (Home / Work / Contato).
- `Hero.astro` + `particle-network.ts` — headline, CTAs (Contato / Baixar CV), canvas de rede de partículas reativo ao mouse.
- `Work.astro` — grid de cards de projeto (reaproveita os 3 projetos reais do site atual: Project Fallen, Social Tree, Banco Digital OOP), cada card dispara um modal de case study.
- `CaseStudyModal.astro` — modal reutilizável, conteúdo por projeto (problema/solução/resultado/tech/links) injetado via `data-*` attributes + JS.
- `AboutDrawer.astro` — painel lateral com bio, barras de skills técnicas, soft skills, timeline de experiência, educação e certificações (todo o conteúdo já existente, reorganizado).
- `Contact.astro` — formulário (mesma validação JS do site atual) + ícones sociais.
- `Footer.astro` — copyright + redes sociais.
- `ThemeToggle` (script inline/`theme.ts`) — mesma lógica de localStorage + preferência do sistema do site atual, adaptada às duas paletas Neon Circuit (dark/light).

## Dados e conteúdo

Todo o conteúdo textual (bio, skills, experiência, formação, certificações, descrições de projeto) é reaproveitado do `index.html` atual — sem invenção de conteúdo novo, só reestruturação visual e de hierarquia de informação. Imagens existentes (`assets/img/*`) e CV (`assets/cv/bruno-souza-cv.html`) são reaproveitados.

## Tratamento de erro / robustez

- Canvas de partículas: feature-detect de `prefers-reduced-motion` — se o usuário tiver essa preferência ativada, desenha a rede estática sem animação (acessibilidade).
- Formulário de contato: mantém validação client-side já existente; sem backend real, então o submit mostra mensagem de sucesso simulada (igual ao comportamento atual) — integração com EmailJS fica como próximo passo, não bloqueia esse redesign.
- Modal e drawer: fecham com `Esc` e clique fora, focus trap básico para acessibilidade de teclado.

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`): em push para `main`, roda `npm ci && npm run build`, publica `dist/` via `actions/deploy-pages`. Configuração do GitHub Pages no repositório passa a usar "GitHub Actions" como source (em vez de servir `main` diretamente), que é o necessário para qualquer site com etapa de build.

## Verificação

- `npm run build` deve completar sem erros e gerar `dist/index.html` funcional.
- Checar visualmente em `npm run dev`: hero com rede de partículas reagindo ao mouse, toggle de tema trocando paleta corretamente, drawer abrindo com conteúdo completo, modais de case study abrindo com conteúdo de cada projeto, formulário validando campos.
- Lighthouse (performance/SEO/acessibilidade) deve permanecer em níveis altos, dado que a base (Astro, pouco JS) favorece isso.
