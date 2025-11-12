# Portfolio — Bruno de Souza Farias

Este repositório contém o portfolio pessoal de Bruno de Souza Farias. O site foi atualizado com melhorias de SEO, design, acessibilidade, dark mode, seção de projetos e certificações, e formulários com validação.

## Visão geral

- Projeto: Portfolio pessoal
- Autor: Bruno de Souza Farias
- Tecnologias: HTML5, CSS3 (variáveis e animações), JavaScript (ES6+), Box Icons, ScrollReveal
- Objetivo: apresentar projetos, skills, certificações e contato

## Como ver o site localmente

O site é estático. Para abrir localmente basta abrir o arquivo `index.html` no seu navegador:

1. Abra o explorador de arquivos e navegue até a pasta do projeto.
2. Clique duas vezes em `index.html` ou abra no navegador.

Se preferir servir localmente (útil para testar caminhos relativos), use um servidor HTTP simples. Exemplo com Python (se instalado):

```powershell
# No PowerShell, estando na pasta do projeto
python -m http.server 8000
# Abra http://localhost:8000 no navegador
```

## Como publicar no GitHub Pages

Opção A — Repositório com nome `SEUUSUARIO.github.io` (recomendado para site principal):
1. No GitHub, crie um repositório com o nome `SEUUSUARIO.github.io` e publique.
2. Faça push do conteúdo para o branch `main`.
3. O site fica disponível em: `https://SEUUSUARIO.github.io`

Opção B — Repositório qualquer e Pages configurado:
1. No GitHub, vá em Settings → Pages → Source.
2. Selecione branch `main` e `/(root)`.
3. Salve e aguarde alguns minutos; a URL será mostrada.

> Observação: também é possível usar a CLI `gh` para deploy automatizado (`gh pages`) se preferir.

## Como contribuir / enviar atualizações

1. Faça alterações localmente.
2. Adicione, commit e push:

```powershell
git add .
git commit -m "Atualização: descrição do que foi alterado"
git push origin main
```

3. Se quiser usar pull requests (colaboradores), crie uma branch, faça PR e faça merge no `main`.

## Credenciais Git (autenticação)

- Para `git push` use o método de autenticação que preferir: Git Credential Manager (recomendado), token pessoal (PAT) ou `gh auth login`.
- Se houver prompts de usuário/senha, use seu nome de usuário do GitHub e o PAT (token) como senha.

## Arquivos importantes

- `index.html` — página principal
- `assets/css/styles.css` — estilos e temas
- `assets/js/main.js` — scripts (dark mode, validação, animações)
- `.gitignore` — arquivos ignorados
- `MELHORIAS.md`, `COMO_USAR.md`, `TESTES.md`, `PROXIMAS_MELHORIAS.md` — documentação interna

## Próximos passos recomendados

- Habilitar GitHub Pages (se ainda não habilitado)
- Adicionar `LICENSE` (ex: MIT) se quiser permitir reuso
- Atualizar `README.md` com mais detalhes e screenshots
- Integrar EmailJS para o formulário de contato (se desejar enviar emails reais)

## Contato

- LinkedIn: https://www.linkedin.com/in/bruno-souza-farias/
- GitHub: https://github.com/BrunoSouzaFarias

---

Obrigado! Se quiser, eu posso também criar um `LICENSE` (MIT) e adicionar screenshots no `README.md`. Quer que eu crie o `LICENSE` agora?