# Guia de Uso - Dark Mode e Funcionalidades

## 🌙 Dark Mode

### Como Funciona:
- O site detecta automaticamente a preferência do seu sistema operacional (claro/escuro)
- Um botão **Sol/Lua** no canto superior direito permite alternar temas manualmente
- A preferência é salva automaticamente no navegador

### Teste:
1. Clique no ícone de **Sol** (tema claro) ou **Lua** (tema escuro) no navbar
2. A página muda de tema instantaneamente
3. Ao recarregar, o tema escolhido é mantido

---

## 📧 Formulário de Contato

### Validações Implementadas:
✅ Nome obrigatório  
✅ Email obrigatório e validado  
✅ Mensagem obrigatória  
✅ Confirmação de sucesso ao enviar  

### Para Integrar com EmailJS:
1. Acesse [emailjs.com](https://www.emailjs.com)
2. Crie uma conta gratuita
3. Configure um serviço de email
4. Pegue suas credenciais (Service ID, Template ID, Public Key)
5. Descomente e edite as linhas comentadas em `assets/js/main.js`

---

## 🎨 Recursos de Design

### Gradientes Implementados:
- Títulos com gradiente azul
- Botões com gradiente moderno
- Badges de tecnologia com gradiente
- Footer com gradiente

### Animações:
- Entrada suave do título
- Imagem flutuante na home
- Efeito hover em cards
- Transições em botões

### Paleta de Cores:
- Tema Claro:
  - Fundo: #ffffff
  - Texto: Azul escuro
  - Primária: #0066ff (Azul)

- Tema Escuro:
  - Fundo: #1a1a1a
  - Texto: #f0f0f0
  - Primária: #0066ff (Azul)

---

## 📱 Responsividade

O site foi otimizado para:
- 📱 Celulares (320px+)
- 📲 Tablets (576px+)
- 💻 Desktops (768px+)
- 🖥️ Grandes telas (992px+)

---

## ✨ Melhorias de Performance

### Lazy Loading:
Todas as imagens carregam sob demanda para melhorar performance

### Otimizações Implementadas:
- CSS modular com variáveis
- Transições GPU-aceleradas
- Scroll suave
- Animações eficientes

---

## 🔍 SEO

### Meta Tags Implementadas:
- Open Graph para compartilhamento em redes
- Twitter Cards
- Schema.org Structured Data
- Keywords otimizadas
- Meta description

### Para Melhorar SEO Ainda Mais:
1. Crie um sitemap.xml
2. Adicione robots.txt
3. Use Google Search Console
4. Configure Google Analytics

---

## 🧪 Testar o Portfolio

### No Navegador:
```
1. Abra c:\Users\LIBERTY\BrunoSouzaFarias.github.io\index.html
2. Teste o dark mode clicando no sol/lua
3. Redimensione a janela para testar responsividade
4. Envie uma mensagem no formulário
```

### Ferramentas de Teste:
- **Lighthouse** (DevTools do Chrome) - Performance e SEO
- **Google PageSpeed Insights** - Análise de velocidade
- **W3C Validator** - Validação HTML/CSS

---

## 📋 Checklist de Funcionalidades

✅ Dark Mode funcionando  
✅ Menu mobile responsivo  
✅ Formulário com validação  
✅ Seção de certificações  
✅ Cards de projetos com descrição  
✅ Animações suaves  
✅ SEO otimizado  
✅ Acessibilidade melhorada  
✅ Lazy loading ativo  
✅ Gradientes modernos  

---

## 🔧 Código Útil

### Ativar Dark Mode Manualmente (em DevTools):
```javascript
document.documentElement.setAttribute('data-theme', 'dark');
localStorage.setItem('theme', 'dark');
```

### Resetar Theme:
```javascript
localStorage.removeItem('theme');
location.reload();
```

---

**Dúvidas?** Verifique o arquivo `MELHORIAS.md` para detalhes completos!
